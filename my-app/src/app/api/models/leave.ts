/* tslint:disable */
/* eslint-disable */
export interface Leave {
  approbation?: 'NONE' | 'APPRO_MANAGER' | 'APPRO_HR';
  createdAt?: string;
  endDate?: string;
  leaveId?: number;
  leaveType?: 'ANNUAL' | 'SICK' | 'UNPAID' | 'MATERNITY';
  startDate?: string;
  status?: 'PENDING' | 'ACCEPTED' | 'CANCELLED' | 'REJECTED';
}
