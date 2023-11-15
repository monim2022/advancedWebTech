import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class gellaryDto{
    @IsNotEmpty()
    @IsString()
    video: string;
    @IsNotEmpty()
    @IsString()
    videoTitle: string;
    @IsNotEmpty()
    @IsString()
    videoDescription: string;
    @IsNotEmpty()
    @IsDate()
    videoDate: Date;

}