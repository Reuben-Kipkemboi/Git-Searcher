import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../Classes/user';
import { Repos } from '../Classes/repos';
import { observable, Observable } from 'rxjs'



@Injectable({
  providedIn: 'root',
})
export class DataService {
  MYKEY: string = environment.APIKEY
  // user!: User;
  // repos!: Repos;
  // newUserData: any = [];
  // repoData = [];

  constructor(private http: HttpClient) {

    console.log('our service is doing quite well...');
  }


  username = 'Reuben-Kipkemboi';
  // username : string;
  USERAPIURL = `https://api.github.com/users/${this.username}`;
  //  Dependency Injection

  getGithubUserData(): Observable<any> {
    return this.http.get<User>(this.USERAPIURL)
  }
  
  // Getting other user data
  getOtherUserData(searchName: string): Observable<any> {
    return this.http.get<User>(
      `https://api.github.com/users/${searchName}`

    )
  }
}
