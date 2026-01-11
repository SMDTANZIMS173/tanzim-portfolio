import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreativeCardComponent } from '../../shared/components/creative-card/creative-card.component';
import { CREATIVE_ITEMS } from '../../core/services/creative.data';

@Component({
  selector: 'app-creative',
  standalone: true,
  imports: [CommonModule, CreativeCardComponent],
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.scss']
})
export class CreativeComponent {
  items = CREATIVE_ITEMS;
}

