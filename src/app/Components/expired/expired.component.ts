import { Component, OnInit } from '@angular/core';
import { ExpiredserviceService } from '../../services/expiredservice.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.css']
})
export class ExpiredComponent implements OnInit {

  expired: any

  faAngleLeft = faAngleLeft

  constructor(private eservice: ExpiredserviceService) { }


  ngOnInit(): void {
    this.getexpired()
  }

  getexpired() {
    this.eservice.getexpired().subscribe((data) => {
      this.expired = data
      console.log(data)
    })
  }




}
