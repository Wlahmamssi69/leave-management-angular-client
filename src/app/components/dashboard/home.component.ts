import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
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
  }
];
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datasource: LeaveRequest[] = mockLeaveRequests;
  displayedColumns: string[] = ['id', 'startingDate', 'endDate', 'status'];
}
