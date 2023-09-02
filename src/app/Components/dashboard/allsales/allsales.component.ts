import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-allsales',
  templateUrl: './allsales.component.html',
  styleUrls: ['./allsales.component.css']
})
export class AllsalesComponent implements OnInit {
  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.createchart();
  }
  public chart: any;

  createchart() {
    this.chart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
          {
            label: "Sales",
            data: ['10', '20', '10', '20', '15', '25', '20', '30', '10', '10', '15', '10'],
            backgroundColor: 'blue'
          },
          {
            label: "Target",
            data: ['25', '20', '30', '35', '60', '50', '20', '10', '40', '25', '36', '30'],
            backgroundColor: 'orange'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    })
  }
}
