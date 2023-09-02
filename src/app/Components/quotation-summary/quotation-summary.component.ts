import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faShareAlt, faCircleCheck, faPhoneVolume, faPen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { EmployeeDetails } from '../../Class/EmployeeDetails';
import { NewapplicationsComponent } from '../dashboard/newapplications/newapplications.component';
import { NewleadsformComponent } from '../newleadsform/newleadsform.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  providers: [NewapplicationsComponent],
  selector: 'app-quotation-summary',
  templateUrl: './quotation-summary.component.html',
  styleUrls: ['./quotation-summary.component.css']
})
export class QuotationSummaryComponent implements OnInit {
  // employeeData: EmployeeDetails;
  emp: EmployeeDetails;
  randomNumber: number;
  today: Date;

  generateRandomNumber() {
    const maxDigits = 10;
    const min = Math.pow(10, maxDigits - 1);
    const max = Math.pow(10, maxDigits) - 1;
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }


  constructor(private builder: FormBuilder, private sharedService: SharedServiceService) {
    this.emp = this.sharedService.getData();
    console.log('this is Quetation summery');
    console.log(this.emp)
    this.generateRandomNumber();
    this.today = new Date();

  }
  ngOnInit(): void {
    // this.employeeData = this.sharedService.employeeData;
  }
  faAngleLeft = faAngleLeft;
  faShareAlt = faShareAlt;
  faWhatsapp = faWhatsapp;
  faCircleCheck = faCircleCheck;
  faPhoneVolume = faPhoneVolume;
  faPenLine = faPen;
  faEnvelope = faEnvelope;

}
