import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MailerModule } from '@nestjs-modules/mailer';
import { visitorsController } from './visitors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { teacherInfo } from './Entity/teacherInfo.entity';
import { studentsInfo } from './Entity/studentsInfo.entity';
import { academicCalender } from './Entity/academicCalender.entity';
import { viewVideos } from './Entity/viewVideos.entity';
import { alumniInfo } from './Entity/alumniInfo.entity';
import { apply } from './Entity/apply.entity';
import { awardInfo } from './Entity/awardInfo.entity';
import { careerInfo } from './Entity/careerInfo.entity';
import { facilityInfo } from './Entity/facilityInfo.entity';
import { noticeView } from './Entity/noticeView.entity';
import { research } from './Entity/research.entity';
import { rules } from './Entity/rules.entity';
import { sportsInfo } from './Entity/sportsInfo.entity';
import { administrationInfo } from './Entity/administrationInfo.entity';
import { contactUs } from './Entity/contactUs.entity';
import { gellaryView } from './Entity/gellaryView.entity';
import { newsView } from './Entity/newsView.entity';
import { tutionFee } from './Entity/tutionFee.entity';
import { viewLibrary } from './Entity/viewLibrary.entity';
import { guestUser } from './Entity/guestUser.entity';
import { visitorsService } from './visitors.service';
import { admissionInfo } from './Entity/admissionInfo.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'visitor',
      entities: [guestUser,academicCalender,administrationInfo,alumniInfo,apply,
        awardInfo,careerInfo,contactUs,facilityInfo,gellaryView,
        newsView,noticeView,research,rules,sportsInfo,tutionFee,
        viewLibrary,viewVideos,teacherInfo,studentsInfo,admissionInfo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      guestUser,academicCalender,administrationInfo,admissionInfo,alumniInfo,apply,awardInfo,careerInfo,
      contactUs,facilityInfo,gellaryView,newsView,noticeView,research,rules,sportsInfo,studentsInfo,teacherInfo,
      tutionFee,viewLibrary,viewVideos
    ]),

  ],
  controllers: [visitorsController],
  providers: [visitorsService],
})
export class AppModule {}