import { Component } from '@angular/core';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public contactFormService: ContactFormService) {}
}
