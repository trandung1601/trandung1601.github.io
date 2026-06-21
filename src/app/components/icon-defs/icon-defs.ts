import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Hidden SVG sprite sheet holding the custom line-icon <symbol>s that skill
 * chips reference via <use href="#ci-...">.
 */
@Component({
  selector: 'app-icon-defs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon-defs.html',
})
export class IconDefs {}
