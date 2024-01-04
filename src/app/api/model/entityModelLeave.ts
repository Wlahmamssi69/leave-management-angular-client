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
import { Link } from './link';


export interface EntityModelLeave { 
    leaveId?: number;
    startDate?: string;
    endDate?: string;
    createdAt?: string;
    leaveType?: EntityModelLeave.LeaveTypeEnum;
    status?: EntityModelLeave.StatusEnum;
    approbation?: EntityModelLeave.ApprobationEnum;
    _links?: { [key: string]: Link; };
}
export namespace EntityModelLeave {
    export type LeaveTypeEnum = 'ANNUAL' | 'SICK' | 'UNPAID' | 'MATERNITY';
    export const LeaveTypeEnum = {
        Annual: 'ANNUAL' as LeaveTypeEnum,
        Sick: 'SICK' as LeaveTypeEnum,
        Unpaid: 'UNPAID' as LeaveTypeEnum,
        Maternity: 'MATERNITY' as LeaveTypeEnum
    };
    export type StatusEnum = 'PENDING' | 'ACCEPTED' | 'CANCELLED' | 'REJECTED';
    export const StatusEnum = {
        Pending: 'PENDING' as StatusEnum,
        Accepted: 'ACCEPTED' as StatusEnum,
        Cancelled: 'CANCELLED' as StatusEnum,
        Rejected: 'REJECTED' as StatusEnum
    };
    export type ApprobationEnum = 'NONE' | 'APPRO_MANAGER' | 'APPRO_HR';
    export const ApprobationEnum = {
        None: 'NONE' as ApprobationEnum,
        ApproManager: 'APPRO_MANAGER' as ApprobationEnum,
        ApproHr: 'APPRO_HR' as ApprobationEnum
    };
}

