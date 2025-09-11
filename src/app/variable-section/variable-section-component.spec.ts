import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableSectionComponent } from './variable-section-component';

describe('VariableSectionComponent', () => {
  let component: VariableSectionComponent;
  let fixture: ComponentFixture<VariableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
