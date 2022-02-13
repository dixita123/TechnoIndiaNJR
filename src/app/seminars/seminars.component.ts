import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.css']
})
export class SeminarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Techtalks:any[]=[
    {
      date:'11/06/2021',
      event:'Tech Talks S2 1.0',
      topic:' Applications of Artificial Intelligence in Electrical and Mining Engineering',
      speaker:'Dr. Ananda Shankar Hati '
    },
    {
      date:'18/08/2020',
      event:'Tech Talks S1 11.0',
      topic:'.Artificial Intelligence & Future of Work',
      speaker:'	Mr. Kundana Lal'
    },
    {
      date:'30/07/2020',
      event:'	Tech Talks S1 9.0',
      topic:'	Environmental Healthcare Managemen',
      speaker:' Prof. Sandeep Poddar'
    },
    {
      date:'25/07/2020',
      event:'Tech Talks S1 8.0',
      topic:'Deep Learning for Image-Based Tasks',
      speaker:'	Dr. Pankaj Porwal '
    },
    {
      date:'24/07/2020 ',
      event:'Tech Talks S1 7.0',
      topic:'Dr. Peter Looker ',
      speaker:'Technology Incubator Program (AVR) '
    },
    {
      date:' 17/07/2020',
      event:'ech Talks S1 6.0',
      topic:'IEEE Educational Activities Resources and Emerging Technologies',
      speaker:'	Prof. Lance Fung'
    },
    {
      date:'15/07/2020',
      event:'Tech Talks S1 5.0',
      topic:'Using Massive Open On-line Courses in Professional Development',
      speaker:'Dr. Osama Al Mahdi '
    },
    {
      date:' 11/07/2020',
      event:'Tech Talks S1 4.0',
      topic:'Decision Making in Fuzzy Environment',
      speaker:'Prof Ioan Dzitac '
    },
    {
      date:'09/07/2020',
      event:'Tech Talks S1 3.0',
      topic:'Deep Learning for Biomedical Applications',
      speaker:'Prof. Celia Shahna',
    },
    {
      date:'03/07/2020',
      event:'Tech Talks S1 2.0',
      topic:' New Concepts of AI and the future',
      speaker:'Dr. Utku Kose '
    },
    {
      date:'30/06/2020',
      event:'Tech Talks S1 1.0',
      topic:'Disaster Risk Management Education and Resilience',
      speaker:'Dr. Indrajit Pal '
    },
    {
      date:'',
      event:'',
      topic:'',
      speaker:''
    },
  ]
  sanghoshi:any[]=[
    {
      date:'03/12/2021',
      event:'Sanghoshti 9.0',
      topic:'	Profile Development to crack interviews of top technology companies',
      speaker:'Mr. Raghav Nyati'
    },
    {
      date:'17/10/2020',
      event:'Sanghoshti 8.0',
      topic:'Design Thinking : Why it’s important?',
      speaker:'Mr. Karmjitsinh Bihola'
    },
    {
      date:'29/08/2020',
      event:'Sanghoshti 7.0',
      topic:'Why Devops in trend and components of Devops',
      speaker:'Mr. Mohit Sharma'
    },
    {
      date:'28/07/2020',
      event:'Sanghoshti 6.0',
      topic:'Power of Data – in Digital Transformation, Cloud and AI world	',
      speaker:'Mr. Lalit Yagnik'
    },
    {
      date:'25/07/2020',
      event:'Sanghoshti 5.0',
      topic:'Approaches to improving accuracy of ML models',
      speaker:'	Dr. Jitendra Shreemali'
    },
    {
      date:'21/07/2020',
      event:'Sanghoshti 4.0',
      topic:'Computational Techniques and its Application',
      speaker:'Prof. Prasun Chakrabarti'
    },
    {
      date:'27/01/2020',
      event:'Sanghoshti 3.0',
      topic:'Managing and Leading in Digital World',
      speaker:'	Prof. Deepak Khazanchi'
    },    {
      date:'21/01/2020',
      event:'Sanghoshti 2.0',
      topic:'Real-Life Application Oriented Projects',
      speaker:'Prof. Jonathan Andrew Ware'
    },
    {
      date:'14/09/2019',
      event:'Sanghoshti 1.0',
      topic:'Google Assistant and Dialogue Flow',
      speaker:'	Mr. Jaideep Asodariya'
    }
  ]
  
}
