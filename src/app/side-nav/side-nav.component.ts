import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface LeaveRequest {
  id: number,
  startingDate: string,
  endDate: string,
  status: string
}

const mockLeaveRequests: LeaveRequest[] = [
  {
    id: 1,
    startingDate: "2023-12-23",
    endDate: "2023-12-30",
    status: "accepted"
  },
  {
    id: 2,
    startingDate: "2024-01-15",
    endDate: "2024-01-19",
    status: "pending"
  },
  {
    id: 3,
    startingDate: "2023-11-25",
    endDate: "2023-11-28",
    status: "declined"
  },
  {
    id: 4,
    startingDate: "2024-02-06",
    endDate: "2024-02-10",
    status: "accepted"
  },
  {
    id: 5,
    startingDate: "2024-03-01",
    endDate: "2024-03-05",
    status: "pending"
  },
  { id: 6, startingDate: "2023-12-15", endDate: "2023-12-20", status: "accepted" },
  { id: 7, startingDate: "2024-01-05", endDate: "2024-01-10", status: "declined" },
  { id: 8, startingDate: "2023-11-15", endDate: "2023-11-18", status: "pending" },
  { id: 9, startingDate: "2024-02-25", endDate: "2024-02-28", status: "accepted" },
  { id: 10, startingDate: "2024-03-15", endDate: "2024-03-20", status: "pending" },
];

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements AfterViewInit {
  datasource = new MatTableDataSource<LeaveRequest>(mockLeaveRequests);
  displayedColumns: string[] = ['id', 'startingDate', 'endDate', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
