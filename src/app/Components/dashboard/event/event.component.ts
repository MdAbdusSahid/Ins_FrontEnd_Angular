

import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { NgbModule, ModalDismissReasons, NgbModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { NewleadserviceService } from 'src/app/services/newleadservice.service';
// import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  // standalone: true,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
			.dark-modal .modal-content {
				background-color: #292b2c;
				color: white;
			}
			.dark-modal .close {
				color: white;
			}
			.light-blue-backdrop {
				background-color: #5cb3fd;
			}
		`,
  ],
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  allEmployees: any[];
  allTheEmployees: any[];

  closeResult = '';
  text: "wishing you happy birthday" = "wishing you happy birthday";

  faBirthdayCake = faBirthdayCake




  constructor(private modalService: NgbModal, private employeeService: NewleadserviceService) {

  }




  // openBottomSheet(): void {
  //   this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  // }



  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
  openSm(contentsm: any) {
    this.modalService.dismissAll();
    this.modalService.open(contentsm, { size: 'lg', centered: true });
  }
  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  popping() {
    Swal.fire('Your wishes are sent !!', 'okay')
  }
  ngOnInit(): void {
    this.getAllEmployeeWithBirthday();
    this.getAllEmployees();

  }
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.allTheEmployees = data
      console.log(data)
    });
  }
  sendWishesToEmployeeBirthdayToday() {
    this.employeeService.sendWishToEmployeeWithTodayBirthDay().subscribe((data) => {
      // Optionally, you can handle the response data here
      console.log(data);
      // Display a success message to the user
      //alert('Birthday wishes have been sent!');
    }, //(error) => {
      // Handle errors here
      //   console.error(error);
      //   // Display an error message to the user
      //   alert('Failed to send birthday wishes. Please try again later.');
      // });
    )
  }
  getAllEmployeeWithBirthday() {
    this.employeeService.getEmployeeWithBirthDayToday().subscribe((data) => {
      this.allEmployees = data;
      console.log(this.allEmployees)
    });
  }
}







