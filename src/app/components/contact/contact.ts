import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { SocialIcon } from '../social-icon/social-icon';

interface ContactLink {
  icon: 'email' | 'github' | 'linkedin';
  href: string;
  ariaLabel: string;
  title: string;
  solid: boolean;
}

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective, SocialIcon],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly socials: ContactLink[] = [
    {
      icon: 'email',
      href: `mailto:${EMAIL}`,
      ariaLabel: `Email ${EMAIL}`,
      title: EMAIL,
      solid: true,
    },
    {
      icon: 'github',
      href: GITHUB_URL,
      ariaLabel: 'GitHub trandung1601',
      title: 'github.com/trandung1601',
      solid: false,
    },
    {
      icon: 'linkedin',
      href: LINKEDIN_URL,
      ariaLabel: 'LinkedIn',
      title: 'linkedin.com/in/dungtrantien-dev',
      solid: false,
    },
  ];
}
