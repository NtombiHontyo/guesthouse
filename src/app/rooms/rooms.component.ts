import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  rooms = [
    {name: 'RoomOne.jpg', heading: 'Room One', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/one'},
    {name: 'RoomTwo.jpg', heading: 'Room Two', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/two'},
    {name: 'RoomThree.jpg', heading: 'Room Three', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/three'},
    {name: 'RoomFour.jpg', heading: 'Room Four', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/four'},
    {name: 'RoomFive.jpg', heading: 'Room Five', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/five'},
    {name: 'RoomSix.jpg', heading: 'Room Six', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/six'},
    {name: 'RoomSeven.jpg', heading: 'Room Seven', image_one: 'bed-solid.svg', desc_one: '1 Bed', image_two: 'tv-solid.svg', desc_two: 'Smart TV', image_three: 'wifi-solid.svg',desc_three: 'Wi-Fi', price: 'R1000', button: 'BOOK A ROOM', path: '/seven'}
  ]
}
