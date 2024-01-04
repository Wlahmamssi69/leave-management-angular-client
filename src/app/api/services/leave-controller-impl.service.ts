/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveLeaveRequest } from '../fn/leave-controller-impl/approve-leave-request';
import { ApproveLeaveRequest$Params } from '../fn/leave-controller-impl/approve-leave-request';
import { cancelLeaveRequest } from '../fn/leave-controller-impl/cancel-leave-request';
import { CancelLeaveRequest$Params } from '../fn/leave-controller-impl/cancel-leave-request';
import { CollectionModelEntityModelLeave } from '../models/collection-model-entity-model-leave';
import { declineLeaveRequest } from '../fn/leave-controller-impl/decline-leave-request';
import { DeclineLeaveRequest$Params } from '../fn/leave-controller-impl/decline-leave-request';
import { EntityModelLeave } from '../models/entity-model-leave';
import { getAllLeaves } from '../fn/leave-controller-impl/get-all-leaves';
import { GetAllLeaves$Params } from '../fn/leave-controller-impl/get-all-leaves';
import { getLeavesUnderSupervision } from '../fn/leave-controller-impl/get-leaves-under-supervision';
import { GetLeavesUnderSupervision$Params } from '../fn/leave-controller-impl/get-leaves-under-supervision';
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

  /** Path part for operation `declineLeaveRequest()` */
  static readonly DeclineLeaveRequestPath = '/api/v1/leaves/decline';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `declineLeaveRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  declineLeaveRequest$Response(params: DeclineLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelLeave>> {
    return declineLeaveRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `declineLeaveRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  declineLeaveRequest(params: DeclineLeaveRequest$Params, context?: HttpContext): Observable<EntityModelLeave> {
    return this.declineLeaveRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelLeave>): EntityModelLeave => r.body)
    );
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

  /** Path part for operation `approveLeaveRequest()` */
  static readonly ApproveLeaveRequestPath = '/api/v1/leaves/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveLeaveRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveLeaveRequest$Response(params: ApproveLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelLeave>> {
    return approveLeaveRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveLeaveRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveLeaveRequest(params: ApproveLeaveRequest$Params, context?: HttpContext): Observable<EntityModelLeave> {
    return this.approveLeaveRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelLeave>): EntityModelLeave => r.body)
    );
  }

  /** Path part for operation `getAllLeaves()` */
  static readonly GetAllLeavesPath = '/api/v1/leaves/{idPerson}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLeaves()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLeaves$Response(params: GetAllLeaves$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelLeave>> {
    return getAllLeaves(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLeaves$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLeaves(params: GetAllLeaves$Params, context?: HttpContext): Observable<CollectionModelEntityModelLeave> {
    return this.getAllLeaves$Response(params, context).pipe(
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

  /** Path part for operation `getLeavesUnderSupervision()` */
  static readonly GetLeavesUnderSupervisionPath = '/api/v1/leaves/managers/{idManager}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLeavesUnderSupervision()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLeavesUnderSupervision$Response(params: GetLeavesUnderSupervision$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelLeave>> {
    return getLeavesUnderSupervision(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLeavesUnderSupervision$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLeavesUnderSupervision(params: GetLeavesUnderSupervision$Params, context?: HttpContext): Observable<CollectionModelEntityModelLeave> {
    return this.getLeavesUnderSupervision$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelLeave>): CollectionModelEntityModelLeave => r.body)
    );
  }

}
