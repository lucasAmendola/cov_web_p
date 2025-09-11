import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgsComponent } from './bgs-component';

describe('BgsComponent', () => {
  let component: BgsComponent;
  let fixture: ComponentFixture<BgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
