import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponentt } from '../gallery/gallery.component';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponentt],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GallerymainComponent {
  title = 'gallery-app';

  data: Item[] = [
    {
      imageSrc: 'assets/PictureThree.jpg',
      imageAlt: 'Desk'
    },
    {
      imageSrc: 'assets/RoomOne.jpg',
      imageAlt: 'Room one'
    },
    {
      imageSrc: 'assets/exteriorZO.jpg',
      imageAlt: 'Exterior'
    },
    {
      imageSrc: 'assets/brOne.jpg',
      imageAlt: 'bathroom'
    },
    {
      imageSrc: 'assets/table.jpg',
      imageAlt: 'Desk'
    },
    {
      imageSrc: 'assets/RoomTwo.jpg',
      imageAlt: 'Room'
    },
    {
      imageSrc: 'assets/Exterior.jpg',
      imageAlt: 'Exterior'
    },
    {
      imageSrc: 'assets/RoomThree.jpg',
      imageAlt: 'Room'
    },
    {
      imageSrc: 'assets/braaiareaa.webp',
      imageAlt: 'Braai area'
    },
    {
      imageSrc: 'assets/tablethree.jpg',
      imageAlt: 'Table'
    },
    {
      imageSrc: 'assets/brTwo.jpg',
      imageAlt: 'Bathroom'
    },
    {
      imageSrc: 'assets/RoomFour.jpg',
      imageAlt: 'Room"'
    },
  ];
}

