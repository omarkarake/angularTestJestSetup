import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // exact equality
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  // Object testing
  it('Object value', () => {
    const data = { name: 'omarion' };
    expect(data).toEqual({ name: 'omarion' });
  });

  // Truthiness
  it('null', () => {
    const n = null;
    // expect(n).not.toBeNull();
    expect(n).toBeNull();
    // expect(n).toBeDefined();
    // expect(n).toBeUndefined();
    // expect(n).toBeTruthy();
    // expect(n).toBeFalsy();
  });

  // for floating numbers
  it('adding floating numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
    expect(value).toBeGreaterThan(0.2);
    expect(value).toBeLessThan(0.4);
  });

  // strings
  it('there is no D in techops', () => {
    expect('techopsworld').not.toMatch(/D/);
  });

  // strings
  it('there is "ops" in techopsworld', () => {
    expect('techopsworld').toMatch(/ops/);
  });

  it('the shopping list has milk on it', () => {
    const shoppingList = [
      'diapers',
      'kleenes',
      'trashbags',
      'paper towels',
      'milk',
    ];
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  //exceptions
  it('compiling android goes as expected', () => {
    expect(() => component.compilerAndroidCode()).toThrow();
    expect(() => component.compilerAndroidCode()).toThrow(Error);

    //you can also use the exact error message or a regex
    expect(() => component.compilerAndroidCode()).toThrow(
      'you are using old angular'
    );
    // expect(() => component.compilerAndroidCode()).toThrow(/Angular/);
  });
});
