 import { Component, OnInit } from '@angular/core';
 import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor( private shared:SharedService) { }
  news:any[]=[];
  ngOnInit(): void {
    this.news=this.shared.getNews();
  }
}

