import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ListUrlComponent } from './list-url/list-url.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { RegisterComponent } from './register/register.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { VisualizerComponent } from './visualizer/visualizer.component';

const routes: Routes = [
  {
    path : "",
    component : LoginPageComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "main",
    component : MainScreenComponent,
    children : [
      {   
          path : "url-form",
          component : UrlFormComponent
        
      },
      {   
        path : "list-url",
        component : ListUrlComponent
      
    },
    {
        path : "visualizer",
        component : VisualizerComponent
    },
    {
      path : "",
      component : DasboardComponent
  }
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
