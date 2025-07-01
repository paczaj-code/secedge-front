// local-storage.spec.ts
import { TestBed } from '@angular/core/testing';
import { LocalStorage } from './local-storage';
// import 'zone.js';
import { provideZonelessChangeDetection } from '@angular/core';

describe('LocalStorage', () => {
  let service: LocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(LocalStorage);
    spyOn(localStorage, 'getItem').and.callThrough();
    spyOn(localStorage, 'setItem').and.callThrough();
    spyOn(localStorage, 'removeItem').and.callThrough();
    spyOn(localStorage, 'clear').and.callThrough();
  });

  it('should get an item from local storage', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, value);

    expect(service.getItem(key)).toBe(value);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('should set an item in local storage', () => {
    const key = 'testKey';
    const value = 'testValue';

    service.setItem(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, value);
    expect(localStorage.getItem(key)).toBe(value);
  });

  it('should remove an item from local storage', () => {
    const key = 'testKey';
    const value = 'testValue';
    localStorage.setItem(key, value);

    service.removeItem(key);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    expect(localStorage.getItem(key)).toBeNull();
  });

  it('should clear all items from local storage', () => {
    localStorage.setItem('key1', 'value1');
    localStorage.setItem('key2', 'value2');

    service.clear();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(localStorage.getItem('key1')).toBeNull();
    expect(localStorage.getItem('key2')).toBeNull();
  });
});
