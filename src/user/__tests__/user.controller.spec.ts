import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";
import { IsAdminGuard } from "../../auth/guards/isAdmin.guard";
import { JwtService } from "@nestjs/jwt";

describe("UserController", () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        IsAdminGuard,
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

    userController = module.get<UserController>(UserController);
  });

  describe("create", () => {
    it("should be defined ", () => {
      expect(userController).toBeDefined();
    });
  });

  describe("getAll", () => {
    it("should be defined ", () => {
      expect(userController).toBeDefined();
    });
  });

  describe("me", () => {
    it("should be defined ", () => {
      expect(userController).toBeDefined();
    });
  });

  describe("update", () => {
    it("should be defined ", () => {
      expect(userController).toBeDefined();
    });
  });

  describe("remove", () => {
    it("should be defined ", () => {
      expect(userController).toBeDefined();
    });
  });

  describe("confirm", () => {
    it("should be defined ", () => {
      expect(userController).toBeDefined();
    });
  });
});
