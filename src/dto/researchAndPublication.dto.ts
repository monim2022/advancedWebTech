import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class researchAndPublicationDto{

    @IsNotEmpty()
    @IsNumber() 
    TotalPublication: Number;

    @IsNotEmpty()
    @IsString() 
    BestPublicationPaper: string;

    @IsNotEmpty()
    @IsString() 
    publisherName: string;

    @IsNotEmpty()
    @IsString() 
    journalName: string;

}