import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class studentResultViewDto{
    @IsNotEmpty()
    @IsNumber()
    @MinLength(5)

    studentId: number;

    @IsNotEmpty()
    @IsString()
    studentName: string;

    @IsNotEmpty()
    @IsString()
    studentGroup: string;

    @IsNotEmpty()
    @IsNumber()
    studentGpa: number;
}