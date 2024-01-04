/* tslint:disable */
/* eslint-disable */
import { EntityModelEmployee } from '../models/entity-model-employee';
import { Links } from '../models/links';
export interface CollectionModelEntityModelEmployee {
  '_embedded'?: {
'employeeList'?: Array<EntityModelEmployee>;
};
  '_links'?: Links;
}
