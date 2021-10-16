import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { UrlFormComponent } from './url-form/url-form.component';
import { HttpClientModule } from "@angular/common/http";
import { ListUrlComponent } from './list-url/list-url.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NewSidebarComponent } from './new-sidebar/new-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    DasboardComponent,
    MainScreenComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardCardComponent,
    UrlFormComponent,
    ListUrlComponent,
    VisualizerComponent,
    NewSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
