import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  keyPeople:any[]=[
    {
      img:'../../assets/Mr.-Raj-Shekhar-Vyas.jpg',
      name:'Mr. Raj Shekhar Vyas',
      post:'Director & Founder',
      education:' B.E. (Hons.) BITS Pilani MBA'

    },
    {
      img:'  ../../assets/Dr.-Pankaj-Porwal.jpg',
      name:'Dr. Pankaj Porwal',
      post:'Principal',
      education:'Ph.D (Cornell University, USA) B.Tech (IIT Bombay)'

    },
    {
      img:'../../assets/prasun chakarbarti.png',
      name:'Prof. Prasun Chakrabarti',
      post:'PROVOST',
      education:' Ph.D (Engg) Jadavpur University'

    },
    {
      img:'../../assets/Prof.-Pradeep-Chhawchharia.jpg',
      name:'Prof. Pradeep Chhawchharia',
      post:'Director – Research',
      education:'M.E. (BIT, Ranchi) M.Phil. (Hongkong Polytechnic university)'

    },
    {
      img:'../../assets/Mr.-Lalit-Yagnik.jpg',
      name:'Mr. Lalit Yagnik',
      post:'Technology Evangalist',
      education:''

    },
    {
      img:' ../../assets/about-key-people-1.jpg',
      name:'Mr. Sunil Nanda',
      post:'Technology Evangalist',
      education:''

    },
    {
      img:'../../assets/Mr.-Aaditya-Maheshwari.jpg',
      name:'Mr. Aaditya Maheshwari',
      post:'Head – Incubation Center, i3 Labs',
      education:''

    },
    {
      img:'../../assets/about-key-people.jpg',
      name:'Mr. Prakash Bahrani',
      post:'Head – Administration',
      education:''

    }
  ]
}
