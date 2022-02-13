import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-ca',
  templateUrl: './master-ca.component.html',
  styleUrls: ['./master-ca.component.css']
})
export class MasterCAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faculty:any[]=[
    {
      img:'../../assets/prasun chakarbarti.png',
      name:'Prof. (Dr.) Prasun Chakrabarti',
      post:'AI in Health Informatics'
    },
    {
      img:'../../assets/pp.jpg',
      name:'Dr. Pankaj Porwal',
      post:'Artificial Intelligence'
    },
    {
      img:'../../assets/jitendra shrimali.jpg',
      name:'Dr. Jitendra Shrimali',
      post:'Business Analytics'
    },
    {
      img:'../../assets/paras kothari.png',
      name:'Dr. Paras Kothari',
      post:'Web Application Development'
    },
     {
       img:'../../assets/am.png',
       name:'Mr. Aaditya Maheshwari',
       post:'Cloud Computing & Virtualization'
     },
     {
      img:'../../assets/pankaj chittora.png',
      name:'Mr. Pankaj Chittora',
      post:'Salesforce and CRM'
    },
    {
      img:'../../assets/akhilesh arya.png',
      name:'Mr. Akhilesh Arya',
      post:'Web & Competitive Programming'
    },
    {
      img:'../../assets/gaurav kumawat.jpg',
      name:'Mr. Gaurav Kumawat',
      post:'Android Application Developer'
    },
    {
      img:'../../assets/drashti.png',
      name:'Mrs. Drashti Upadhyay',
      post:'Cyber Security'
    },
    {
      img:'../../assets/kirti dashora.png',
      name:'Mrs. Kirti Dashora',
      post:'Data Structures & Algorithms'
    },
    {
      img:'../../assets/pankaj ameta.png',
      name:'Mr. Pankaj Ameta',
      post:'Web Application Developer'
    },
    {
      img:'../../assets/kiran acharya.png',
      name:'Mrs. Kiran Acharya',
      post:'Cloud Computing & Virtualization'
    },
    {
      img:'../../assets/ayush.png',
      name:'Mr. Ayush Gupta',
      post:'Java Web Development'
    },
    {
      img:'../../assets/nishit jain.png',
      name:'Mr. Nishit Jain',
      post:'Augmented And Virtual Reality'
    },
    {
      img:'../../assets/akshat bordia.png',
      name:'Mr. Akshat Bordia',
      post:'Digital Marketing'
    },
    {
      img:'../../assets/vansh soni.png',
      name:'Mr. Vansh Soni',
      post:'Artificial Intelligence'
    },
    {
      img:'../../assets/rtwik joshi.jpg',
      name:'Mr. Ritwik Joshi',
      post:'Artificial Intelligence'
    },
    {
      img:'../../assets/bhavya dave.png',
      name:'Mr. Bhavya Dave',
      post:'Mobile Application Development'
    },
    {
      img:'../../assets/vikas dave.jpg',
      name:'Mr. Vikas Dave',
      post:'Augmented And Virtual Reality'
    },
    {
      img:'../../assets/tathaghat charuvedi.png',
      name:'Mr. Tathaghat Charuvedi',
      post:'Business Analytics'
    },
    {
      img:'../../assets/danish paliwal.jpg',
      name:'Ms. Danish Paliwal',
      post:'Business Analytics'
    },
    {
      img:'../../assets/kailash mali.png',
      name:'Mr. Kailash Mali',
      post:'Network Engineer'
    }
   ]
}
