import { Injectable, inject } from '@angular/core';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  snackbar:MatSnackBar = inject(MatSnackBar);

  durationInSeconds: number = 3;
  /**
   * showSnackBar
   */
  public showSnackBar(msg:string, action:string = '') {
    this.snackbar.open(msg, action, {
      duration: this.durationInSeconds * 1000,
    });
  }
  constructor() { }
}
