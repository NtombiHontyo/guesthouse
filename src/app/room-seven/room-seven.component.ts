import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-seven',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,RouterLink,
    NgFor,],
  templateUrl: './room-seven.component.html',
  styleUrl: './room-seven.component.css'
})
export class RoomSevenComponent {
  pictures = [
    {name: 'RoomSeven.jpg'},
    {name: 'tableSeven.jpg'},
    {name: 'bathSeven.jpg'}
  ]
}
