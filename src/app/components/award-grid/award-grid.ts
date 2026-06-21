import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Award } from '../../models/portfolio.models';
import { RevealDirective } from '../../directives/reveal.directive';

/** Generic section that renders a grid of titled cards — used for Awards and Education. */
@Component({
  selector: 'app-award-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  templateUrl: './award-grid.html',
})
export class AwardGrid {
  readonly sectionId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly heading = input.required<string>();
  readonly items = input.required<Award[]>();
}
