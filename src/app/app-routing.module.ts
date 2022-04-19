import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  // path to our home page
  {
    path: "home",
    component: HomeComponent,
  },
  // path to our main page and search page +++++************=====###########
  {
    path: "main",
    component: SearchComponent,
  },
  // default route 
  { path: '', redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
