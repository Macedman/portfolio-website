import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Menu
} from 'lucide-angular';


@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Menu = Menu;

}
