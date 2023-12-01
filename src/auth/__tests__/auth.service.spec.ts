import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "../auth.service";

describe("AuthService", () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe("signup", () => {
    it("should be defined", () => {
      expect(authService).toBeDefined();
    });
  });

  describe("signin", () => {
    it("should be defined", () => {
      expect(authService).toBeDefined();
    });
  });

  describe("validateUser", () => {
    it("should be defined", () => {
      expect(authService).toBeDefined();
    });
  });

  describe("generateToken", () => {
    it("should be defined", () => {
      expect(authService).toBeDefined();
    });
  });
});
