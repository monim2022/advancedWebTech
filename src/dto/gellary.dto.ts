import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class gellaryDto{
    @IsNotEmpty()
    image: ImageData;
    @IsNotEmpty()
    @IsString()
    imageTitle: string;
    @IsNotEmpty()
    @IsString()
    imageDescription: string;

    @IsNotEmpty()
    @IsDate()
    imageDate: Date;
}