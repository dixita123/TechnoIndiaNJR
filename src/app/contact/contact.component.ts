import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contact:any[]=[
    {
      post:'Foundation Director',
      name:'DR. R S VYAS',
      number:+918696932700,
      email:'director@technonjr.org'
    },
    {
      post:'Principal',
      name:'DR. PANKAJ PORWAL',
      number:+918696932702,
      email:'principal@technonjr.org'
    },
    {
      post:'PROVOST - Research',
      name:'DR. PRASUN CHAKRABARTI',
      number:+916290026219,
      email:'prasun.chakrabarti@technonjr.org'
    },
    {
      post:'Admissions',
      name:'MR. GAURAV KUMAWAT',
      number:+918696932753,
      email:'admission@technonjr.org'
    },
    {
      post:'Dean-Research',
      name:'PROF. PRADEEP CHHAWCHHARIA',
      number:+918696932701,
      email:'research@technonjr.org'
    },
    {
      post:'Head – Industry Projects',
      name:'MR. AADITYA MAHESHWARI',
      number:+918696932715,
      email:'aaditya@technonjr.org'
    },
    {
      post:'Training & Placement',
      name:'MR. YOGENDRA SINGH SOLANKI',
      number:+918696932727,
      email:'tpo@technonjr.org'
    },
    {
      post:'Accounts',
      name:'MRS. MADHU VERDIA',
      number:+918696932770,
      email:'accounts@technonjr.org'
    },
    {
      post:'Examination',
      name:'MR. NEERAJ PANDYA',
      number:+918696932781,
      email:'neeraj.pandya@technonjr.org'
    }
  ]
}
