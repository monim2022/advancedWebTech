import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { guestUser } from './Entity/guestUser.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable, from } from 'rxjs';


@Injectable()
export class visitorsService {
 constructor(
  @InjectRepository(guestUser)
 private readonly guestUserRepository: Repository<guestUser>,
 ){}
  createGuestUser(guestUser: guestUser): Observable<guestUser> {
    return from(this.guestUserRepository.save(guestUser));
  }
  findGuestUser(): Observable<guestUser[]>{
    return from(this.guestUserRepository.find());

  }
  
}

