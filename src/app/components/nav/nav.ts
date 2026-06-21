import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_LINKS, SOCIAL_LINKS } from '../../data/portfolio.data';
import { SocialIcon } from '../social-icon/social-icon';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialIcon],
  templateUrl: './nav.html',
})
export class Nav {
  protected readonly links = NAV_LINKS;
  protected readonly socials = SOCIAL_LINKS;
}
