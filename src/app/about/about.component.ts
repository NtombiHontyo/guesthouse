import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, Validators} from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    NgbModule,
    NgbCarouselModule,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [NgbCarouselConfig],
})
export class AboutComponent  {
 rooms = [
  {name: 'RoomOne.jpg', heading: 'Room One', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/one'},
  {name: 'RoomTwo.jpg', heading: 'Room Two', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/two'},
  {name: 'RoomThree.jpg', heading: 'Room Three', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/three'}
 ]
 showNavigationArrows = false;
 showNavigationIndicators = false;
 reviews = [
  {heading: 'Great stay', desc: 'The owner is very friendly and welcomed us when we arrived. The rooms were newly built, and everything was spotless. I would highly recommend this guesthouse to everyone. We did not have any problems.', name: 'Anonymous'},
  {heading: 'Best hostess', desc: 'The friendliness and the cleanness of the place', name: 'Anonymous'},
  {heading: 'Absolutely Wonderful Stay!"', desc: 'The entire property is serene and well-maintained, with lovely spots to relax, including a cozy sunroom and a gorgeous garden. The staff went above and beyond to ensure I had everything I needed, making my stay truly memorable. I highly recommend Luyana Guesthouse to anyone looking for a peaceful, comfortable, and luxurious place to stay. I will definitely be returning on my next visit to Kroonstad!', name: 'Anonymous'},
];
features = [
  {picture: 'wifi-solid.svg', heading: 'Free Wifi', desc: 'At Luyana Guesthouse, we understand the importance of staying connected, whether you’re here for work or leisure. That’s why we offer complimentary high-speed Wi-Fi throughout the property. '},
  {picture: 'tv-solid.svg', heading: 'Widescreen TV', desc: 'Each of our rooms is equipped with a state-of-the-art smart TV, offering you a world of entertainment right from the comfort of your bed.'},
  {picture: 'temperature.svg', heading: 'Tempreture Control', desc: 'Each of our rooms is equipped with modern air conditioning, allowing you to create the perfect climate no matter the weather outside. Whether you need a cool breeze to escape the summer heat or a warm, cozy atmosphere during cooler months'},
];
constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
  config.showNavigationArrows = true;
  config.showNavigationIndicators = true;
}
}
