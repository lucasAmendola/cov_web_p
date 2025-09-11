import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplySection } from './simply-section';

describe('SimplySection', () => {
  let component: SimplySection;
  let fixture: ComponentFixture<SimplySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
