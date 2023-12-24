/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelLeave } from '../../models/collection-model-entity-model-leave';

export interface GetAllLeaves$Params {
  idPerson: number;
}

export function getAllLeaves(http: HttpClient, rootUrl: string, params: GetAllLeaves$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelLeave>> {
  const rb = new RequestBuilder(rootUrl, getAllLeaves.PATH, 'get');
  if (params) {
    rb.path('idPerson', params.idPerson, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelLeave>;
    })
  );
}

getAllLeaves.PATH = '/api/v1/leaves/{idPerson}';
