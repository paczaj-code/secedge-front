/**
 * Imports Component and OnInit from Angular core library
 */
import { Component } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  imports: [ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // Add any properties or methods needed for the header component here
  title = 'My Application Header';
}
