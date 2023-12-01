import { Module, forwardRef } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { AuthModule } from "../auth/auth.module";
import { MailService } from "../mail/mail.service";
import { MailModule } from "../mail/mail.module";

@Module({
  controllers: [UserController],
  providers: [UserService, MailService],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),
    MailModule,
  ],
  exports: [UserService, MailService],
})
export class UserModule {}
