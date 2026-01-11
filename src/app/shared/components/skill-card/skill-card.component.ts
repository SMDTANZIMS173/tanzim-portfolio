import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup } from '../../../core/models/skill.model';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() group!: SkillGroup;
}
