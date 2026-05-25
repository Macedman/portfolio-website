import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly github = Github;
  readonly linkedIn = Linkedin;

  constructor(private toastr: ToastrService) {}

  copyEmail(): void {
    const email = 'ecmaceda17@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.toastr.info('Email copied to clipboard!', '', { timeOut: 2000 });
    }).catch(() => {
      this.toastr.error('Failed to copy email', 'Error');
    });
  }
}
