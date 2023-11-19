import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `http://localhost:3000/user/verify/${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: "Welcome to WeDo Confirm your Email",
      template: "./confirmation",
      context: {
        name: user.name,
        url,
      },
    });
  }
}
