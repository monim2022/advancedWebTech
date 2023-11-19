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
import { academicCalender } from './Entity/academicCalender.entity';
import { administrationInfo } from './Entity/administrationInfo.entity';
import { alumniInfo } from './Entity/alumniInfo.entity';
import { admissionInfo } from './Entity/admissionInfo.entity';
import { apply } from './Entity/apply.entity';
import { awardInfo } from './Entity/awardInfo.entity';
import { careerInfo } from './Entity/careerInfo.entity';
import { contactUs } from './Entity/contactUs.entity';
import { facilityInfo } from './Entity/facilityInfo.entity';
import { viewLibrary } from './Entity/viewLibrary.entity';
import { tutionFee } from './Entity/tutionFee.entity';
import { teacherInfo } from './Entity/teacherInfo.entity';
import { studentsInfo } from './Entity/studentsInfo.entity';
import { sportsInfo } from './Entity/sportsInfo.entity';
import { noticeView } from './Entity/noticeView.entity';
import { newsView } from './Entity/newsView.entity';
import { research } from './Entity/research.entity';
import { rules } from './Entity/rules.entity';

@Controller('/')
export class visitorsController {
  [x: string]: any;

  constructor(private VisitorService: visitorsService) {}

  @Post('/guestUser')
  @UsePipes(ValidationPipe)
  createGuestUser(@Body() guest: guestUser){
    return this.VisitorService.createGuestUser(guest);
  }

  @Get('/guestUser')
    findGuest(){
      return this.VisitorService.findGuestUser();
  }
  
  @Post('/academicCalender')
  @UsePipes(ValidationPipe)
  createAcademicCalender(@Body() calender:academicCalender)
  {
    return this.VisitorService.academicCalenderInfo(calender);
  }
  @Get('/academicCalender')
    viewCalender(){
      return this.VisitorService.viewAcademicCalender();
  }
   
  @Post('/administration')
  @UsePipes(ValidationPipe)
  viewAdministrationInfo(@Body() administration:administrationInfo)
  {
    return this.VisitorService.aministrationInfo(administration);
  }
  @Get('/administration')
  viewAdministration(){
    return this.VisitorService.viewAdministrationInfo();
}


  @Post('/admissionInfo')
  @UsePipes(ValidationPipe)
  AdmissionInfo(@Body() admission:admissionInfo)
  {
    return this.VisitorService.admissionInfo(admission);
  }

  @Get('/admissionInfo')
  viewAdmissionInfo(){
    return this.VisitorService.viewAdmissionInfo();
}


  @Post('/alumniInfo')
  @UsePipes(ValidationPipe)
  AlumniInfo(@Body() alumni:alumniInfo)
  {
    return this.VisitorService.alumniInfo(alumni);
  }
  @Get('/alumniInfo')
  viewAlumniInfo(){
    return this.VisitorService.viewAlumniInfo();
}


  @Post('/applyForStudent')
  @UsePipes(ValidationPipe)
  applyStudent(@Body() apply:apply)
  {
    return this.VisitorService.applyForStudent(apply);
  }
  @Get('/applyForStudent')
  applyInfo(){
    return this.VisitorService.getApplyInfo();
}

 
  @Post('/award')
  @UsePipes(ValidationPipe)
  awardAndAchievement(@Body() award:awardInfo)
  {
    return this.VisitorService.awardInfo(award);
  }
  @Get('/award')
  awardView(){
    return this.VisitorService.getAwardInfo();
}

  @Post('/career')
  @UsePipes(ValidationPipe)
  viewCareerInfo(@Body() career: careerInfo)
  {
    return this.VisitorService.careerInfo(career);
  }
  @Get('/career')
  getCareer(){
    return this.VisitorService.getCareerInfo();
}

  @Post('/contactUs')
  @UsePipes(ValidationPipe)
  contactUs(@Body() contact:contactUs){
    return this.VisitorService.contactUs(contact);
  }

  @Get('/career')
  getContact(){
    return this.VisitorService.getContactUs();
}
 
  @Post('/facilities')
  @UsePipes(ValidationPipe)
  viewFacilities(@Body() facility: facilityInfo)
  {
    return this.VisitorService.facilityInfo(facility);
  }
  @Get('/facilities')
  getFacility(){
    return this.VisitorService.getFacilityInfo();
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

  @Post('/news')
  @UsePipes(ValidationPipe)
  viewNews(@Body() news: newsView) {
    return this.VisitorService.newsView(news);
  }
  @Get('/news')
  getNews(){
    return this.VisitorService.getNews();
}

  @Post('/notice')
  @UsePipes(ValidationPipe)
  viewNotices(@Body() notice: noticeView) {
    return this.VisitorService.noticeView(notice);
  }

  @Get('/notice')
  getNotice(){
    return this.VisitorService.getNotice();
}

  @Post('/research')
  @UsePipes(ValidationPipe)
  viewRPublication(@Body() Research: research) {
    return this.VisitorService.researchView(Research);
  }
  @Get('/research')
  getResearch(){
    return this.VisitorService.getResearch();
}

  @Post('/rules')
  @UsePipes(ValidationPipe)
  viewSchoolRules(@Body() Rules: rules) {
    return this.VisitorService.rulesView(Rules);
  }
  @Get('/rules')
  getRules(){
    return this.VisitorService.getRules();
}

  @Post('/sports')
  @UsePipes(ValidationPipe)
  viewSports(@Body() sports: sportsInfo) {
    return this.VisitorService.sportsInfo(sports);
  }
  @Get('/sports')
  getSports(){
    return this.VisitorService.getSports();
}

  @Post('/studentInfo')
  @UsePipes(ValidationPipe)
  studentResultView(@Body() result:studentsInfo) {
    return this.VisitorService.studensInfo(result);
  }

  @Get('/studentsInfo')
  getStudents(){
    return this.VisitorService.getStudents();
}

  @Post('/teacherInfo')
  @UsePipes(ValidationPipe)
  teacherInfor(@Body() teacher:teacherInfo) {
    return this.VisitorService.teachersInfo(teacher);
  }

 @Get('/teacherInfo')
  getTeacher(){
    return this.VisitorService.getTeachers();
}
  
  @Post('/tutionFee')
  @UsePipes(ValidationPipe)
  viewTutionFee(@Body() tution: tutionFee) {
    return this.VisitorService.tutionFee(tution);
  }

  @Get('/tutionFee')
  getTution(){
    return this.VisitorService.getTution();
}
  
  @Post('/library')
  @UsePipes(ValidationPipe)
  viewLibraryInfo(@Body() library: viewLibrary) {
    return this.VisitorService.viewLibrary(library);
  }
  @Get('/library')
  getLibrary(){
    return this.VisitorService.getLibrary();
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

