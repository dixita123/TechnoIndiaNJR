import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industrymous',
  templateUrl: './industrymous.component.html',
  styleUrls: ['./industrymous.component.css']
})
export class IndustrymousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  MOOCs:any[]=[
    {
      img:'../../assets/industry mous/upgrad.jpg',
      title:'Upgrad for Campus'
    },
    {
      img:'../../assets/industry mous/Coursera-for-Campus.jpg',
      title:'Coursera for Campus'
    },
    {
      img:'../../assets/industry mous/udacity.jpg',
      title:'Udacity'
    },
    {
      img:'../../assets/industry mous/EDX.jpg',
      title:'EDX'
    },
    {
      img:'../../assets/industry mous/NPTEL.jpg',
      title:'NPTEL'
    },
    {
      img:'../../assets/industry mous/Spoken-Tutorial.jpg',
      title:'Spoken Tutorial'
    },
  ]
  industry:any[]=[
    {
      img:'../../assets/industry mous/IBM.png',
      title:'IBM'
    },
    {
      img:'../../assets/industry mous/EON-reality.png',
      title:'EON Reality'
    },
    {
      img:'../../assets/industry mous/RedHat.png',
      title:'Red Hat'
    },
    {
      img:'../../assets/industry mous/AWS-Academy.jpg',
      title:'AWS Academy'
    },
    {
      img:'../../assets/industry mous/Google-For-Education.jpg',
      title:'Google For Education'
    },
    {
      img:'../../assets/industry mous/Github-Education.jpg',
      title:'Github Education'
    },
    {
      img:'../../assets/industry mous/NVIDIA-Deep-learning-institute-.jpg',
      title:'NVIDIA Deep learning institute'
    },
    {
      img:'../../assets/industry mous/Oracle-Academy.jpg',
      title:'Oracle Academy'
    },
    {
      img:'../../assets/industry mous/Unity.jpg',
      title:'Unity'
    },
    {
      img:'../../assets/industry mous/Mulesoft.jpg',
      title:'Mulesoft'
    },
    {
      img:'../../assets/industry mous/Salesforce.jpg',
      title:'Salesforce'
    },
    {
      img:'../../assets/industry mous/UI-Path.jpg',
      title:'UI Path'
    },
    {
      img:'../../assets/industry mous/Secure-Meters-Udaipur.png',
      title:'Secure Meters Udaipur'
    },
    {
      img:'../../assets/industry mous/Thermax.png',
      title:'Thermax Limited'
    },
    {
      img:'../../assets/industry mous/ISDC-UK.png',
      title:'ISDC UK'
    },
    {
      img:'../../assets/industry mous/GTT.png ',
      title:'GTT'
    },
    {
      img:'../../assets/industry mous/Cocubes.png',
      title:'Cocubes'
    },
    {
      img:'../../assets/industry mous/CDac.png',
      title:'CDAC'
    },
    {
      img:'../../assets/industry mous/Bennet-University.png',
      title:'Bennet University'
    },
    {
      img:'../../assets/industry mous/Chennai-Institute-of-Technology.png',
      title:'Chennai-Institute of Technology'
    },
    {
      img:'../../assets/industry mous/Entrepreneurship-Cell-IIT-Kharagpur.png',
      title:'Entrepreneurship Cell IIT Kharagpur'
    },
    {
      img:'../../assets/industry mous/Aspire-Disruptive-Skill-Foundation.png',
      title:'Aspire Disruptive Skill Foundation'
    },
    {
      img:'../../assets/industry mous/Eduvance.png',
      title:'Eduvance'
    },
    {
      img:'../../assets/industry mous/Rubicon-Skill-Development-Pvt.-Ltd.png',
      title:'Rubicon Skill Development Pvt. Ltd'
    },
  ]
}
