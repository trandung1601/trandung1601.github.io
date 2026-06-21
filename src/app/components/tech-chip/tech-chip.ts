import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TechChip as TechChipModel } from '../../models/portfolio.models';

/** A single technology chip, optionally prefixed with a devicon or SVG symbol. */
@Component({
  selector: 'app-tech-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tech-chip.html',
})
export class TechChip {
  readonly chip = input.required<TechChipModel>();
}
