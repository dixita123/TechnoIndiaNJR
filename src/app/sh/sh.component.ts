import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sh',
  templateUrl: './sh.component.html',
  styleUrls: ['./sh.component.css']
})
export class SHComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faculty:any[]=[
    {
      img:'../../assets/science and humanities/kalpana.jpg',
      name:'Dr. Kalpana Fatawat',
      post:'Engineering Maths'
    },
    {
      img:'../../assets/science and humanities/amit.jpg',
      name:'Dr. Amit Sahu',
      post:'Organic Chemistry'
    },
    {
      img:'../../assets/science and humanities/payal.jpg',
      name:'Dr. Payal Jain',
      post:'Ph.D / Pure Mathematics'
    },
    {
      img:'../../assets/science and humanities/vivek.jpg',
      name:'Mr. Vivek Mali',
      post:'Applied Mathematics'
    },
     {
       img:'../../assets/science and humanities/renu.jpg',
       name:'Ms. Renu Joshi',
       post:'Engineering Maths'
     },
     {
      img:'../../assets/science and humanities/samina.jpg',
      name:'Ms. Samina Wagla',
      post:'Communication Skills'
    },
    {
      img:'../../assets/science and humanities/adhu.jpg',
      name:'Mrs. Madhu Verdia',
      post:'Humanities'
    },
    {
      img:'../../assets/science and humanities/vanija.png',
      name:'Ms. Vanija Joshi',
      post:'Engineering Maths'
    }
  ]
}
