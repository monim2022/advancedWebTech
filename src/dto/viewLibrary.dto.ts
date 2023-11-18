import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class viewLibraryDto{

    @IsNotEmpty()
    @IsNumber() 
    TotalBooks: Number;

    @IsNotEmpty()
    @IsString() 
    BookTitle: string;

    @IsNotEmpty()
    @IsString() 
    GroupWiseBook: string;

}