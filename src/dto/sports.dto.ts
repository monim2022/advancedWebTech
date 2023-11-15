import { IsNotEmpty, IsString } from "class-validator";

export class sportsDto{

    @IsNotEmpty()
    @IsString()
    footballTitle: string;
    @IsNotEmpty()
    @IsString()
    footballEvents: string;
    @IsNotEmpty()
    @IsString()
    cricketsEvents: string;
    @IsNotEmpty()
    @IsString()
    basketballEvents: string;
    @IsNotEmpty()
    @IsString()
    footballAchievement: string;
    @IsNotEmpty()
    @IsString()
    cricketsAchievement: string;
    @IsNotEmpty()
    @IsString()
    basketballAchievement: string;
}
