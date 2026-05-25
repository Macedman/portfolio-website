import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
import { PROJECTS } from '../../../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = PROJECTS;
}
