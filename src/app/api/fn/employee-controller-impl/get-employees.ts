/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelEmployee } from '../../models/collection-model-entity-model-employee';

export interface GetEmployees$Params {
}

export function getEmployees(http: HttpClient, rootUrl: string, params?: GetEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelEmployee>> {
  const rb = new RequestBuilder(rootUrl, getEmployees.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelEmployee>;
    })
  );
}

getEmployees.PATH = '/api/v1/employees';
