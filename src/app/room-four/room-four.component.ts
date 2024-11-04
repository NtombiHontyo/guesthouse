import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-four',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,RouterLink,
    NgFor,],
  templateUrl: './room-four.component.html',
  styleUrl: './room-four.component.css'
})
export class RoomFourComponent {
  pictures = [
    {name: 'RoomFour.jpg'},
    {name: 'tableFour.jpg'},
    {name: 'bathFour.jpg'}
  ]
}
