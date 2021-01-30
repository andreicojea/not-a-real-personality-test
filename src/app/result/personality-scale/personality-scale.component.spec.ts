import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityScaleComponent } from './personality-scale.component';

xdescribe('PersonalityScaleComponent', () => {
  let component: PersonalityScaleComponent;
  let fixture: ComponentFixture<PersonalityScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalityScaleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
