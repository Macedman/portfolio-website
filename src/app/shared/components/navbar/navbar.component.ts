import { Component, signal } from '@angular/core';
import {
  LucideAngularModule,
  ArrowDownToLine,
  Menu,
  X
} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly download = ArrowDownToLine;
  readonly Menu = Menu;
  readonly X = X;

  readonly menuOpen = signal(false);

  readonly navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
