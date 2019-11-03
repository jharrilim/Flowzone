import { Role } from '../role/role.model';

export interface User {
    id:                  number;
    username:            string;
    email:               string;
    provider:            string;
    confirmed:           boolean;
    blocked:             boolean | null;
    role:                Role;
    created_at:          string;
    updated_at:          string;
    compositionsCreated: any[];
}
