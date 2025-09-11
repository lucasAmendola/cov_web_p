import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBanner } from './small-banner';

describe('SmallBanner', () => {
  let component: SmallBanner;
  let fixture: ComponentFixture<SmallBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
