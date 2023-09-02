import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
// import datas from '../mockdata.json';
// import myFile from 'INS_Agent_Portal/src/app/myfile.json';





@Component({
  selector: 'app-newapplications',
  templateUrl: './newapplications.component.html',
  styleUrls: ['./newapplications.component.css']
})


export class NewapplicationsComponent 
{
  apidata:any
  

  constructor(private router:Router,private eservice:ApiserviceService)
  {

  }

  getdata()
  {
    this.eservice.getdata().subscribe((data)=>
    {
      this.apidata=data
      console.log(data)
    })
  }

  viewall()
  {
    this.router.navigate(['/viewall'])
    
  }

  view()
  {
    this.router.navigate(['/viewall'])
  }
  //tabledata:data[]=datas;

}
