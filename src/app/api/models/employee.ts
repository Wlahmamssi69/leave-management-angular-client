/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Employee {
  annualBalance?: number;
  firstName?: string;
  id?: number;
  lastName?: string;
  maternityBalance?: number;
  phone?: string;
  poste?: string;
  salary?: number;
  sickBalance?: number;
  unpaidBalance?: number;
  userAccount?: User;
}
