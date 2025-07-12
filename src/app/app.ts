import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { ButtonModule } from 'primeng/button';
import { ThemeToggleComponent } from './ui/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ButtonModule, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'secedge-front';
}
