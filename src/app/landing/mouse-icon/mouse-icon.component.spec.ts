import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseIconComponent } from './mouse-icon.component';

describe('MouseIconComponent', () => {
  let component: MouseIconComponent;
  let fixture: ComponentFixture<MouseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
