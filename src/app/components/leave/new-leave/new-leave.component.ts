import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {Leave,LeaveControllerService} from "../../../api";
import {Observable} from "rxjs";

@Component({
  selector: 'app-new-leave',
  templateUrl: './new-leave.component.html',
  styleUrls: ['./new-leave.component.css']
})
export class NewLeaveComponent {
  leaveForm: FormGroup;

  constructor(private fb: FormBuilder,private leaveService:LeaveControllerService,private router:Router) {

    this.leaveForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      leaveType: ['', Validators.required],
      position: ['', Validators.required],
      startDate: ['', [Validators.required,this.validateStartDate]],
      endDate: ['', [Validators.required,this.validateEndDate]],
      note: [''],
    });
  }


  validateStartDate(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const selectedDate = control.value;

    // Check if the selected start date is after the current date
    return selectedDate && selectedDate < currentDate
      ? { 'invalidStartDate': true }
      : null;
  }

  validateEndDate(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const selectedDate = control.value;

    // Check if the selected start date is after the current date
    return selectedDate && selectedDate < currentDate
      ? { 'invalidEndDate': true }
      : null;
  }


  onSubmit() {


      const leaveType=this.leaveForm.get('leaveType')?.value;
      const startDate=this.leaveForm.get('startDate')?.value;
      const endDate=this.leaveForm.get('endDate')?.value;

      const newLeave:Leave = {
        leaveType:leaveType ,
        startDate:startDate,
        endDate:endDate
      }

      // Handle the form submission logic here
      this.leaveService.submitLeaveRequest(1,newLeave).subscribe({
        next:(response)=>{
          console.log('Leave request submitted successfully:', response);
          this.router.navigateByUrl('dashboard');
        },
        error:(err)=>{
          console.error('Error submitting the request',err)
        }
      })

  }


}
