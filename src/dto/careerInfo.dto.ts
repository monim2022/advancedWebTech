import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class careerInfoDto{

    @IsNotEmpty()
    @IsString()
    vaccancy: string;

    @IsNotEmpty()
    @IsNumber()
    totalVaccancy: number;

    @IsNotEmpty()
    @IsString()
    position: string;

    @IsNotEmpty()
    @IsNumber()
    salary: number;
    
    @IsNotEmpty()
    @IsString()
    jobDescription: string;
}