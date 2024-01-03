import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: "user@domain.com",
    description: "User registration email",
  })
  readonly email: string;

  @ApiProperty({ example: "123456", description: "User registration password" })
  readonly password: string;
}
