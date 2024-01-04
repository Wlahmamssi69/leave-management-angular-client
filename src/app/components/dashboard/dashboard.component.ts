import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableDataSourcePaginator, MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { LeaveControllerImplService } from 'src/app/api/services';
import { GetAllLeaves$Params, getAllLeaves } from 'src/app/api/fn/leave-controller-impl/get-all-leaves';
import { CollectionModelEntityModelLeave, Leave } from 'src/app/api/models';
import { TableComponent } from 'src/app/components/table/table.component';
import { RouterModule } from '@angular/router';
import { CancelLeaveRequest$Params } from 'src/app/api/fn/leave-controller-impl/cancel-leave-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableComponent,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datasource!: MatTableDataSource<Leave, MatTableDataSourcePaginator>;
  displayedColumns: string[] = ['leaveId', 'startDate', 'endDate', 'leaveType', 'status'];
  leaveService: LeaveControllerImplService = inject(LeaveControllerImplService);
  router: Router = inject(Router);
  leaves!: CollectionModelEntityModelLeave;
  isDataSourceEmpty: boolean = true;
  processingRequestExists: boolean = false;
  pendingLeaveRequestId: number = -1;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // TODO: remove this line when it's added
    // in the login
    localStorage.setItem('PersonId', '3');
    const input: GetAllLeaves$Params = { idPerson: Number(localStorage.getItem('PersonId')) };


    this.leaveService.getAllLeaves$Response(input)
      .pipe(
        tap((leaves) => {
          // Validate received data
          if (!leaves.body || !leaves.body._embedded || !leaves.body._embedded.leaveList) {
            throw new Error('Invalid data received from server');
          }
        }),
        catchError(error => {
          // Handle errors gracefully
          console.error('Error fetching leaves:', error);
          // throw new Error('Invalid data received from server');
          return of({
            body: {
              _embedded: {
                leaveList: []
              }
            }
          });

        })
      )
      .subscribe((leaves) => {
        console.log(leaves.body._embedded!.leaveList);
        // console.log(typeof leaves);

        this.initDataSource(leaves);
        this.initPendingRequest(leaves);
      });
  }

  private initDataSource(leaves: any) {
    this.datasource = new MatTableDataSource<Leave>(leaves.body._embedded.leaveList);
    this.datasource.paginator = this.paginator;

    if (this.datasource.data.length !== 0)
      this.isDataSourceEmpty = false;
  }

  private initPendingRequest(leaves: any) {
    const leave: Leave[] = leaves.body._embedded!.leaveList.filter((leave: Leave) => {
      return leave.status === "PENDING";
    });
    if (leave.length === 0) {
      this.processingRequestExists = false;
      this.pendingLeaveRequestId = -1;
      return;
    }
    this.processingRequestExists = true;
    this.pendingLeaveRequestId = Number(leave[0].leaveId);
    console.log(this.pendingLeaveRequestId);

  }

  cancelOnClick() {
    if (this.pendingLeaveRequestId === -1) return;
    // this.leaveService.
    // this.leaveService.

    console.log(`the leave ${this.pendingLeaveRequestId} is being canceled`);
    const cancelLeaveRequestParam: CancelLeaveRequest$Params = { idLeave: this.pendingLeaveRequestId };
    this.leaveService.cancelLeaveRequest$Response(cancelLeaveRequestParam)
      .subscribe((leave) => {
        console.log(leave);
        window.location.reload();
      }),
      catchError(err => {
        console.log(err);
        return of();
      });

  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
