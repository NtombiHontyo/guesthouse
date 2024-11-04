import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { ContactformComponent } from './contactform/contactform.component';
import { RoomOneComponent } from './room-one/room-one.component';
import { RoomTwoComponent } from './room-two/room-two.component';
import { RoomThreeComponent } from './room-three/room-three.component';
import { RoomFourComponent } from './room-four/room-four.component';
import { RoomFiveComponent } from './room-five/room-five.component';
import { RoomSixComponent } from './room-six/room-six.component';
import { RoomSevenComponent } from './room-seven/room-seven.component';
import { GallerymainComponent } from './gallerymain/gallery.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '\home',
        pathMatch: 'full'
    },
    {
        component: HomeComponent,
        path: 'home'
    },
    {
        component: AboutComponent,
        path: 'about'
    },
    {
        component: RoomsComponent,
        path: 'rooms'
    },
    {
        component: GallerymainComponent,
        path: 'gallery'
    },
    {
        component: ContactsComponent,
        path: 'contacts'
    },
    {
        component: ContactformComponent,
        path: 'form'
    },
    {
        component: RoomOneComponent,
        path: 'one'
    },
    {
        component: RoomTwoComponent,
        path: 'two'
    },
    {
        component: RoomThreeComponent,
        path: 'three'
    },
    {
        component: RoomFourComponent,
        path: 'four'
    },
    {
        component: RoomFiveComponent,
        path: 'five'
    },
    {
        component: RoomSixComponent,
        path: 'six'
    },
    {
        component: RoomSevenComponent,
        path: 'seven'
    },
    {
        component: ErrorComponent,
        path: '**'
    }
];
