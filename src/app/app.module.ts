import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { RouterOutlet, RouterLink } from "@angular/router";


@NgModule({
    declarations: [
        // AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        RouterOutlet,
        RouterLink
    ],
    providers: [
        provideAnimationsAsync()
    ],
    // bootstrap: [AppComponent]
})
export class AppModule { }
