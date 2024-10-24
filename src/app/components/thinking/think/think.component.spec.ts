import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkComponent } from './think.component';

describe('ThinkComponent', () => {
  let component: ThinkComponent;
  let fixture: ComponentFixture<ThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
