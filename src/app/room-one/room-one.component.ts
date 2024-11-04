import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-one',
  standalone: true,
  imports: [NgbModule,
    NgFor, RouterLink,
    NgbCarouselModule,
    NgFor,],
  templateUrl: './room-one.component.html',
  styleUrl: './room-one.component.css'
})
export class RoomOneComponent {
  pictures = [
    {name: 'RoomOne.jpg'},
    {name: 'tableOne.jpg'},
    {name: 'bathOne.jpg'}
  ]
}
