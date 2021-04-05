import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageListener } from './listeners/message.listener';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {
  title = 'app';
  messageListenerSubscription: Subscription;
  showMessageInfo: boolean;
  showMessageWarning: boolean;
  messageInfo: string;
  messageWarning: string;

  constructor(private listener: MessageListener) {
    this.messageListenerSubscription = listener.messageState.subscribe((subject) => {            
      if(subject.success){
            this.showMessageInfo = true;
            this.messageInfo = `Phone Number ${listener.infoType} successful`;
        }
        else{
            this.showMessageInfo = true;
            this.messageInfo = `Phone Number not ${listener.infoType}`;
        }
    });
  }

  ngOnDestroy() {
    this.messageListenerSubscription.unsubscribe();
  }
}
