import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CinemasPage } from './cinemas.page';

describe('CinemasPage', () => {
  let component: CinemasPage;
  let fixture: ComponentFixture<CinemasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CinemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
