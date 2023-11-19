import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class academicCalenderDto{

    @IsNotEmpty()
    @IsNumber()
    id:Number;

    @IsNotEmpty()
    @IsString()
    TitleOfCalender: string;

    @IsNotEmpty()
    @IsNumber()
    totalWeek:Number;

    @IsNotEmpty()
    @IsString()
    Month: string;

    @IsNotEmpty()
    @IsString()
    Day: string;

    @IsNotEmpty()
    @IsString()
    Description: string;

    

}