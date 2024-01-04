export interface Leave {
  leaveId?: number;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  leaveType?: Leave.LeaveTypeEnum;
  status?: Leave.StatusEnum;
  approbation?: Leave.ApprobationEnum;

}

export namespace Leave {
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
