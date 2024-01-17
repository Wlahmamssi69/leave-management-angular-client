import { Component, OnInit} from '@angular/core';
import {CalendarEvent, CalendarView} from "angular-calendar";
import { LeaveControllerImplService } from 'src/app/api/services';
import { EventColor } from 'calendar-utils';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  format,
} from 'date-fns';
import {LeaveDetailComponent} from "../leave-detail/leave-detail.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {LeaveService} from "../../../services/leave.service";
import { Leave } from 'src/app/api/models';
const leaveColors: EventColor[] = [
  { primary: '#c57616', secondary: '#FAE3E3' },
  { primary: '#1e90ff', secondary: '#D1E8FF' },
  { primary: '#e3bc08', secondary: '#FDF1BA' },
  { primary: '#ff41b3', secondary: '#FDF1BA' },
  { primary: '#e00909', secondary: '#FDF1BA' },
  { primary: '#1b980c', secondary: '#FDF1BA' },
  // Add more colors as needed
];

// interface Leave {
//   leaveId: number;
//   startDate: Date;
//   endDate: Date;
//   createdAt: string;
//   leaveType: string;
//   status: string;
//   approbation: string;
// }
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView


  // Track button states
  isDayClicked = false;
  isWeekClicked = false;
  isMonthClicked = false;
  events: CalendarEvent[] = [];

  constructor(private service: LeaveControllerImplService,
              private http: HttpClient, private dialog: MatDialog,
              private router: Router,
              private leaveService: LeaveService,
  ) {

  }

  // Method to set the view and update button states
  setView(view: CalendarView) {
    this.view = view;

    // Reset button states
    this.isDayClicked = false;
    this.isWeekClicked = false;
    this.isMonthClicked = false;

    // Set the corresponding button state
    if (view === CalendarView.Day) {
      this.isDayClicked = true;
    } else if (view === CalendarView.Week) {
      this.isWeekClicked = true;
    } else if (view === CalendarView.Month) {
      this.isMonthClicked = true;
    }
  }

  ngOnInit(): void {

    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay,
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay,
    }[this.view];


    this.leaveService.getLeavesUnderSupervision(1)
      .subscribe(
        (response: Leave[]) => {
          const transformedData = response.map((leave: Leave) => ({
            title: 'Leave' + leave.leaveId,
            start: new Date(leave.startDate!),
            end: new Date(leave.endDate!),
            color: leaveColors[leave.leaveId! % leaveColors.length],
            allDay: true,
            meta: {leave},
          }));

          this.events = transformedData;
        },
        (error) => {
          console.error('Error fetching leaves:', error);
        }
      );

  }


  eventClicked({event}: { event: CalendarEvent<{ leave: Leave }> }): void {
    this.openLeaveDetailsModal(event.meta!.leave);
    
  }

  openLeaveDetailsModal(leave: Leave): void {
    console.log('Opening modal with leave:', leave);

    const dialogRef = this.dialog.open(LeaveDetailComponent, {
      width: '800px',
      data: {leave},
    });

    dialogRef.componentInstance.approve.subscribe(() => {
      this.approveLeave(leave);
      console.log('Approved:', leave);
      dialogRef.close(); // Close the modal

    });

    dialogRef.componentInstance.decline.subscribe(() => {
      this.declineLeave(leave);
      console.log('Declined:', leave);
      dialogRef.close();

    });


  }

  //handle approved requests
  approveLeave(leave: Leave): void {
    this.leaveService.approveLeaveRequest(leave.leaveId!, 1)
      .subscribe(
        (response: Leave) => {
          console.log('Leave approved successfully', response);
        },
        (error) => {
          console.error('Error approving leave:', error);
        }
      );
  }

  //handle declined request
  declineLeave(leave: Leave): void {
    this.leaveService.declineLeaveRequest(leave.leaveId!, 1)
      .subscribe(
        (response: Leave) => {
          console.log('Leave declined successfully', response);
        },
        (error) => {
          console.error('Error declining leave:', error);
        }
      );
  }



}
