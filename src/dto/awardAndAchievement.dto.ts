import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class awardAndAchievmentDto{
   
    @IsNotEmpty()
    @IsNumber() 
    TotalAward: Number;

    @IsNotEmpty()
    @IsNumber() 
    AwardListNumber: Number;
    
    @IsNotEmpty()
    @IsString() 
    AwardName: string;

    @IsNotEmpty()
    @IsString() 
    Description: string;

    @IsNotEmpty()
    @IsDate() 
    AwardDate: Date;

}