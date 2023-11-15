import { IsEmail, IsNotEmpty, Max, Min, isEmail, min } from "class-validator";


export class contactUsDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Min(5)
    contact: number;
}