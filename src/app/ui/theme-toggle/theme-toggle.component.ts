import { Component, inject, OnInit, signal } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { Button } from 'primeng/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeMoonSlowWind, hugeSun03 } from '@ng-icons/huge-icons';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [Button, NgIcon],
  templateUrl: './theme-toggle.component.html',
  viewProviders: [provideIcons({ hugeSun03, hugeMoonSlowWind })],
})
export class ThemeToggleComponent implements OnInit {
  private static readonly DARK: Theme = 'dark';
  private static readonly LIGHT: Theme = 'light';
  private static readonly STORAGE_KEY = 'theme';

  theme = signal<Theme>(ThemeToggleComponent.DARK);
  localStorageService = inject(LocalStorageService);

  ngOnInit() {
    const savedTheme = this.localStorageService.getItem(
      ThemeToggleComponent.STORAGE_KEY,
    ) as Theme | null;
    const initialTheme = savedTheme || this.getSystemTheme();
    this.setTheme(initialTheme);
  }

  onThemeSwitchChange() {
    const toggledTheme = this.toggleTheme();
    this.setTheme(toggledTheme);
  }

  private toggleTheme(): Theme {
    return this.theme() === ThemeToggleComponent.DARK
      ? ThemeToggleComponent.LIGHT
      : ThemeToggleComponent.DARK;
  }

  private getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ThemeToggleComponent.DARK
      : ThemeToggleComponent.LIGHT;
  }

  private setTheme(theme: Theme) {
    this.theme.set(theme);
    this.localStorageService.setItem(ThemeToggleComponent.STORAGE_KEY, theme);
    document.documentElement.className = `my-app-${theme}`;
  }
}
