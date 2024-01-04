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
export class DashboardComponent implements  OnInit {
  datasource!: MatTableDataSource<Leave, MatTableDataSourcePaginator>;
  displayedColumns: string[] = ['leaveId', 'startDate', 'endDate', 'leaveType', 'status'];
  leaveService: LeaveControllerImplService = inject(LeaveControllerImplService);
  leaves!: CollectionModelEntityModelLeave;
  isDataSourceEmpty:boolean = true;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // TODO: remove this line when it's added
    // in the login
    localStorage.setItem('PersonId', '3');
    const input: GetAllLeaves$Params = { idPerson: Number(localStorage.getItem('PersonId')) };


    this.leaveService.getAllLeaves$Response(input)
      .pipe(
        tap(leaves => {
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
      .subscribe(leaves => {
        console.log(leaves.body._embedded!.leaveList);
        this.datasource = new MatTableDataSource<Leave>(leaves.body._embedded!.leaveList);
        this.datasource.paginator = this.paginator;

        if (this.datasource.data.length !== 0)
          this.isDataSourceEmpty = false;
      });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
