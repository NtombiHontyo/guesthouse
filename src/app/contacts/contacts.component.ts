import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, Validators} from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ContactformComponent } from '../contactform/contactform.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ContactformComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  ClientForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('')
  });
  async onSubmit(){
    emailjs.init('psqss1McO9-SvKOxy');
    let response = await emailjs.send("service_1tspolc","template_rbs70nm",{
      from_name: "Client Form",
      fullName: this.ClientForm.value.fullName,
      email: this.ClientForm.value.email,
      subject: this.ClientForm.value.subject,
      message: this.ClientForm.value.message
      });

    alert('Message sent successfully');
    this.ClientForm.reset();
  };
}

