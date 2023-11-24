import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UserService } from "../user/user.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { User } from "../user/user.entity";
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private mailService: MailService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async signup(input: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(input.email);
    const token = Math.floor(1000 + Math.random() * 9000).toString();

    if (candidate)
      throw new HttpException(
        "Пользователь с таким email существует",
        HttpStatus.BAD_REQUEST,
      );

    const hashPassword = await bcrypt.hash(input.password, 5);
    const user = await this.userService.createUser({
      ...input,
      token: token,
      password: hashPassword,
    });

    await this.mailService.sendUserConfirmation(user, token);

    return this.generateToken(user);
  }

  public async signin(input: CreateUserDto) {
    const user = await this.validateUser(input);
    return this.generateToken(user);
  }

  private async validateUser(input: CreateUserDto) {
    const user = await this.userService.getUserByEmail(input.email);
    const passwordEquals = await bcrypt.compare(input.password, user.password);

    if (user && passwordEquals) return user;

    throw new UnauthorizedException({
      message: "Некорректный емайл или пароль",
    });
  }

  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email, isAdmin: user.isAdmin };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
