import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AWARDS, EDUCATION } from './data/portfolio.data';
import { About } from './components/about/about';
import { AwardGrid } from './components/award-grid/award-grid';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { IconDefs } from './components/icon-defs/icon-defs';
import { Nav } from './components/nav/nav';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconDefs,
    Nav,
    Hero,
    About,
    Projects,
    Experience,
    Skills,
    AwardGrid,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {
  protected readonly awards = AWARDS;
  protected readonly education = EDUCATION;
}
