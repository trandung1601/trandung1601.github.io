import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { TechChip } from '../tech-chip/tech-chip';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, TechChip],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
