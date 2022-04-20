import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { User } from 'src/app/Classes/user';
import {Repos} from 'src/app/Classes/repos'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  getUser(term:string){

  }

  

  ngOnInit(): void {

  
  }

}
