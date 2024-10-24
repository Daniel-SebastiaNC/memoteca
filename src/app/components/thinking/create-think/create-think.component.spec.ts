import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThinkComponent } from './create-think.component';

describe('CreateThinkComponent', () => {
  let component: CreateThinkComponent;
  let fixture: ComponentFixture<CreateThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateThinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
