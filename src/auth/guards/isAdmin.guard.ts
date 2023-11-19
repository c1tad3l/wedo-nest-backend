import {
  ExecutionContext,
  Injectable,
  BadRequestException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class IsAdminGuard {
  constructor(private jwtService: JwtService) {}

  public canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const user = this.jwtService.verify(token);
    req.user = user;

    if (req.user.isAdmin) {
      return true;
    } else {
      throw new BadRequestException("Недостаточно прав");
    }
  }
}
