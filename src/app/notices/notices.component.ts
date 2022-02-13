import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  notice:any[]=[
    {
       date:'30-12-2021',
       title:'TechJalsa 2k22 Schedule',
       link:''
    },
    {
      date:'06-12-2021',
      title:'Caution Money Refund Notice',
      link:''
    },
    {  
      date:'26-11-2021',
      title:'Project Synopsis Report Submission due by December 20, 2021.',
      link:''
    }
  ]
}
