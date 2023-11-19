import { Module, forwardRef } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { AuthModule } from "src/auth/auth.module";
import { MailService } from "src/mail/mail.service";
import { MailModule } from "src/mail/mail.module";

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
