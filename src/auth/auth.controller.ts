import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Авторизация" })
  @Post("signin")
  public signin(@Body() input: CreateUserDto) {
    return this.authService.signin(input);
  }

  @ApiOperation({ summary: "Регистрация" })
  @Post("signup")
  public signup(@Body() input: CreateUserDto) {
    return this.authService.signup(input);
  }
}
