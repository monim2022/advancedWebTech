import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { teacherInfoDto } from './dto/teacherInfo.dto';
import { messageDto } from './dto/messages.dto';
import { contactUsDto } from './dto/contactUs.dto';
import { studentResultViewDto } from './dto/studentResultView.dto';
import { applyForStudentsDto } from './dto/apply.dto';
import { academicCalenderDto } from './dto/academicCalender.dto';
import { administrationInfoDto } from './dto/administratorInfo.dto';
import { admissionInfoDto } from './dto/admissionInfo.dto';
import { alumniInfoDto } from './dto/alumniInfo.dto';
import { awardAndAchievmentDto } from './dto/awardAndAchievement.dto';
import { careerInfoDto } from './dto/careerInfo.dto';
import { exploreFacilitiesDto } from './dto/exploreFacilities.dto';
import { newsViewDto } from './dto/newsView.dto';
import { noticeViewDto } from './dto/noticeView.dto';
import { researchAndPublicationDto } from './dto/researchAndPublication.dto';
import { rulesOfSchoolDto } from './dto/rulesOfSchool.dto';
import { sportsDto } from './dto/sports.dto';
import { tutionFeeDto } from './dto/tutionFee.dto';
import { viewLibraryDto } from './dto/viewLibrary.dto';
import { viewVideoDto } from './dto/viewVideos.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { guestUserDto } from './dto/guestUser.dto';
import { visitorsService } from './visitors.service';
import { guestUser } from './Entity/guestUser.entity';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('/')
export class visitorsController {
  [x: string]: any;

  constructor(private VisitorService: visitorsService) {}

  @Post('/guestUser')
  @UsePipes(ValidationPipe)
  createGuestUser(@Body() guest: guestUser) {
    return this.VisitorService.createGuestUser(guest);
  }

  @Get('/guestUser')
    findGuest(): Observable<guestUser[]>{
      return this.VisitorService.findGuestUser();
    }
  

    @Put('guest/:id')
    @UsePipes(ValidationPipe)
    async updateGuest(@Param('id') id: number, @Body() guest: any){
      console.log(id)
    console.log(guest)
    return await this.visitorService.updateGuest(id, guest);
}

  @Delete(':id')
  deleteGuestUser(@Param('id')id: number, @Body() guest:guestUser):Observable<DeleteResult>
  {
    
    return this.visitorService.deleteGuestUser(id, guest);
  }

  @Post('/academicCalender')
  @UsePipes(ValidationPipe)
  viewAcademicCalender(@Body() calender:academicCalenderDto)
  {
    return calender;
  }

  @Post('/administration')
  @UsePipes(ValidationPipe)
  viewAdministrationInfo(@Body() administration:administrationInfoDto)
  {
    return administration;
  }

  @Post('/admissionInfo')
  @UsePipes(ValidationPipe)
  viewAdmissionInfo(@Body() admission:admissionInfoDto)
  {
    return admission;
  }
  @Post('/alumniInfo')
  @UsePipes(ValidationPipe)
  viewAlumniInfo(@Body() alumni:alumniInfoDto)
  {
    return alumni;
  }

  @Post('/applyForStudent')
  @UsePipes(ValidationPipe)
  applyForStudent(@Body() apply:applyForStudentsDto)
  {
    return apply;
  }
  @Put('/applyForStudent')
  updateGuestInfo(@Body() apply:applyForStudentsDto)
  {
    return apply;
  }
 @Delete('applyForStudent')
 DeleteGuestInfo(@Body() apply:applyForStudentsDto)
  {
    return apply;
  }
  @Post('/award')
  @UsePipes(ValidationPipe)
  awardAndAchievement(@Body() award: awardAndAchievmentDto)
  {
    return award;
  }

  @Post('/apply')
  @UsePipes(ValidationPipe)
  viewCareerInfo(@Body() career: careerInfoDto)
  {
    return career;
  }

  @Post('/contactUs')
  @UsePipes(ValidationPipe)
  contactUs(@Body() contact:contactUsDto){
    return contact;
  }
 
  @Post('/facilities')
  @UsePipes(ValidationPipe)
  viewFacilities(@Body() facility: exploreFacilitiesDto)
  {
    return facility;
  }

  @Post('/uploadImage')
  @UseInterceptors(FileInterceptor('file', { 
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/\.(jpg|webp|png|jpeg)$/)) {
        cb(null, true);
      } else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
      }
    },
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      },
    }),
  }))
  uploadImage(@UploadedFile() image: Express.Multer.File) {
    console.log("Image successfully uploaded");
  }


  
  @Post('/messagesSend')
  @UsePipes(ValidationPipe)
  sendMessages(@Body() messages:messageDto) {
    return messages;
  }

  @Delete('/deleteMessages')
  deleteMessages(@Body() messages:messageDto) {
    return messages;
  }

  @Get('/mail')
  sendMail(): void {
    return this.visitorsService.sendMail();
  }


  @Post('/news')
  @UsePipes(ValidationPipe)
  viewNews(@Body() news: newsViewDto) {
    return news;
  }

  @Post('/notice')
  @UsePipes(ValidationPipe)
  viewNotices(@Body() notice: noticeViewDto) {
    return notice;
  }

  @Post('/research')
  @UsePipes(ValidationPipe)
  viewRPublication(@Body() research: researchAndPublicationDto) {
    return research;
  }
  @Post('/rules')
  @UsePipes(ValidationPipe)
  viewSchoolRules(@Body() rules: rulesOfSchoolDto ) {
    return rules;
  }

  @Post('/sports')
  @UsePipes(ValidationPipe)
  viewSports(@Body() sports: sportsDto) {
    return sports;
  }

  @Post('/studentResultView')
  @UsePipes(ValidationPipe)
  studentResultView(@Body() result:studentResultViewDto) {
    return result;
  }

  @Get('/teacherInfo')
  @UsePipes(ValidationPipe)
  teacherInfor(@Body() teacher:teacherInfoDto) {
    return teacher;
  }

  @Post('/tutionFee')
  @UsePipes(ValidationPipe)
  viewTutionFee(@Body() tution: tutionFeeDto) {
    return tution;
  }
  @Post('/library')
  @UsePipes(ValidationPipe)
  viewLibraryInfo(@Body() library: viewLibraryDto) {
    return library;
  }

  @Post('/videos')
  @UsePipes(ValidationPipe)
  viewVideos(@Body() videos: viewVideoDto) {
    return videos;
  }

  @Post('/videoUpload')
  @UseInterceptors(FileInterceptor('file', { 
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/\.(mp4|3gp|avi|mov|WMV)$/)) {
        cb(null, true);
      } else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'video'), false);
      }
    },
    storage: diskStorage({
      destination: './uploadVideos',
      filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
      },
    }),
  }))
  uploadVideos(@UploadedFile() video: Express.Multer.File) {
    console.log("Video successfully uploaded");
  }




  















}

