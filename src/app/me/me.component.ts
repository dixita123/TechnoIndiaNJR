import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faculty:any[]=[
    {
      img:'../../assets/mechanical engineering/lokesh malviya.jpg',
      name:'Mr. Lokesh Malviya',
      post:'CAM & Robotics'
    },
    {
      img:'../../assets/mechanical engineering/shambhu chobisa.jpg',
      name:'Mr. Shambhu P Choubisa',
      post:'Design & Analysis'
    },
    {
      img:'../../assets/mechanical engineering/r s vyas.jpg',
      name:'Dr. Raj Vyas',
      post:'Production Engineering'
    },
    {
      img:'../../assets/mechanical engineering/abhishek.png',
      name:'Mr. Abhishek Sharma',
      post:'Digital Manufacturing'
    },
     {
       img:'../../assets/mechanical engineering/ashish.jpg',
       name:'Mr. Ashish Rakecha',
       post:'Computer Based Drafting'
     },
     {
      img:'../../assets/mechanical engineering/himanshu.jpg',
      name:'Mr. Himanshu Pandya',
      post:'Thermal Engineering'
    },
    {
      img:'../../assets/mechanical engineering/rajendra.jpg',
      name:'Mr. Rajendra Singh Chouhan',
      post:'Lab'
    },
    {
      img:'../../assets/mechanical engineering/narendra.jpg',
      name:'Mr. Narendra Singh Charan',
      post:'Computer Based drafting modeling'
    },
    {
      img:'../../assets/mechanical engineering/rajendra lohar.jpg',
      name:'Mr. Rajendra Lohar',
      post:'Lab'
    },
    {
      img:'../../assets/mechanical engineering/nisha.jpg',
      name:'Ms. Nisha Patel',
      post:''
    }
   ]
}
