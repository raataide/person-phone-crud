import { Component, OnInit } from '@angular/core';
import { PersonPhone } from '../../../models/person-phone.model';
import { PersonPhoneListResponse } from '../../../models/person-phone-list-response.model';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../../dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { PersonPhoneService } from 'src/app/services/person-phone.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    personPhones: PersonPhone[];
    constructor(private service: PersonPhoneService, public dialog: MatDialog) { }

    ngOnInit() {        
        this.service
            .getAllPersonPhone()
            .subscribe((content: PersonPhoneListResponse) => {                
                const { personPhoneObjects } = content;
                this.personPhones = personPhoneObjects;
            });
    }

    delete(bid, number, tid) {

        const message = `Are you sure you want to do this?`;
        const dialogData = new ConfirmDialogModel("Confirm Action", message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.service.deletePersonPhone(bid, number, tid).subscribe(res => {
                    const index = this.personPhones.findIndex(pp => {
                        return (pp.businessEntityID == bid &&
                            pp.phoneNumber == number &&
                            pp.phoneNumberTypeID == tid);
                    });                    
                    this.personPhones.splice(index, 1);
                });
            }
        });
    }
}