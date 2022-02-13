import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StudentSectionComponent } from './student-section/student-section.component';
import { ContactComponent } from './contact/contact.component';
import { ResearchComponent } from './research/research.component';
import { TrainingPlacementsComponent } from './training-placements/training-placements.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { AccreditionComponent } from './accredition/accredition.component';
import { CampusComponent } from './campus/campus.component';
import { GovernanceComponent } from './governance/governance.component';
import { PoliciesComponent } from './policies/policies.component';
import { CommitteeComponent } from './committee/committee.component';
import { CocComponent } from './coc/coc.component';
import { IqacComponent } from './iqac/iqac.component';
import { CseComponent } from './cse/cse.component';
import { EeComponent } from './ee/ee.component';
import { MeComponent } from './me/me.component';
import { CeComponent } from './ce/ce.component';
import { EceComponent } from './ece/ece.component';
import { MasterCAComponent } from './master-ca/master-ca.component';
import { SHComponent } from './sh/sh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ClubComponent } from './club/club.component';
import { LifeattechnoComponent } from './lifeattechno/lifeattechno.component';
import { CalenderComponent } from './calender/calender.component';
import { NoticesComponent } from './notices/notices.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { AlumniComponent } from './alumni/alumni.component';
import { PlacementcellComponent } from './placementcell/placementcell.component';
import { IndustrymousComponent } from './industrymous/industrymous.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DepartmentsComponent,
    StudentSectionComponent,
    ContactComponent,
    ResearchComponent,
    TrainingPlacementsComponent,
    BlogComponent,
    FooterComponent,
    AccreditionComponent,
    CampusComponent,
    GovernanceComponent,
    PoliciesComponent,
    CommitteeComponent,
    CocComponent,
    IqacComponent,
    CseComponent,
    EeComponent,
    MeComponent,
    CeComponent,
    EceComponent,
    MasterCAComponent,
    SHComponent,
    ClubComponent,
    LifeattechnoComponent,
    CalenderComponent,
    NoticesComponent,
    SeminarsComponent,
    AlumniComponent,
    PlacementcellComponent,
    IndustrymousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent,BlogComponent,HomeComponent]
})
export class AppModule { }
