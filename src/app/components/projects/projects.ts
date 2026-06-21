import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { TechChip } from '../tech-chip/tech-chip';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, TechChip],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
