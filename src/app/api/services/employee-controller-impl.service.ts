/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changePassword } from '../fn/employee-controller-impl/change-password';
import { ChangePassword$Params } from '../fn/employee-controller-impl/change-password';
import { CollectionModelEntityModelEmployee } from '../models/collection-model-entity-model-employee';
import { EntityModelEmployee } from '../models/entity-model-employee';
import { getEmployees } from '../fn/employee-controller-impl/get-employees';
import { GetEmployees$Params } from '../fn/employee-controller-impl/get-employees';
import { getOneEmployee } from '../fn/employee-controller-impl/get-one-employee';
import { GetOneEmployee$Params } from '../fn/employee-controller-impl/get-one-employee';
import { replaceEmployee } from '../fn/employee-controller-impl/replace-employee';
import { ReplaceEmployee$Params } from '../fn/employee-controller-impl/replace-employee';
import { resetPassword } from '../fn/employee-controller-impl/reset-password';
import { ResetPassword$Params } from '../fn/employee-controller-impl/reset-password';
import { verifyToken } from '../fn/employee-controller-impl/verify-token';
import { VerifyToken$Params } from '../fn/employee-controller-impl/verify-token';

@Injectable({ providedIn: 'root' })
export class EmployeeControllerImplService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEmployees()` */
  static readonly GetEmployeesPath = '/api/v1/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployees()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployees$Response(params?: GetEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelEmployee>> {
    return getEmployees(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEmployees$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployees(params?: GetEmployees$Params, context?: HttpContext): Observable<CollectionModelEntityModelEmployee> {
    return this.getEmployees$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelEmployee>): CollectionModelEntityModelEmployee => r.body)
    );
  }

  /** Path part for operation `replaceEmployee()` */
  static readonly ReplaceEmployeePath = '/api/v1/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceEmployee$Response(params: ReplaceEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return replaceEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `replaceEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceEmployee(params: ReplaceEmployee$Params, context?: HttpContext): Observable<{
}> {
    return this.replaceEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `verifyToken()` */
  static readonly VerifyTokenPath = '/api/v1/employees/reset-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyToken$Response(params: VerifyToken$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return verifyToken(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `verifyToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyToken(params: VerifyToken$Params, context?: HttpContext): Observable<{
}> {
    return this.verifyToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/api/v1/employees/reset-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: ChangePassword$Params, context?: HttpContext): Observable<{
}> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `resetPassword()` */
  static readonly ResetPasswordPath = '/api/v1/employees/password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword$Response(params: ResetPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return resetPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword(params: ResetPassword$Params, context?: HttpContext): Observable<{
}> {
    return this.resetPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getOneEmployee()` */
  static readonly GetOneEmployeePath = '/api/v1/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOneEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOneEmployee$Response(params: GetOneEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelEmployee>> {
    return getOneEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOneEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOneEmployee(params: GetOneEmployee$Params, context?: HttpContext): Observable<EntityModelEmployee> {
    return this.getOneEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelEmployee>): EntityModelEmployee => r.body)
    );
  }

}
