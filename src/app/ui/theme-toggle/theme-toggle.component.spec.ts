import { LocalStorageService } from '../../services/local-storage/local-storage.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let mockMatchMedia: jasmine.Spy;

  beforeEach(async () => {
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', [
      'getItem',
      'setItem',
    ]);

    // Mock window.matchMedia
    mockMatchMedia = jasmine.createSpy('matchMedia').and.returnValue({
      matches: false,
      addEventListener: jasmine.createSpy('addEventListener'),
      removeEventListener: jasmine.createSpy('removeEventListener'),
    });

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });

    await TestBed.configureTestingModule({
      imports: [ThemeToggleComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(
      LocalStorageService,
    ) as jasmine.SpyObj<LocalStorageService>;
  });

  afterEach(() => {
    // Wyczyść className po każdym teście
    document.documentElement.className = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default dark theme', () => {
    expect(component.theme()).toBe('dark');
  });

  describe('ngOnInit', () => {
    it('should initialize with theme from localStorage', () => {
      localStorageService.getItem.and.returnValue('light');

      component.ngOnInit();

      expect(localStorageService.getItem).toHaveBeenCalledWith('theme');
      expect(component.theme()).toBe('light');
      expect(document.documentElement.className).toBe('my-app-light');
    });

    it('should initialize with system theme when no saved theme exists', () => {
      localStorageService.getItem.and.returnValue(null);

      mockMatchMedia.and.returnValue({ matches: true });
      component.ngOnInit();
      expect(component.theme()).toBe('dark');
      expect(document.documentElement.className).toBe('my-app-dark');

      mockMatchMedia.and.returnValue({ matches: false });
      component.ngOnInit();
      expect(component.theme()).toBe('light');
      expect(document.documentElement.className).toBe('my-app-light');
    });
  });

  describe('onThemeSwitchChange', () => {
    it('should toggle from dark to light theme', () => {
      component.theme.set('dark');

      component.onThemeSwitchChange();

      expect(component.theme()).toBe('light');
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        'theme',
        'light',
      );
      expect(document.documentElement.className).toBe('my-app-light');
    });

    it('should toggle from light to dark theme', () => {
      component.theme.set('light');

      component.onThemeSwitchChange();

      expect(component.theme()).toBe('dark');
      expect(localStorageService.setItem).toHaveBeenCalledWith('theme', 'dark');
      expect(document.documentElement.className).toBe('my-app-dark');
    });
  });

  describe('toggleTheme', () => {
    it('should return light when current theme is dark', () => {
      component.theme.set('dark');

      const result = (component as any).toggleTheme();

      expect(result).toBe('light');
    });

    it('should return dark when current theme is light', () => {
      component.theme.set('light');

      const result = (component as any).toggleTheme();

      expect(result).toBe('dark');
    });
  });

  describe('getSystemTheme', () => {
    it('should return dark when system prefers dark mode', () => {
      mockMatchMedia.and.returnValue({ matches: true });

      const result = (component as any).getSystemTheme();

      expect(result).toBe('dark');
      expect(mockMatchMedia).toHaveBeenCalledWith(
        '(prefers-color-scheme: dark)',
      );
    });

    it('should return light when system prefers light mode', () => {
      mockMatchMedia.and.returnValue({ matches: false });

      const result = (component as any).getSystemTheme();

      expect(result).toBe('light');
      expect(mockMatchMedia).toHaveBeenCalledWith(
        '(prefers-color-scheme: dark)',
      );
    });
  });

  describe('setTheme', () => {
    it('should set theme signal, save to localStorage and update DOM class', () => {
      (component as any).setTheme('light');

      expect(component.theme()).toBe('light');
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        'theme',
        'light',
      );
      expect(document.documentElement.className).toBe('my-app-light');
    });

    it('should handle dark theme correctly', () => {
      (component as any).setTheme('dark');

      expect(component.theme()).toBe('dark');
      expect(localStorageService.setItem).toHaveBeenCalledWith('theme', 'dark');
      expect(document.documentElement.className).toBe('my-app-dark');
    });
  });

  describe('onThemeSwitchChange', () => {
    it('should toggle theme from dark to light', () => {
      component.theme.set('dark');
      component.onThemeSwitchChange();

      expect(component.theme()).toBe('light');
      expect(localStorageService.setItem).toHaveBeenCalledWith(
        'theme',
        'light',
      );
      expect(document.documentElement.className).toBe('my-app-light');
    });

    it('should toggle theme from light to dark', () => {
      component.theme.set('light');
      component.onThemeSwitchChange();

      expect(component.theme()).toBe('dark');
      expect(localStorageService.setItem).toHaveBeenCalledWith('theme', 'dark');
      expect(document.documentElement.className).toBe('my-app-dark');
    });
  });
});
