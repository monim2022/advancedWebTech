import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class admissionInfoDto{
    
    @IsNotEmpty()
    @IsString()
    AdmissionStart: string;
    @IsNotEmpty()
    @IsString()
    AdmissionEnd: string;
    @IsNotEmpty()
    @IsString()
    classStart: string;
   
    @IsNotEmpty()
    @IsString()
    Programm: string;

    @IsNotEmpty()
    @IsNumber()
    ApplyFee: number;


    @IsNotEmpty()
    @IsString()
    AdmissionPolicy: string;
  
    

    

}