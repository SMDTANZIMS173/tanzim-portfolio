import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactItem } from '../../../core/models/contact.model';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {
  @Input() item!: ContactItem;
}
