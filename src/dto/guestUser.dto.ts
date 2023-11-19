import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class guestUserDto{
    @IsNotEmpty()
    @IsString()
    username: string;
  
    @IsNotEmpty()
   @IsString()
    email: string;

    @IsNotEmpty()
    password: string;

}


