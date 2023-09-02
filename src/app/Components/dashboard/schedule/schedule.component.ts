import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faUsers, faPhone, faVideoCamera, faVideo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  TodayDate: string;
  currentDate: Date;
  dates: Date[] = [];


  ngOnInit(): void {
    this.TodayDate = new Date().toISOString().substring(0, 10);
    this.currentDate = new Date();
    this.generateDates();
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.TodayDate = yyyy + '-' + mm + '-' + dd;
  }
  generateDates(): void {
    this.dates = []
    for (let i = 0;i < 7;i++) {
      const date = new Date(this.currentDate);
      date.setDate(this.currentDate.getDate() + i);
      this.dates.push(date);
    }
  }
  isCurrentDate(date: Date): boolean {
    return date.toDateString() === this.currentDate.toDateString();
  }
  faUsers = faUsers
  faPhone = faPhone
  faVideoCamera = faVideoCamera
  faVideo = faVideo


  meetings = [
    { time: '10:00 AM', name: 'Meeting with John' },
    { time: '2:00 PM', name: 'Meeting with Jane' },
  ];


  weekdays = [
    { date: new Date() },
    { date: new Date(new Date().getTime() + 86400000) },
    { date: new Date(new Date().getTime() + 2 * 86400000) },
    { date: new Date(new Date().getTime() + 3 * 86400000) },
    { date: new Date(new Date().getTime() + 4 * 86400000) },
    { date: new Date(new Date().getTime() + 5 * 86400000) },
    { date: new Date(new Date().getTime() + 6 * 86400000) }
  ];

  //TodayDate = '';

  //   @ViewChild ('calendar') calendar: MatCalendar <cal>;
  // selectedDate: cal;

}
