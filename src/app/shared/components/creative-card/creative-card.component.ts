import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativeItem } from '../../../core/models/creative.model';

@Component({
  selector: 'app-creative-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creative-card.component.html',
  styleUrls: ['./creative-card.component.scss']
})
export class CreativeCardComponent {
  @Input() item!: CreativeItem;
}
