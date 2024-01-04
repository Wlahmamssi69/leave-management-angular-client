/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GrantedAuthority } from './grantedAuthority';


export interface User { 
    email?: string;
    password?: string;
    resetToken?: string;
    resetTokenExpiryDate?: string;
    role?: User.RoleEnum;
    id?: number;
    enabled?: boolean;
    username?: string;
    authorities?: Array<GrantedAuthority>;
    accountNonLocked?: boolean;
    accountNonExpired?: boolean;
    credentialsNonExpired?: boolean;
}
export namespace User {
    export type RoleEnum = 'ADMIN' | 'USER';
    export const RoleEnum = {
        Admin: 'ADMIN' as RoleEnum,
        User: 'USER' as RoleEnum
    };
}


