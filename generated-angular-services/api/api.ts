export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './employeeControllerImpl.service';
import { EmployeeControllerImplService } from './employeeControllerImpl.service';
export const APIS = [AuthControllerService, EmployeeControllerImplService];
