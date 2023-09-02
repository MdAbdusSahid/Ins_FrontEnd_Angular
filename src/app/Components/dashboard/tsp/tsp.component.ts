import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tsp',
  templateUrl: './tsp.component.html',
  styleUrls: ['./tsp.component.css']
})
export class TspComponent implements OnInit {
  ngOnInit(): void {


  }

  //  color = 'pink';

  value1: number = 80;

  bufferValue1 = 0;




  value2: number = 70;

  bufferValue2 = 0;




  value3: number = 80;

  bufferValue3 = 0;




  name1 = 'Health Protect Plus';

  name2 = 'Covid Shield Plus';

  name3 = 'CG Term Life';

}
  

