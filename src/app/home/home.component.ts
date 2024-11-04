import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,
    NgFor,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [NgbCarouselConfig],
})
export class HomeComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = [
    {name: 'Exterior.jpg' ,heading: 'Your Journey Begins Here', caption: 'Start your adventure with a stay that’s as inspiring as your destination.'},
    {name: 'RoomOne.jpg',heading: 'The Perfect Place to Pause', caption: 'Take a break from your journey and recharge in our welcoming, restful space.'},
    {name: 'PictureThree.jpg',heading: 'Charming Stays, Lasting Memories',  caption:'Create unforgettable moments in a place where every detail is crafted for your pleasure.'},
  ];
  features = [
    {picture: 'wifi-solid.svg', heading: 'Free Wifi', desc: 'At Luyana Guesthouse, we understand the importance of staying connected, whether you’re here for work or leisure. That’s why we offer complimentary high-speed Wi-Fi throughout the property. '},
    {picture: 'tv-solid.svg', heading: 'Widescreen TV', desc: 'Each of our rooms is equipped with a state-of-the-art smart TV, offering you a world of entertainment right from the comfort of your bed.'},
    {picture: 'temperature.svg', heading: 'Tempreture Control', desc: 'Each of our rooms is equipped with modern air conditioning, allowing you to create the perfect climate no matter the weather outside. Whether you need a cool breeze to escape the summer heat or a warm, cozy atmosphere during cooler months'},
  ]
  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
  rooms = [
    {name: 'RoomOne.jpg', heading: 'Room One', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/one'},
    {name: 'RoomTwo.jpg', heading: 'Room Two', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/two'},
    {name: 'RoomThree.jpg', heading: 'Room Three', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/three'}
   ]
}
