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
  it('null', ()=>{
    const n = null;
    expect(n).not.toBeNull();
    // expect(n).toBeDefined();
    // expect(n).toBeUndefined();
    // expect(n).toBeTruthy();
    // expect(n).toBeFalsy();
  })
});
