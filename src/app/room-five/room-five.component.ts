import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-five',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,RouterLink,
    NgFor,],
  templateUrl: './room-five.component.html',
  styleUrl: './room-five.component.css'
})
export class RoomFiveComponent {
  pictures = [
    {name: 'RoomFive.jpg'},
    {name: 'tableFive.jpg'},
    {name: 'bathFive.jpg'}
  ]
}
