import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator, MatTableModule } from '@angular/material/table';
import { Leave } from '../api/models';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() datasource!: MatTableDataSource<Leave, MatTableDataSourcePaginator>;
  @Input() isDataSourceEmpty: boolean = true;
  @Input() displayedColumns?: string[];

}
