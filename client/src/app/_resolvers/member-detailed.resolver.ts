import { Member } from './../_models/member';
import { MembersService } from './../_services/members.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {
  constructor(private membersService: MembersService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    return this.membersService.getMember(route.paramMap.get('username')!)
  }
}
