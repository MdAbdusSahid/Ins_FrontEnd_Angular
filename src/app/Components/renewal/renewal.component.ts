import { Component, OnInit } from '@angular/core';
import { RenewalapiserviceService } from '../../services/renewalapiservice.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-renewal',
  templateUrl: './renewal.component.html',
  styleUrls: ['./renewal.component.css']
})
export class RenewalComponent implements OnInit {

  renewaldata: any

  faAngleLeft = faAngleLeft


  constructor(private service: RenewalapiserviceService) {

  }

  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.service.getrenewaldata().subscribe((data) => {
      this.renewaldata = data
      console.log(data)
    })

  }





}
