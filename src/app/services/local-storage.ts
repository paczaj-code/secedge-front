import { Injectable } from '@angular/core';

interface StorageService<T = string> {
  getItem(key: string): T | null;

  setItem(key: string, value: T): void;

  removeItem(key: string): void;

  clear(): void;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorage implements StorageService<string> {
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
