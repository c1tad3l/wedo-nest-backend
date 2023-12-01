import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "../auth.controller";
import { AuthService } from "../auth.service";
import { MailService } from "../../mail/mail.service";
import { UserService } from "../../user/user.service";
import { JwtService } from "@nestjs/jwt";

describe("AuthController", () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: MailService,
          useValue: {},
        },
        {
          provide: UserService,
          useValue: {},
        },
        {
          provide: JwtService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  describe("signin", () => {
    it("should be defined", () => {
      expect(controller).toBeDefined();
    });
  });

  describe("signup", () => {
    it("should be defined", () => {
      expect(controller).toBeDefined();
    });
  });
});
