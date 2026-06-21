import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Renders one of the inline social SVG glyphs by name. */
@Component({
  selector: 'app-social-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './social-icon.html',
})
export class SocialIcon {
  readonly name = input.required<'email' | 'github' | 'linkedin'>();
}
