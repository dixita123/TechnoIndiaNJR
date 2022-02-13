import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iqac',
  templateUrl: './iqac.component.html',
  styleUrls: ['./iqac.component.css']
})
export class IqacComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  iqrc:any[]=[
    {
      name:'	Dr. Pankaj Kumar Porwal',
      designation:'Chairman, IQAC'
    },
    {
      name:'Dr. Jitendra Shreemali',
      designation:'Chairman, IQAC'
    },
    {
      name:'Mr. R.S. Vyas	Founder Trustee',
      designation:'NJRCF'
    },
    {
      name:'Dr. Prasun Chakrabari',
      designation:'Member'
    },
    {
      name:'Mrs. Kirti Dashora',
      designation:'Member'
    },
    {
      name:'Dr. Paras Kothari',
      designation:'Member'
    },
    {
      name:'	Mr. Aaditya Maheshwari',
      designation:'Member'
    },
    {
      name:'Mr. Lokesh Malviya',
      designation:'Member'
    },
    {
      name:'Mr. Gaurav Kumawat',
      designation:'Member'
    },
    {
      name:'Mr. Rajkumar Soni	',
      designation:'Member'
    },
    {
      name:'Mr. Jitendra Choubisa',
      designation:'Member'
    },
    {
      name:'Mr. Neeraj Pandya',
      designation:'Member'
    },
    {
      name:	'Mr. K.K. Sharma',
      designation:'Employer'
    },
    {
      name:'Mr. Jayant Pancholi',
      designation:'Alumnus'
    },

  ]
}
