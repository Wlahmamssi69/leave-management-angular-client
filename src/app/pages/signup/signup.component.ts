import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

validateForm!:FormGroup;
constructor(
  private authService:AuthService,
  private router:Router,
  private fb:FormBuilder) {

}

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    });
}

  submitForm(): void {
    if (this.validateForm.invalid) {
      console.log('Form has errors. Please fill in all required fields.');
      return;
    }
    console.log('Form submitted!', this.validateForm.value);
    this.authService.signup(this.validateForm.value).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/login');

    })
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}


