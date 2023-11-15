import { Body, Controller, Delete, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { teacherInfoDto } from './dto/teacherInfo.dto';
import { messageDto } from './dto/messages.dto';
import { contactUsDto } from './dto/contactUs.dto';
import { studentResultViewDto } from './dto/studentResultView.dto';
import { applyForStudentsDto } from './dto/apply.dto';

@Controller('/')
export class visitorsController {

  @Get('/teacherInfo')
  @UsePipes(ValidationPipe)
  teacherInfor(@Body() teacher:teacherInfoDto) {
    return teacher;
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
  
  @Post('/studentResultView')
  @UsePipes(ValidationPipe)
  studentResultView(@Body() result:studentResultViewDto) {
    return result;
  }
  @Post('/contactUs')
  @UsePipes(ValidationPipe)
  contactUs ( @Body() contact:contactUsDto){
    return contact;
  }
  
  @Post('/applyForStudent')
  @UsePipes(ValidationPipe)
  applyForStudent(@Body() apply:applyForStudentsDto)
  {
    return apply;
  }










}

