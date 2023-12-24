import {NgModule} from "@angular/core";
import {MatDatepickerModule, MatDateRangeInput, MatDateRangePicker} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
@NgModule({
  imports:[
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class MaterialModule{}
