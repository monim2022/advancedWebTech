import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class noticeViewDto{
    
    @IsNotEmpty()
    @IsString()
    schoolUniform: string;

    @IsNotEmpty()
    @IsNumber()
    schoolEntryTime: number;

    @IsNotEmpty()
    @IsNumber()
    schoolEndTime: number;

    @IsNotEmpty()
    @IsString()
    schoolNotAllow: string;

    @IsNotEmpty()
    @IsString()
    getharingJustice: string;

    
}