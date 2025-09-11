import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialSection1 } from './especial-section-1';

describe('EspecialSection1', () => {
  let component: EspecialSection1;
  let fixture: ComponentFixture<EspecialSection1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialSection1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialSection1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
