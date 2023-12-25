/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  id?: number;
  password?: string;
  resetToken?: string;
  resetTokenExpiryDate?: string;
  role?: 'ADMIN' | 'USER';
  username?: string;
}
