/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelLeave } from '../models/collection-model-entity-model-leave';
import { getAllLeaves } from '../fn/leave-controller-impl/get-all-leaves';
import { GetAllLeaves$Params } from '../fn/leave-controller-impl/get-all-leaves';
import { Leave } from '../models/leave';
import { submitLeaveRequest } from '../fn/leave-controller-impl/submit-leave-request';
import { SubmitLeaveRequest$Params } from '../fn/leave-controller-impl/submit-leave-request';

@Injectable({ providedIn: 'root' })
export class LeaveControllerImplService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
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

}
