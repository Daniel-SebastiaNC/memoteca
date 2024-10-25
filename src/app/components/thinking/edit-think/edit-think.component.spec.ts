import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThinkComponent } from './edit-think.component';

describe('EditThinkComponent', () => {
  let component: EditThinkComponent;
  let fixture: ComponentFixture<EditThinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditThinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditThinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
