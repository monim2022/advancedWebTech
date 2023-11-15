import { IsNotEmpty, IsNumber, IsString } from "class-validator/types/decorator/decorators";

export class academicCalenderDto{
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