import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class alumniInfoDto{
    @IsNotEmpty()
    @IsString()
    Name: string ;
    @IsNotEmpty()
    @IsNumber()
    StudentId: string;
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
    job: string;
    
    @IsNotEmpty()
    @IsString()
    achievment:string;

}