import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './overview/home/home.component';
import { AboutComponent } from './overview/about/about.component';
import { SkillsComponent } from './overview/skills/skills.component';
import { EducationComponent } from './overview/education/education.component';
import { ExperienceComponent } from './overview/experience/experience.component';
import { ContactComponent } from './overview/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
