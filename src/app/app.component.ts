import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vice_portfolio23';
 


}
