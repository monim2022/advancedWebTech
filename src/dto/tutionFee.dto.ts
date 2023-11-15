import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class tutionFeeDto{
    @IsNotEmpty()
    @IsNumber() 
    TotalTutionFee: Number;

    @IsNotEmpty()
    @IsString() 
    Installment: string;
    
    @IsNotEmpty()
    @IsString() 
    firstInstallment: string;

    @IsNotEmpty()
    @IsString() 
    SecondInstallment: string;

}