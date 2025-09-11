import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisSectionComponent } from './lis-section-component';

describe('LisSectionComponent', () => {
  let component: LisSectionComponent;
  let fixture: ComponentFixture<LisSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
