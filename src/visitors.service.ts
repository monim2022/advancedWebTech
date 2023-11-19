import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { guestUser } from './Entity/guestUser.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable, from } from 'rxjs';
import { academicCalender } from './Entity/academicCalender.entity';
import { administrationInfo } from './Entity/administrationInfo.entity';
import { alumniInfo } from './Entity/alumniInfo.entity';
import { admissionInfo } from './Entity/admissionInfo.entity';
import { apply } from './Entity/apply.entity';
import { gellaryView } from './Entity/gellaryView.entity';
import { facilityInfo } from './Entity/facilityInfo.entity';
import { contactUs } from './Entity/contactUs.entity';
import { careerInfo } from './Entity/careerInfo.entity';
import { awardInfo } from './Entity/awardInfo.entity';
import { newsView } from './Entity/newsView.entity';
import { noticeView } from './Entity/noticeView.entity';
import { research } from './Entity/research.entity';
import { rules } from './Entity/rules.entity';
import { sportsInfo } from './Entity/sportsInfo.entity';
import { studentsInfo } from './Entity/studentsInfo.entity';
import { teacherInfo } from './Entity/teacherInfo.entity';
import { tutionFee } from './Entity/tutionFee.entity';
import { viewLibrary } from './Entity/viewLibrary.entity';
import { viewVideos } from './Entity/viewVideos.entity';


@Injectable()
export class visitorsService {
 
 constructor(
  @InjectRepository(guestUser)
 private readonly guestUserRepository: Repository<guestUser>,
 @InjectRepository(academicCalender)
 private readonly academicCalenderRepository: Repository<academicCalender>,
 @InjectRepository(administrationInfo)
 private readonly admininistrationRepository: Repository<administrationInfo>,
 @InjectRepository(admissionInfo)
 private readonly admissionRepository: Repository<admissionInfo>,
 @InjectRepository(alumniInfo)
 private readonly alumniRepository: Repository<alumniInfo>,
 @InjectRepository(apply)
 private readonly applyRepository: Repository<apply>,
 @InjectRepository(awardInfo)
 private readonly awardRepository: Repository<awardInfo>,
 @InjectRepository(careerInfo)
 private readonly careerRepository: Repository<careerInfo>,
 @InjectRepository(contactUs)
 private readonly contactRepository: Repository<contactUs>,
 @InjectRepository(facilityInfo)
 private readonly facilityRepository: Repository<facilityInfo>,
 @InjectRepository(gellaryView)
 private readonly gellaryRepository: Repository<gellaryView>,
 @InjectRepository(newsView)
 private readonly newsRepository: Repository<newsView>,
 @InjectRepository(noticeView)
 private readonly noticeRepository: Repository<noticeView>,

 @InjectRepository(research)
 private readonly researchRepository: Repository<research>,
 @InjectRepository(rules)
 private readonly rulesRepository: Repository<rules>,
 @InjectRepository(sportsInfo)
 private readonly sportsRepository: Repository<sportsInfo>,
 @InjectRepository(studentsInfo)
 private readonly studentsRepository: Repository<studentsInfo>,
 @InjectRepository(teacherInfo)
 private readonly teachersRepository: Repository<teacherInfo>,

 @InjectRepository(tutionFee)
 private readonly tutionRepository: Repository<tutionFee>,

 @InjectRepository(viewLibrary)
 private readonly libraryRepository: Repository<viewLibrary>,
 @InjectRepository(viewVideos)
 private readonly videosRepository: Repository<viewVideos>,

 

 ){}
  createGuestUser(guestUser: guestUser) {
    return from(this.guestUserRepository.save(guestUser));
  }
  findGuestUser(){
    return from(this.guestUserRepository.find());

  }
  
  academicCalenderInfo(academicCalender: academicCalender){
    return from(this.academicCalenderRepository.save(academicCalender));
  }
  viewAcademicCalender(){
    return from(this.academicCalenderRepository.find());

  }
  aministrationInfo(administration: administrationInfo){
    return from(this.admininistrationRepository.save(administration));
  }
  viewAdministrationInfo(){
    return from(this.admininistrationRepository.find());
  }

  admissionInfo(admission: admissionInfo){
    return from(this.admissionRepository.save(admission));
  }
  viewAdmissionInfo(){
    return from(this.admissionRepository.find());
  }

  

  alumniInfo(alumni: alumniInfo){
    return from(this.alumniRepository.save(alumni));
  }
  viewAlumniInfo(){
    return from(this.alumniRepository.find());
  }

  applyForStudent(apply: apply){
    return from(this.applyRepository.save(apply));
  }
  getApplyInfo(){
    return from(this.applyRepository.find());
  }

  awardInfo(award: awardInfo){
    return from(this.awardRepository.save(award));
  }
  getAwardInfo(){
    return from(this.awardRepository.find());
  }

  careerInfo(career: careerInfo){
    return from(this.careerRepository.save(career));
  }
  getCareerInfo(){
    return from(this.careerRepository.find());
  }
  contactUs(contact: contactUs){
    return from(this.contactRepository.save(contact));
  }
  getContactUs(){
    return from(this.contactRepository.find());
  }
  facilityInfo(facility: facilityInfo){
    return from(this.facilityRepository.save(facility));
  }
  getFacilityInfo(){
    return from(this.facilityRepository.find());
  }
  gellaryView(gellary: gellaryView){
    return from(this.gellaryRepository.save(gellary));
  }
  getGellaryInfo(){
    return from(this.gellaryRepository.find());
  }

  newsView(news: newsView){
    return from(this.newsRepository.save(news));
  }
  getNews(){
    return from(this.newsRepository.find());
  }

  noticeView(notice: noticeView){
    return from(this.noticeRepository.save(notice));
  }
  getNotice(){
    return from(this.noticeRepository.find());
  }

  researchView(research: research){
    return from(this.researchRepository.save(research));
  }
  getResearch(){
    return from(this.researchRepository.find());
  }
  rulesView(rules: rules){
    return from(this.rulesRepository.save(research));
  }
  getRules(){
    return from(this.rulesRepository.find());
  }

  sportsInfo(sports: sportsInfo){
    return from(this.sportsRepository.save(sports));
  }
  getSports(){
    return from(this.sportsRepository.find());
  }

  studensInfo(students: studentsInfo){
    return from(this.studentsRepository.save(students));
  }
  getStudents(){
    return from(this.studentsRepository.find());
  }
  teachersInfo(teacher: teacherInfo){
    return from(this.teachersRepository.save(teacher));
  }
  getTeachers(){
    return from(this.teachersRepository.find());
  }

  tutionFee(tution: tutionFee){
    return from(this.tutionRepository.save(tution));
  }
  getTution(){
    return from(this.tutionRepository.find());
  }
  viewLibrary(library: viewLibrary){
    return from(this.libraryRepository.save(library));
  }
  getLibrary(){
    return from(this.libraryRepository.find());
  }
  viewVideos(videos: viewVideos){
    return from(this.videosRepository.save(videos));
  }
  getVideos(){
    return from(this.videosRepository.find());
  }




  
}

