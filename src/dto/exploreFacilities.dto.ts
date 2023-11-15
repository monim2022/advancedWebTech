import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class exploreFacilitiesDto{
   
    @IsNotEmpty()
    @IsNumber() 
    TotalScholarship: Number;

    @IsNotEmpty()
    @IsString() 
    academicSholarship: string;
    
    @IsNotEmpty()
    @IsString() 
    SholarshipRequirements: string;

    @IsNotEmpty()
    @IsString() 
    Description: string;

   

}