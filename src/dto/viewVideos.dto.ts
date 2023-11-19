import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class viewVideoDto{
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