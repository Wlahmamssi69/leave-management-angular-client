import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Leave} from "../../../model/leave";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private apiUrl='http://localhost:8080/api/v1/leaves'
  constructor(private http:HttpClient) { }

    getLeavesUnderSupervision(idManager: number): Observable<Leave[]> {
      const url = `${this.apiUrl}/managers/${idManager}`;
      return this.http.get<any>(url).pipe(
        map((response) => response._embedded?.leaveList || []),
      );
    }


  approveLeaveRequest(idLeave: number, idManager: number): Observable<Leave> {
    const url = `${this.apiUrl}/approve?idLeave=${idLeave}&idManager=${idManager}`;
    return this.http.put<any>(url, null).pipe(
      map((response) => response._embedded?.leave || response),
    );
  }



  declineLeaveRequest(idLeave: number, idManager: number): Observable<Leave> {
    const url = `${this.apiUrl}/decline?idLeave=${idLeave}&idManager=${idManager}`;
    return this.http.put<any>(url, null).pipe(
      map((response) => response._embedded?.leave || response),
    );
  }


}
