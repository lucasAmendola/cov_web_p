import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeterinariosSection } from './veterinarios-section';

11111

describe('VeterinariosSection', () => {
  let component: VeterinariosSection;
  let fixture: ComponentFixture<VeterinariosSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinariosSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeterinariosSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
