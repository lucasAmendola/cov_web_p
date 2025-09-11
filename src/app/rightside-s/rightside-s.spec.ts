import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsideS } from './rightside-s';

describe('RightsideS', () => {
  let component: RightsideS;
  let fixture: ComponentFixture<RightsideS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightsideS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightsideS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
