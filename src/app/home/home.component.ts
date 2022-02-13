import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  safeURL: any;

  constructor(private _sanitizer: DomSanitizer, private shared:SharedService){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/atuYCysIJ5s');
 }
 latestnews:any[]=this.shared.getNews();
  ngOnInit(): void {
    this.latestnews=this.shared.getNews();
    
    
  }
  ngOnDestroy(){
    
  }
  branches:any=[
    {
      title:"Computer Science",
      description:" bhjfdskuytrdfxcvbjkutrd"

    },
    {
      title:"Mechanical Engineering",
      description:" bhjfdskuytrdfxcvbjkutrd"

    },
    {
      title:"Electrical Engineering",
      description:" bhjfdskuytrdfxcvbjkutrd"

    },
    {
      title:"Civil Engineering",
      description:" bhjfdskuytrdfxcvbjkutrd"

    }
  ]
}
