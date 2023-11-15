import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class applyForStudentsDto{
   @IsNotEmpty()
   @IsString()
    studentFirstName: string;
    @IsNotEmpty()
   @IsString()
    studentLastName: string;
    
    @IsNotEmpty()
    @IsNumber() 
    studentContactNumber: string;

    @IsNotEmpty()
    @IsNumber() 
    parentsContactNumber: string;

    @IsNotEmpty()
   @IsString()
    studentEmail: string;

    @IsNotEmpty()
   @IsString()
    parentsEmail: string;

    @IsNotEmpty()
   @IsString()
    presentAddress: string;
   
    @IsNotEmpty()
   @IsString()
    parmanentAddress: string;

    @IsNotEmpty()
   @IsString()
    gender: string;
    @IsNotEmpty()
   @IsString()
    religion: string;

    @IsNotEmpty()
    @IsNumber() 
    dateOfBirth: string;

    @IsNotEmpty()
    @IsNumber() 
    emergencyContact: number;
    @IsNotEmpty()
   @IsString()
    highSchoolName: string;

    @IsNotEmpty()
    @IsNumber() 
    gpa: number;
}