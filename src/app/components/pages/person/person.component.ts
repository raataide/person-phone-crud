import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageListener } from 'src/app/listeners/message.listener';
import { PersonPhoneService } from 'src/app/services/person-phone.service';

@Component({
    selector: 'app-edit',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class EditComponent implements OnInit {
    isAddMode: boolean;

    title = 'Update Person Phone';
    angForm: FormGroup;
    personPhone: any = {};
    constructor(private route: ActivatedRoute,
        private router: Router,
        private service: PersonPhoneService,
        private fb: FormBuilder,
        private listener: MessageListener) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            businessEntityID: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            phoneNumberTypeID: ['', Validators.required]
        });
    }

    savePerson(bid, number, tid) {
        this.route.params.subscribe(params => {
            if (this.isAddMode) {
                this.service.addPeronPhone(bid, number, tid).subscribe(res => {
                    this.router.navigate(['']);
                    this.listener.infoType = "add";
                    this.listener.messageSubject.next(res);
                }, error => {
                    this.router.navigate(['']);
                });
            } else {
            this.service.updatePersonPhone(params['bid'],
                params['number'], params['tid'], bid, number, tid).subscribe(res => {
                    this.listener.infoType = "updated";
                    this.listener.messageSubject.next(res);
                    this.router.navigate(['']);
                });
            }
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.personPhone.businessEntityID = params["bid"];
            this.personPhone.phoneNumber = params["number"];
            this.personPhone.phoneNumberTypeID = params["tid"];
        });

        this.isAddMode = !this.personPhone.businessEntityID;

    }
}