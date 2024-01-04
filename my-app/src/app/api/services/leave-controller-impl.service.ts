/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { cancelLeaveRequest } from '../fn/leave-controller-impl/cancel-leave-request';
import { CancelLeaveRequest$Params } from '../fn/leave-controller-impl/cancel-leave-request';
import { CollectionModelEntityModelLeave } from '../models/collection-model-entity-model-leave';
import { getAllLeaves } from '../fn/leave-controller-impl/get-all-leaves';
import { GetAllLeaves$Params } from '../fn/leave-controller-impl/get-all-leaves';
import { getAllLeaves1 } from '../fn/leave-controller-impl/get-all-leaves-1';
import { GetAllLeaves1$Params } from '../fn/leave-controller-impl/get-all-leaves-1';
import { Leave } from '../models/leave';
import { resetLeaveBalancesManually } from '../fn/leave-controller-impl/reset-leave-balances-manually';
import { ResetLeaveBalancesManually$Params } from '../fn/leave-controller-impl/reset-leave-balances-manually';
import { submitLeaveRequest } from '../fn/leave-controller-impl/submit-leave-request';
import { SubmitLeaveRequest$Params } from '../fn/leave-controller-impl/submit-leave-request';

@Injectable({ providedIn: 'root' })
export class LeaveControllerImplService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `cancelLeaveRequest()` */
  static readonly CancelLeaveRequestPath = '/api/v1/leaves/cancel/{idLeave}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelLeaveRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelLeaveRequest$Response(params: CancelLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Leave>> {
    return cancelLeaveRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cancelLeaveRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cancelLeaveRequest(params: CancelLeaveRequest$Params, context?: HttpContext): Observable<Leave> {
    return this.cancelLeaveRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<Leave>): Leave => r.body)
    );
  }

  /** Path part for operation `getAllLeaves1()` */
  static readonly GetAllLeaves1Path = '/api/v1/leaves/{idPerson}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLeaves1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLeaves1$Response(params: GetAllLeaves1$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelLeave>> {
    return getAllLeaves1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLeaves1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLeaves1(params: GetAllLeaves1$Params, context?: HttpContext): Observable<CollectionModelEntityModelLeave> {
    return this.getAllLeaves1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelLeave>): CollectionModelEntityModelLeave => r.body)
    );
  }

  /** Path part for operation `submitLeaveRequest()` */
  static readonly SubmitLeaveRequestPath = '/api/v1/leaves/{idPerson}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitLeaveRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitLeaveRequest$Response(params: SubmitLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Leave>> {
    return submitLeaveRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `submitLeaveRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitLeaveRequest(params: SubmitLeaveRequest$Params, context?: HttpContext): Observable<Leave> {
    return this.submitLeaveRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<Leave>): Leave => r.body)
    );
  }

  /** Path part for operation `resetLeaveBalancesManually()` */
  static readonly ResetLeaveBalancesManuallyPath = '/api/v1/leaves/reset';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetLeaveBalancesManually()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetLeaveBalancesManually$Response(params?: ResetLeaveBalancesManually$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return resetLeaveBalancesManually(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetLeaveBalancesManually$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetLeaveBalancesManually(params?: ResetLeaveBalancesManually$Params, context?: HttpContext): Observable<{
}> {
    return this.resetLeaveBalancesManually$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllLeaves()` */
  static readonly GetAllLeavesPath = '/api/v1/leaves';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLeaves()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLeaves$Response(params?: GetAllLeaves$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Leave>>> {
    return getAllLeaves(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLeaves$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLeaves(params?: GetAllLeaves$Params, context?: HttpContext): Observable<Array<Leave>> {
    return this.getAllLeaves$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Leave>>): Array<Leave> => r.body)
    );
  }

}
