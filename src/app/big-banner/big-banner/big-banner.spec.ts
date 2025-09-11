import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBanner } from './big-banner';

describe('BigBanner', () => {
  let component: BigBanner;
  let fixture: ComponentFixture<BigBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
