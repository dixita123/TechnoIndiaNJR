import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placementcell',
  templateUrl: './placementcell.component.html',
  styleUrls: ['./placementcell.component.css']
})
export class PlacementcellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RECRUITERS:any[]=[
    '../../assets/placement/ibm.png',
    '../../assets/placement/jtp.png',
    '../../assets/placement/motherson.jpg',
    '../../assets/placement/wipro.png',
    '../../assets/placement/infosys.png',
    '../../assets/placement/tata.png',
    '../../assets/placement/cognizant.png',
    '../../assets/placement/cap.png'
  ]
}
