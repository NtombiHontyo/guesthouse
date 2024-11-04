import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-six',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,RouterLink,
    NgFor,],
  templateUrl: './room-six.component.html',
  styleUrl: './room-six.component.css'
})
export class RoomSixComponent {
  pictures = [
    {name: 'RoomSix.jpg'},
    {name: 'tableSix.jpg'},
    {name: 'bathSix.jpg'}
  ]
}
