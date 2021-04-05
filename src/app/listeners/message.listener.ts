import { Subject } from "rxjs";
import { PersonPhoneListResponse } from "../models/person-phone-list-response.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class MessageListener{
    infoType:string;
    messageSubject = new Subject<PersonPhoneListResponse>();
    messageState = this.messageSubject.asObservable();
}