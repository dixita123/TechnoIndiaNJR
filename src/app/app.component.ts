import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private shared:SharedService){}
  news:any[]=[
    {
      year:'2021',
      img:'../../assets/news/tatva soft.jpeg',
      haeding:'[PLACEMENT 2021-22] Tatvasoft Selects 2 Techno NJR students.',
      subhead:'Techno NJR Webmaster',
      date:'Nov 02, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/celebal.jpeg',
      haeding:'[PLACEMENT 2021-22] Celebal Technologies Selects 3 Techno NJR students.',
      subhead:'Techno NJR Webmaster',
      date:'Nov 01, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/time tac.jpg',
      haeding:'[PLACEMENT 2021-22] In Time Tec Selects 9 Techno NJR students.',
      subhead:'Techno NJR Webmaster',
      date:''

    },
    {
      year:'2021',
      img:'../../assets/news/international intership.jpg',
      haeding:'79 Students selected for Internships at 10 prestigious international Universities.',
      subhead:'Techno NJR Webmaster',
      date:''

    },
    {
      year:'2021',
      img:'../../assets/news/army.png',
      haeding:'Techno NJR alumni – Shiva Chouhan (Civil Engineering) and Gaurav Choudhary (Computer Science and Engineering) commissioned at the rank of Lieutenant in Indian Army.',
      subhead:'Techno NJR Webmaster',
      date:'May 31, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/nvidia.jpg',
      haeding:'Techno India NJR is participating in the NVIDIA GTC conference on April 12th, 2021.',
      subhead:'Techno NJR Webmaster',
      date:'Apr 09, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/cognizant.jpg',
      haeding:'[PLACEMENT 2020-21] Cognizant Technologies Selects 3 Techno NJR students at a Package of 5.41 LPA.',
      subhead:'Techno NJR Webmaster',
      date:'Feb 28, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/thermax.jpg',
      haeding:'Thermax selects 4 Techno NJR Students',
      subhead:'Techno NJR Webmaster',
      date:'Feb 23, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/together 20121.jpg',
      haeding:'Startup Venture Wricks by ex-students of Techno India NJR incubated at Techno India NJR Incubation Center has won the second prize of Canadian $12500/-',
      subhead:'Techno NJR Webmaster',
      date:'Jan 16, 2021'

    },
    {
      year:'2021',
      img:'../../assets/news/amzon.jpg',
      haeding:'Techno NJR Alumnus joins Amazon at a package of 40 Lacs/ annum.',
      subhead:'Techno NJR Webmaster',
      date:'Sep 06, 2020'

    },
    {
      year:'2021',
      img:'../../assets/news/motherson.jpg',
      haeding:'[ Placement 2020 ] Magneti Marelli Motherson Selects 22 Techno NJR Mechanical Branch Students',
      subhead:'Techno NJR Webmaster',
      date:'Jun 23, 2020'

    },
    {
      year:'2021',
      img:'../../assets/news/ibm.jpg',
      haeding:'30 students of 3rd Year Computer Science cleared the proctored exam of IBM certified Cloud Application Developer 2019 (Mastery Award )',
      subhead:'Techno NJR Webmaster',
      date:'May 20, 2020'

    },
  ]
  ngOnInit(): void {
    this.shared.LatestNews(this.news);
  }
}
