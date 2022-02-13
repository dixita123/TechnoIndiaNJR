import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ResearchComponent } from './research/research.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AccreditionComponent } from './accredition/accredition.component';
import { CampusComponent } from './campus/campus.component';
import { PoliciesComponent } from './policies/policies.component';
import { CommitteeComponent } from './committee/committee.component';
import { CocComponent } from './coc/coc.component';
import { IqacComponent } from './iqac/iqac.component';
import { CseComponent } from './cse/cse.component';
import { EeComponent } from './ee/ee.component';
import { EceComponent } from './ece/ece.component';
import { CeComponent } from './ce/ce.component';
import { MeComponent } from './me/me.component';
import { MasterCAComponent } from './master-ca/master-ca.component';
import { SHComponent } from './sh/sh.component';
import { ClubComponent } from './club/club.component';
import { LifeattechnoComponent } from './lifeattechno/lifeattechno.component';
import { CalenderComponent } from './calender/calender.component';
import { NoticesComponent } from './notices/notices.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { AlumniComponent } from './alumni/alumni.component';
import { TrainingPlacementsComponent } from './training-placements/training-placements.component';
import { PlacementcellComponent } from './placementcell/placementcell.component';
import { IndustrymousComponent } from './industrymous/industrymous.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent ,
  children: [
    {
      path: 'accredition', // child route path
      component: AccreditionComponent, // child route component that the router renders
    },
  ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'department', component: DepartmentsComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'accredition', component:AccreditionComponent},
  {path: 'campus', component:CampusComponent},
  {path:'policies', component:PoliciesComponent},
  {path:'committee', component:CommitteeComponent},
  {path:'coc', component:CocComponent},
  {path:'iqrc', component:IqacComponent},
  {path:'cse', component:CseComponent},
  {path:'ee', component:EeComponent},
  {path:'ece', component:EceComponent},
  {path:'ce', component:CeComponent},
  {path:'me', component:MeComponent},
  {path:'masterCA', component:MasterCAComponent},
  {path:'sh', component:SHComponent},
  {path:'club',component:ClubComponent},
  {path:'lifeAtTechno' ,component:LifeattechnoComponent},
  {path:'AcademicCalender', component:CalenderComponent},
  {path:'notice',component:NoticesComponent},
  {path:'seminar',component:SeminarsComponent},
  {path:'alumni',component:AlumniComponent},
  {path:'trainings',component:TrainingPlacementsComponent},
  {path:'placement' , component:PlacementcellComponent},
  {path:'industry' , component:IndustrymousComponent},
  {path:'blog', component:BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
