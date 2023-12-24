/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Leave } from '../../models/leave';

export interface SubmitLeaveRequest$Params {
  idPerson: number;
      body: Leave
}

export function submitLeaveRequest(http: HttpClient, rootUrl: string, params: SubmitLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<Leave>> {
  const rb = new RequestBuilder(rootUrl, submitLeaveRequest.PATH, 'post');
  if (params) {
    rb.path('idPerson', params.idPerson, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Leave>;
    })
  );
}

submitLeaveRequest.PATH = '/api/v1/leaves/{idPerson}';
