import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonPhoneListResponse } from '../models/person-phone-list-response.model';
import { Observable } from 'rxjs';
import { PersonPhone } from '../models/person-phone.model';

@Injectable({
    providedIn: 'root'
})
export class PersonPhoneService {

    uri: String = 'http://localhost:59730/api/PersonPhone';

    constructor(private http: HttpClient) { }

    addPeronPhone(bid, number, tid): Observable<PersonPhoneListResponse> {
        const obj = {
            businessEntityID: bid,
            phoneNumber: number,
            phoneNumberTypeID: tid
        };
        return this.http
            .post<PersonPhoneListResponse>(`${this.uri}/add`, obj);
    }

    getAllPersonPhone() {
        return this.http
            .get<PersonPhoneListResponse>(`${this.uri}/list`);
    }

    updatePersonPhone(oldBid, oldNumber, oldTid, bid, number, tid) {

        const obj = {            
            "OldPersonPhone":{	
                "businessEntityID": oldBid,
                "phoneNumber": oldNumber,
                "phoneNumberTypeID": oldTid
            },
            "NewPersonPhone":{
                "businessEntityID": bid,
                "phoneNumber": number,
                "phoneNumberTypeID": tid
            }
        };
        return this.http
            .post<PersonPhoneListResponse>(`${this.uri}/update`, obj);
    }

    deletePersonPhone(bid, number, tid) {
        const obj = {
            businessEntityID: bid,
            phoneNumber: number,
            phoneNumberTypeID: tid
        };
        return this
            .http
            .post(`${this.uri}/delete`, obj);
    }
}
