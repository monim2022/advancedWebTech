import { IsEmail, IsNotEmpty, IsNumber, IsString, isEmail, isString } from "class-validator";

export class administrationInfoDto{

    
    @IsNotEmpty()
    @IsString()
    Name: string ;
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    Email: string;
    @IsNotEmpty()
    @IsNumber()
    Contact: number;
    @IsNotEmpty()
    @IsString()
    Address: string;
    @IsNotEmpty()
    @IsString()
    Position: string;
    @IsNotEmpty()
    @IsString()
    Degree: string;
    @IsNotEmpty()
    @IsString()
    Award: string;

    
}