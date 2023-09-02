import { Component, OnInit } from '@angular/core';
import { faAngleLeft ,faPencil, faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-applicationdetails',
  templateUrl: './applicationdetails.component.html',
  styleUrls: ['./applicationdetails.component.css']
})
export class ApplicationdetailsComponent implements OnInit{
  
  newdata:any
  
  
  ngOnInit(): void {

    this.newdata=JSON.parse(localStorage.getItem('agentdata') || '');

    

  }

  faAngleLeft=faAngleLeft
  faPencil=faPencil
  faPhone=faPhone
  faEnvelope=faEnvelope


}
