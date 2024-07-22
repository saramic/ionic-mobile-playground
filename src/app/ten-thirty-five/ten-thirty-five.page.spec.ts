import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenThirtyFivePage } from './ten-thirty-five.page';

describe('TenThirtyFivePage', () => {
  let component: TenThirtyFivePage;
  let fixture: ComponentFixture<TenThirtyFivePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TenThirtyFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
