import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class newsViewDto{
    
    @IsNotEmpty()
    @IsNumber()
    id: number;

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