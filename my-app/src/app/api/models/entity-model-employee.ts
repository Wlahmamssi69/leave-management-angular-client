/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
import { User } from '../models/user';
export interface EntityModelEmployee {
  '_links'?: Links;
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
