import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail } from 'lucide-angular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  readonly github = Github;
  readonly linkedIn = Linkedin;
  readonly email = Mail;

  constructor(private toastr: ToastrService) { }

  copyEmail() {
    const email = 'ecmaceda17@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.toastr.info('Email copied to clipboard!', '', {
        timeOut: 2000
      });
    }).catch(() => {
      this.toastr.error('Failed to copy email', 'Error');
    });
  }

}
