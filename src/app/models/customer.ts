import { Class } from "./class";
import { Entity } from "./entity";

export interface Customer extends Entity {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number | null;
  address: string;
  weight: number | null;
  height: number | null;
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  zipCode: string;
  active: boolean;
  classes: Class[];
}
