/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelLeave {
  '_links'?: Links;
  approbation?: 'NONE' | 'APPRO_MANAGER' | 'APPRO_HR';
  createdAt?: string;
  endDate?: string;
  leaveId?: number;
  leaveType?: 'ANNUAL' | 'SICK' | 'UNPAID' | 'MATERNITY';
  startDate?: string;
  status?: 'PENDING' | 'ACCEPTED' | 'CANCELLED' | 'REJECTED';
}
