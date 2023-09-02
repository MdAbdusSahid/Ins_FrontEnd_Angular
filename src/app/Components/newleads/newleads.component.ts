import { Component, OnInit } from '@angular/core';
import { NewleadserviceService } from '../../services/newleadservice.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-newleads',
  templateUrl: './newleads.component.html',
  styleUrls: ['./newleads.component.css']
})
export class NewleadsComponent implements OnInit {

  allEmloyees: any[];
  selectedEmployee: number


  faAngleLeft = faAngleLeft


  constructor(private eservice: NewleadserviceService) { }
  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees() {
    this.eservice.getAllEmployees().subscribe((data) => {
      this.allEmloyees = data
      console.log(data)
    });

  }

}
