import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTasksComponent } from './todos-tasks.component';

describe('TodosTasksComponent', () => {
  let component: TodosTasksComponent;
  let fixture: ComponentFixture<TodosTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
