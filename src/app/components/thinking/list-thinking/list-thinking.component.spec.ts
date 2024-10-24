import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThinkingComponent } from './list-thinking.component';

describe('ListThinkingComponent', () => {
  let component: ListThinkingComponent;
  let fixture: ComponentFixture<ListThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListThinkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
