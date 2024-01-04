/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Leave } from '../../models/leave';

export interface CancelLeaveRequest$Params {
  idLeave: number;
}

export function cancelLeaveRequest(http: HttpClient, rootUrl: string, params: CancelLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Leave>> {
  const rb = new RequestBuilder(rootUrl, cancelLeaveRequest.PATH, 'put');
  if (params) {
    rb.path('idLeave', params.idLeave, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Leave>;
    })
  );
}

cancelLeaveRequest.PATH = '/api/v1/leaves/cancel/{idLeave}';
