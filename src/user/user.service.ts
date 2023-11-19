import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(input: CreateUserDto) {
    const user = await this.userRepository.save(input);

    return user;
  }

  public async getAllUser() {
    const users = await this.userRepository.find();

    return users;
  }

  public async deleteUser(id: string): Promise<void> {
    const response = await this.userRepository.delete(id);
    if (!response.affected) {
      throw new NotFoundException(
        "Пользователь с таким идентификатором не существует",
      );
    }
  }

  public async verifyUser(token: string) {
    try {
      const user = await this.userRepository.findOneBy({
        token,
      });

      if (user) {
        console.log(user);
        user.isVerify = true;
        await this.userRepository.save(user);
      } else {
        console.log("Неправильный токен");
      }
    } catch (error) {
      console.error("Ошибка при подтверждения пользователя", error);
    }
  }

  public async updateUser(id: string, input: UpdateUserDto): Promise<User> {
    const candidate: User = await this.findOneById(id);

    return await this.userRepository.save({ ...candidate, ...input });
  }

  public async getUserByEmail(email: string) {
    const candidate: User | null = await this.userRepository.findOneBy({
      email,
    });
    return candidate;
  }

  public async findOneById(id: string): Promise<User> {
    const candidate: User | null = await this.userRepository.findOneBy({ id });
    if (candidate) {
      return candidate;
    } else {
      throw new NotFoundException("Пользователя с таким id не существует");
    }
  }

  public async findOneByEmail(email: string): Promise<User> {
    const candidate: User | null = await this.userRepository.findOneBy({
      email,
    });
    if (candidate) {
      return candidate;
    } else {
      throw new NotFoundException("Пользователя с данной почтой не существует");
    }
  }
}
