import { IsEmail, IsNotEmpty, IsNumber, IsString,  } from "class-validator";
import { messageDto } from "./messages.dto";

export class teacherInfoDto{
    @IsNotEmpty({})
    @IsNumber()
    teacherId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    contact: number;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    position: string;
}