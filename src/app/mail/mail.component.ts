import { Component, OnInit } from '@angular/core';
import { Email } from '../email'
import { EmailService } from '../email.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  message = '';
  email: Email = {
    to: null,
    message: null,
    subject: null
  };

  constructor(private emailService: EmailService ) { }

  ngOnInit() {
  }

  send(): void {
    this.emailService.send(this.email).subscribe(() => {
      this.message = 'Email has been sent.';
    });
  }


}
