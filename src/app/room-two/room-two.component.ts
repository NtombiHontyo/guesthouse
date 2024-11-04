import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-two',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,RouterLink,
    NgFor,],
  templateUrl: './room-two.component.html',
  styleUrl: './room-two.component.css'
})
export class RoomTwoComponent {
  pictures = [
    {name: 'RoomTwo.jpg'},
    {name: 'tableTwo.jpg'},
    {name: 'bathTwo.jpg'}
  ]
}
