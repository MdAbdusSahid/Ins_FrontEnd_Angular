
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faAngleLeft, faShareAlt, faChildren, faPersonDress, faPerson, faBaby } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NewleadserviceService } from '../../services/newleadservice.service';
import { EmployeeDetails } from '../../Class/EmployeeDetails';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { NewleadformServiceService } from '../../services/newleadform-service.service';




@Component({
  selector: 'app-newleadsform',
  templateUrl: './newleadsform.component.html',
  styleUrls: ['./newleadsform.component.css']
})
export class NewleadsformComponent implements OnInit {


  employee: EmployeeDetails[];
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  faAngleLeft = faAngleLeft;
  faShareAlt = faShareAlt;
  faWhatsapp = faWhatsapp;
  faChildren = faChildren;
  faPersonDress = faPersonDress;
  faPerson = faPerson;
  faBaby = faBaby;
  selectedGender: string;
  pincode: number;
  address: string;
  submitted: boolean = false;



  constructor(private builder: FormBuilder, private service: NewleadserviceService, private formservice: NewleadformServiceService, private sharedService: SharedServiceService) {
    this.employee = [];
  }

  ngOnInit(): void {
    this.firstFormGroup = this.builder.group({

      contact: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      name: [''],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      lastConnected: [''],
      ladStage: [''],
      age: [""],
      smoke: [null],
      alcohol: [null],
      gender: ['', Validators.required],
    });


    this.secondFormGroup = this.builder.group({
      anualIncome: ['', Validators.required],
      govRebate: ['', Validators.required],
      taxRebate: ['', Validators.required],
    });
    this.thirdFormGroup = this.builder.group({});
    this.fourthFormGroup = this.builder.group({});


  }
  onSmokeButtonClick(value: boolean): void {
    this.firstFormGroup.controls['smoke'].setValue(value);
  }
  onAlcoholButtonClick(value: boolean): void {
    this.firstFormGroup.controls['alcohol'].setValue(value);
  }
  debug
  saveEMPFirstFormGroup = (): void => {
    if (this.firstFormGroup.valid) {
      const formData = this.firstFormGroup.value;
      formData.name = formData.fName + ' ' + formData.lName;
      formData.lastConnected = "Few Days Ago"
      formData.leadStage = "Connected"
      this.employee.push(formData);
      this.formservice.saveEmployee(formData).subscribe(
        (response: EmployeeDetails) => {
          console.log('Employee data saved:', response);

        },
        (error) => {
          console.error('Error saving employee data:', error);
        }
      );
      this.sharedService.setData(this.employee);
      console.log('Employee data saved:', formData);
    } else {
      this.firstFormGroup.markAllAsTouched();
      this.submitted = true;
    }
  }
  saveEMPforSecondFormGroup = (): void => {
    if (this.secondFormGroup.valid) {
      const formData = this.secondFormGroup.value;
      this.employee.push(formData);
      console.log('Employee data saved:', formData);
    }
    else {
      this.secondFormGroup.markAllAsTouched();
    }
  }
  calculateAge(): number {
    const today = new Date();
    const birthDate = new Date(this.firstFormGroup.value.birthDate);
    const diff = today.getTime() - birthDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}


