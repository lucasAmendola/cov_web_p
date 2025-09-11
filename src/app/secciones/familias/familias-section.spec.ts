import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasSection } from './familias-section';

describe('FamiliasSection', () => {
  let component: FamiliasSection;
  let fixture: ComponentFixture<FamiliasSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiliasSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliasSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
