/**
 * Imports Component and OnInit from Angular core library
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Add any properties or methods needed for the header component here
  title = 'My Application Header';
}
