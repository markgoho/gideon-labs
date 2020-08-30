import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContactMessage } from '../contact-form.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  @Input() message: ContactMessage;
}
