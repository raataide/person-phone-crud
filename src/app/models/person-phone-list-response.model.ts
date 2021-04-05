import {PersonPhone} from '../models/person-phone.model'

export interface PersonPhoneListResponse{
    success: boolean;
    errors: object[];
    personPhoneObjects: PersonPhone[];
}