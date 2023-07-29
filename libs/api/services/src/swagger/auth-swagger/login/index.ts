import { ApiProperty } from '@nestjs/swagger';

export class LoginSwagger {
  @ApiProperty({
    example: '',
  })
  public email!: string;

  @ApiProperty({
    example: 'min length 6, upper case 1, numbers 1',
  })
  public password!: string;
}