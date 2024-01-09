import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "user@domain.com",
    description: "User registration email",
  })
  @IsString({ message: "Must be a string" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;

  @ApiProperty({ example: "123456", description: "User registration password" })
  @IsString({ message: "Must be a string" })
  @Length(4, 16, { message: "Must be between 4  and 16 characters" })
  readonly password: string;
}
