import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselModule, NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-three',
  standalone: true,
  imports: [NgbModule,
    NgbCarouselModule,RouterLink,
    NgFor,],
  templateUrl: './room-three.component.html',
  styleUrl: './room-three.component.css'
})
export class RoomThreeComponent {
  pictures = [
    {name: 'RoomThree.jpg'},
    {name: 'tableThreee.jpg'},
    {name: 'bathThree.jpg'}
  ]
}
