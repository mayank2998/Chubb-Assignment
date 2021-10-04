import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrendingComponent } from './trending/trending.component';
import { WeeklyNewsComponent } from './weekly-news/weekly-news.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { DetailsComponent } from './details/details.component';
import { Weekly2NewsComponent } from './weekly2-news/weekly2-news.component';
import { YoutubeSectionComponent } from './youtube-section/youtube-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    TrendingComponent,
    WeeklyNewsComponent,
    WhatsNewComponent,
    DetailsComponent,
    Weekly2NewsComponent,
    YoutubeSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
