import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NaughtsAndCrossesPage } from './naughts-and-crosses.page';

describe('NaughtsAndCrossesPage', () => {
  let component: NaughtsAndCrossesPage;
  let fixture: ComponentFixture<NaughtsAndCrossesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NaughtsAndCrossesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
