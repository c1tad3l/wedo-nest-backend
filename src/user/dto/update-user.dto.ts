import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateUserDto {
  @ApiProperty({ example: "ka11den", description: "Логин" })
  @IsString({ message: "Должно быть строкой!" })
  readonly username: string;

  @ApiProperty({ example: "123", description: "Пароль" })
  @MinLength(5)
  readonly password: string;

  @ApiProperty({ example: "Иван", description: "Имя" })
  @IsString({ message: "Должно быть строкой!" })
  readonly name: string;

  @ApiProperty({ example: "Иванов", description: "Фамилия" })
  @IsString({ message: "Должно быть строкой!" })
  readonly lastName: string;

  @ApiProperty({ example: "Иванович", description: "Отечество" })
  @IsString({ message: "Должно быть строкой!" })
  readonly surname: string;

  @ApiProperty({ example: "+79999999", description: "Номер телефона" })
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  @Matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, {
    message: "Неправильный формат номера телефона",
  })
  readonly phone: string;

  @ApiProperty({ example: "user@mail.ru", description: "Электронная почта" })
  @IsEmail({}, { message: "Неккоректный email" })
  readonly email: string;

  @ApiProperty({ example: "12-19-2023", description: "Дата выдача паспорта" })
  @IsDate({ message: "Неккоректный формат даты" })
  @Type(() => Date)
  readonly passport_date: Date;

  @ApiProperty({ example: "431211", description: "Серия паспорта" })
  @IsString()
  readonly passport_series: string;

  @ApiProperty({ example: "1243124312", description: "Номер паспорта" })
  @IsString()
  readonly passport_number: string;

  @ApiProperty({
    example: "УМВД АСТРАХАНСКОЙ ОБЛАСТИ",
    description: "Кем выдан паспорт",
  })
  @IsString()
  readonly passport_by: string;

  readonly certificate_number: string;

  @ApiProperty({
    example: "12-32-2022",
    description: "Дата выдачи сертификата",
  })
  readonly certificate_date: Date;

  @ApiProperty({
    example: "Лицей #1",
    description: "Название сертификата школы",
  })
  @IsString()
  readonly certificate_school_name: string;

  @ApiProperty({ example: "3.4", description: "Среднии балл" })
  @IsNumber()
  readonly average_point: number;

  @ApiProperty({ example: "да", description: "Общее образование" })
  readonly is_general_education: boolean;

  @ApiProperty({
    example: "да",
    description: "Наличие Российского Гражданства",
  })
  readonly is_citizenship: boolean;

  @ApiProperty({
    example: "да",
    description: "Наличие админ прав",
  })
  readonly isAdmin: boolean;
}
