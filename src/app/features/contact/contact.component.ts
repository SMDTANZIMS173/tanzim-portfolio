import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactItemComponent } from '../../shared/components/contact-item/contact-item.component';
import { CONTACT_ITEMS } from '../../core/services/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contacts = CONTACT_ITEMS;
}

