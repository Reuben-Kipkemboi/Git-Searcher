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
  // path to our main page
  {
    path: "main",
    component: SearchComponent,
  },
  // route  to our github users details page
  { path: '', redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
