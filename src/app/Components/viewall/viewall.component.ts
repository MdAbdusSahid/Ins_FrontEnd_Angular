import { Component, OnInit } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ApiserviceService } from '../../services/apiservice.service';
import { Viewall } from '../../viewall';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  apidata: any = []
  datanew: any = []



  total = 0;

  faAngleLeft = faAngleLeft

  constructor(private eser: ApiserviceService) {

  }
  ngOnInit(): void {

    this.eser.getdata().subscribe((data) => {
      this.apidata = data
      console.log(data)
    })
  }

  select(Policy_Owner: any) {
    let p: Viewall
    let currentdata = this.apidata.find((p: { Policy_Owner: any; }) => { return p.Policy_Owner === Policy_Owner })
    console.log(currentdata)
    this.datanew = currentdata
    console.log(this.datanew)

    console.log(localStorage.setItem('agentdata', JSON.stringify(currentdata)));

  }



}
