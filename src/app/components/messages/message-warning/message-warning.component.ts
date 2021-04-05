import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-warning',
  templateUrl: './message-warning.component.html',
  styleUrls: ['./message-warning.component.css']
})
export class MessageWarningComponent implements OnInit {
  
  @Input() showMessage = false;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

  demiss(){
    this.showMessage = false;
  }
}
