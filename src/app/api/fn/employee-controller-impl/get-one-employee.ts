/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelEmployee } from '../../models/entity-model-employee';

export interface GetOneEmployee$Params {
  id: number;
}

export function getOneEmployee(http: HttpClient, rootUrl: string, params: GetOneEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
  const rb = new RequestBuilder(rootUrl, getOneEmployee.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelEmployee>;
    })
  );
}

getOneEmployee.PATH = '/api/v1/employees/{id}';
