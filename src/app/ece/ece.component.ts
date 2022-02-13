import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ece',
  templateUrl: './ece.component.html',
  styleUrls: ['./ece.component.css']
})
export class EceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faculty:any[]=[
    {
      img:'../../assets/chhawchharia.jpg',
      name:'Prof. Pradeep Chhawchharia',
      post:'Embedded Systems Design'
    },
    {
      img:'../../assets/vivek jain.jpg',
      name:'Dr. Vivek Jain',
      post:'Digital Signal & Image Processing'
    },
    {
      img:'../../assets/nitin kothari.jpg',
      name:'Dr. Nitin Kothari',
      post:'R.F & Analog Electronics'
    },
    {
      img:'../../assets/yogendra singh.jpg',
      name:'Mr. Yogendra Singh',
      post:'VLSI & IoT'
    },
     {
       img:'../../assets/payal.jpg',
       name:'Ms. Payal Paliwal',
       post:'Digital Communication'
     },
     {
      img:'../../assets/minakshi.jpg',
      name:'Mrs. Minakshi Porwal',
      post:'Digital System Design'
    },
    {
      img:'../../assets/neha.jpg',
      name:'Ms. Neha Tak',
      post:'EMI – EMC'
    },
    {
      img:'../../assets/chandra.jpg',
      name:'Mr. Chandra Shekhar',
      post:'Lab'
    }
   ]
}
