import { IsNotEmpty, IsString } from "class-validator";

export class messageDto{

    
    @IsNotEmpty()
    message: string;
}
