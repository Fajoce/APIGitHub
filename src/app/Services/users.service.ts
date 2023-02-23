import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Domains/users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly url = 'https://api.github.com';
  constructor(private httpClient: HttpClient) { }

  //Get All GitHub users
  getUsers():Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+'/users');
  }
     //Get GitHub users By name
    getUsersName(name:string):Observable<Users>{
      return this.httpClient.get<Users>(this.url+'/users/'+name);
    }
}
