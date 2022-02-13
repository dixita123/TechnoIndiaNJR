import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   club:any[]=[
     {
      img:'../../assets/club/Toastmaster (1).jpg',
      title:'Toastmasters International - Techno Ariston'
     },
     {
      img:'../../assets/club/XR.jpg',
      title:'XR Club (AR/VR Club)'
     },
     {
      img:'../../assets/club/Codechef.jpg',
      title:'CodeChef Coding Club'
     },
     {
      img:'../../assets/club/DSC.jpg',
      title:'Google Developer Student Club Udaipur - Techno India NJR'
     },
     {
      img:'../../assets/club/i3.png',
      title:'Entrepreneurial Club'
     },
     {
      img:'../../assets/club/xpollinator.jpg',
      title:'xPollinator @ Techno NJR'
     },
     {
      img:'../../assets/club/iot.jpg',
      title:'IoT and Robotics Club'
     }
   ]
}
