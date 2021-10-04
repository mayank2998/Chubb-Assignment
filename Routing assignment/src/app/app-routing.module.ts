import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { WeeklyNewsComponent } from './weekly-news/weekly-news.component';

const routes: Routes = [
  {
    path : "",
    component : WeeklyNewsComponent
  },
  {
    path : "details/:id",
    component : DetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
