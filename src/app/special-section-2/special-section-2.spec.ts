import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSection2 } from './special-section-2';

describe('SpecialSection2', () => {
  let component: SpecialSection2;
  let fixture: ComponentFixture<SpecialSection2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialSection2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialSection2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
