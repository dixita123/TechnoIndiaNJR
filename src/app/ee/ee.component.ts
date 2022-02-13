import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ee',
  templateUrl: './ee.component.html',
  styleUrls: ['./ee.component.css']
})
export class EeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faculty:any[]=[
    {
      img:'../../assets/Electrical engineering/prakash bahrani.jpg',
      name:'Dr. Prakash Bahrani',
      post:'Mordern Control System'
    },
    {
      img:'../../assets/Electrical engineering/rajkumar soni.jpg',
      name:'Mr. Rajkumar Soni',
      post:'Energy and Power System'
    },
    {
      img:'../../assets/Electrical engineering/abrar ahmed.jpg',
      name:'Dr. Abrar Ahmed',
      post:'Renewable Energy'
    },
    {
      img:'../../assets/Electrical engineering/ashika sharma.jpg',
      name:'Mrs. Ashika Sharma',
      post:'Electronics for Renewable Energy'
    },
     {
       img:'../../assets/Electrical engineering/lalita.jpg',
       name:'Ms. Lalita Vaishnav',
       post:'Electrical Machine Design'
     },
     {
      img:'../../assets/Electrical engineering/zenab.jpg',
      name:'Ms. Zenab Kurabadwala',
      post:'Lab'
    },
    {
      img:'../../assets/Electrical engineering/pushkar.jpg',
      name:'Mr. Pushkar Lohar',
      post:'Lab'
    },
    {
      img:'../../assets/Electrical engineering/saurabh.jpg',
      name:'Mr. Saurabh Sharma',
      post:'Lab'
    }
   ]
}
