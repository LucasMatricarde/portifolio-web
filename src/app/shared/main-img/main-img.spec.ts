import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImg } from './main-img';

describe('MainImg', () => {
  let component: MainImg;
  let fixture: ComponentFixture<MainImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
