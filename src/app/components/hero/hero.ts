import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMAIL, GITHUB_URL, STATS } from '../../data/portfolio.data';
import { SocialIcon } from '../social-icon/social-icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialIcon],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly stats = STATS;
  protected readonly mailto = `mailto:${EMAIL}`;
  protected readonly githubUrl = GITHUB_URL;
}
