import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "../user.service";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe("createUser", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("getAllUser", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("deleteUser", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("verifyUser", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("updateUser", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("getUserByEmail", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("findOneById", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });

  describe("findOneByEmail", () => {
    it("should be defined", () => {
      expect(service).toBeDefined();
    });
  });
});
