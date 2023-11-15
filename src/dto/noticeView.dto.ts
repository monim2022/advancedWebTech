import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class noticeViewDto{
    
    @IsNotEmpty()
    @IsNumber()
    noticeNumber: number;

    @IsNotEmpty()
    @IsString()
    noticeTitle: string;

    @IsNotEmpty()
    @IsString()
    notice: string;

    @IsNotEmpty()
    @IsDate()
    noticeDate: Date;
}