import {
  Body,
  Controller,
  Post,
  Patch,
  Req,
  Get,
  UseGuards,
  Res,
  Delete,
  Param,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";
import { IsAuthGuard } from "../auth/guards/isAuth.guard";
import { Request, Response } from "express";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { IsAdminGuard } from "../auth/guards/isAdmin.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Создание пользователя" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @ApiOperation({ summary: "Получение всех пользователей" })
  @UseGuards(IsAuthGuard)
  @UseGuards(IsAdminGuard)
  @Get()
  public async getAll() {
    return this.userService.getAllUser();
  }

  @ApiOperation({ summary: "Получение своих данных" })
  @UseGuards(IsAuthGuard)
  @Get("me")
  public me(@Req() req: Request & { user: User }, @Res() res: Response) {
    res.status(200).send(req.user);
  }

  @ApiOperation({ summary: "Обновление пользователей" })
  @Patch()
  public async update(
    @Req() req: Request & { user: User },
    @Body() updateUser: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateUser(req.user.id, updateUser);
  }

  @ApiOperation({ summary: "Удаление пользователей" })
  @Delete(":id")
  @UseGuards(IsAdminGuard)
  @UseGuards(IsAuthGuard)
  public async remove(@Param() id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }

  @ApiOperation({ summary: "Подтверждение пользователя" })
  @Get("verify/:token")
  async confirm(@Param("token") token: string) {
    return await this.userService.verifyUser(token);
  }
}
