/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelLeave } from '../../models/entity-model-leave';

export interface DeclineLeaveRequest$Params {
  idLeave: number;
  idManager: number;
}

export function declineLeaveRequest(http: HttpClient, rootUrl: string, params: DeclineLeaveRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelLeave>> {
  const rb = new RequestBuilder(rootUrl, declineLeaveRequest.PATH, 'put');
  if (params) {
    rb.query('idLeave', params.idLeave, {});
    rb.query('idManager', params.idManager, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelLeave>;
    })
  );
}

declineLeaveRequest.PATH = '/api/v1/leaves/decline';
