import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from   '@angular/common/http'
import { User } from '../Classes/user';
import {Repos } from '../Classes/repos'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  user:any;
  username= "Reuben-Kipkemboi"; 
  // username : string; 
  MYKEY: string = environment.APIKEY;
  USERAPIURL = `https://api.github.com/users/${this.username}`
  //  Dependency Injection
  constructor(private http: HttpClient) { 
    console.log('our service is doing quite well...')
  }

  getGithubUserData():Observable<any> {
    return this.http.get<User>(this.USERAPIURL)
   

  }


  
}
