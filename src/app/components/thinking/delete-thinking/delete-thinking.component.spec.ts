import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThinkingComponent } from './delete-thinking.component';

describe('DeleteThinkingComponent', () => {
  let component: DeleteThinkingComponent;
  let fixture: ComponentFixture<DeleteThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteThinkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
