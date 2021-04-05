import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/pages/index/index.component';

import { MessageInfoComponent } from './components/messages/message-info/message-info.component';
import { MessageWarningComponent } from './components/messages/message-warning/message-warning.component';
import { EditComponent } from './components/pages/person/person.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog.component';
import { CustomMaterialModule } from './custom-material/custom-material.modules';
import { PersonPhoneService } from './services/person-phone.service';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'create',
    component: EditComponent
  },
  {
    path: 'edit/:bid/:number/:tid',
    component: EditComponent
  }  
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditComponent,
    MessageInfoComponent,
    MessageWarningComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  entryComponents:[ConfirmDialogComponent],
  providers: [PersonPhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
