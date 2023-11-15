import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class noticeViewDto{
    
    @IsNotEmpty()
    @IsNumber()
    newsNumber: number;

    @IsNotEmpty()
    @IsString()
    newsTitle: string;

    @IsNotEmpty()
    @IsString()
    news: string;

    @IsNotEmpty()
    @IsDate()
    newsDate: Date;
}