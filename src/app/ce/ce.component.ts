import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ce',
  templateUrl: './ce.component.html',
  styleUrls: ['./ce.component.css']
})
export class CeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faculty:any[]=[
    {
      img:'../../assets/civil engineering/rakesh yadav.png',
      name:'Mr. Rakesh Yadav',
      post:'Structure Engineering'
    },
    {
      img:'../../assets/civil engineering/shantanu.jpg',
      name:'Mr. Shantanu Sharma',
      post:'Industry Faculty'
    },
    {
      img:'../../assets/civil engineering/divya.jpg',
      name:'Mrs. Divya Sharma',
      post:'Industry Faculty'
    },
    {
      img:'../../assets/civil engineering/bharat.jpg',
      name:'Mr. Bharat K Suthar',
      post:'Strength Of Material'
    },
     {
       img:'../../assets/civil engineering/jitendra.jpg',
       name:'Mr. Jitendra Choubisa',
       post:'Structural Analysis – Etabs'
     },
     {
      img:'../../assets/civil engineering/bhupendra.jpg',
      name:'Mr. Bhupendra Purohit',
      post:'Surveying'
    },
    {
      img:'../../assets/civil engineering/nishant.jpg',
      name:'Mr. Nishant Sharma',
      post:'Concrete Technology'
    },
    {
      img:'../../assets/civil engineering/juhi.jpg',
      name:'Ms. Juhi Rai',
      post:'Urban Planning'
    },
    {
      img:'../../assets/civil engineering/mamta.jpg',
      name:'Ms. Mamta Sharma',
      post:'Archaeology'
    },
    {
      img:'../../assets/civil engineering/kunjpreet.jpg',
      name:'Ms. Kunjpreet Arora',
      post:'Innovative Technologies for Waste Management'
    },
    {
      img:'../../assets/civil engineering/lokesh.jpg',
      name:'Mr. Lokesh Puri Goswami',
      post:'Innovative Technologies for Waste Management'
    }
   ]
}
