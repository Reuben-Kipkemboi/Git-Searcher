import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Classes/user';
import { DataService } from 'src/app/Services/data.service';
import { Repos } from 'src/app/Classes/repos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: User;
  repos!:Repos
  
  constructor(private dataservice:DataService) { }


  ngOnInit(): void {
    this.dataservice.getGithubUserData().subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

}
