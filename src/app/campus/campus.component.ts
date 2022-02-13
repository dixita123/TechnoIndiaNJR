import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  facilities:any=[
    {
      heading:'Library',
      description:'The college library has a vast collection of more than 40,000 books of local and foreign authors, International reference books and journals, access to IEEE and online libraries.'
    },
    {
      heading:'Computer & Internet',
      description:'Techno NJR has well equipped Computer Labs with 550 nos. HP Computers powered by 50 Mbps Internet connection through Optical Fiber Cable.'
    },
    {
      heading:'Accommodation',
      description:'The campus has a modern Boy’s hostel with single/double seater rooms accommodating 50 students. There is a separate girls hostel located in main Udaipur city.'
    },
    {
      heading:'Bus Services',
      description:'College owns a fleet of 10 buses which cover the entire Udaipur and nearby areas for easy transportation for students.'
    },
    {
      heading:'Canteen',
      description:'A clean hygienic modern canteen operates in the campus which serves breakfast, lunch, and snacks throughout the day.'
    },
    {
      heading:'Sports',
      description:'Campus has 2 main Playgrounds- for Cricket and football. In addition, basketball and volleyball grounds are also available in the campus for students. Indoor games like Table tennis, Chess, carom are also available in the college'
    }
  ]
}
