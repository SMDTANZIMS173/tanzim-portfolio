import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from '../../shared/components/skill-card/skill-card.component';
import { ExperienceItemComponent } from '../../shared/components/experience-item/experience-item.component';
import { SKILLS } from '../../core/services/skills.data';
import { EXPERIENCES } from '../../core/services/experience.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    SkillCardComponent,
    ExperienceItemComponent
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = SKILLS;
  experiences = EXPERIENCES;
}
