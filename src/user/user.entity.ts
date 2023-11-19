import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @PrimaryGeneratedColumn()
  id: string;

  @ApiProperty({ example: "ka11den", description: "Логин" })
  @Column()
  username: string;

  @ApiProperty({ example: "1234", description: "Пароль" })
  @Column()
  password: string;

  @ApiProperty({ example: "Иван", description: "Имя" })
  @Column()
  name: string;

  @ApiProperty({ example: "Иванов", description: "Фамилия" })
  @Column()
  lastName: string;

  @ApiProperty({ example: "Иванович", description: "Отечество" })
  @Column()
  surname: string;

  @ApiProperty({ example: "+79999999", description: "Номер телефона" })
  @Column()
  phone: string;

  @ApiProperty({ example: "user@mail.ru", description: "Электронная почта" })
  @Column()
  email: string;

  @ApiProperty({ example: "12-19-2023", description: "Дата выдача паспорта" })
  @Column()
  passport_date: Date;

  @ApiProperty({ example: "431211", description: "Серия паспорта" })
  @Column()
  passport_series: string;

  @ApiProperty({ example: "1243124312", description: "Номер паспорта" })
  @Column()
  passport_number: string;

  @ApiProperty({
    example: "УМВД АСТРАХАНСКОЙ ОБЛАСТИ",
    description: "Кем выдан паспорт",
  })
  @Column()
  passport_by: string;

  @Column()
  certificate_number: string;

  @ApiProperty({
    example: "12-32-2022",
    description: "Дата выдачи сертификата",
  })
  @Column()
  certificate_date: Date;

  @ApiProperty({
    example: "Лицей #1",
    description: "Название сертификата школы",
  })
  @Column()
  certificate_school_name: string;

  @ApiProperty({ example: "3.4", description: "Среднии балл" })
  @Column("float")
  average_point: number;

  @ApiProperty({ example: "да", description: "Общее образование" })
  @Column({ default: false })
  @Column()
  is_general_education: boolean;

  @ApiProperty({
    example: "да",
    description: "Наличие Российского Гражданства",
  })
  @Column({ default: false })
  @Column()
  is_citizenship: boolean;

  @ApiProperty({ example: "1234", description: "code" })
  @Column({ nullable: true })
  token: string;

  @ApiProperty({ example: "нет", description: "Подтверждена ли почта" })
  @Column({ default: false })
  isVerify: boolean;

  @ApiProperty({ example: "нет", description: "Наличие прав" })
  @Column({ default: false })
  isAdmin: boolean;
}
