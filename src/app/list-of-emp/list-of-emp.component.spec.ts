import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEmpComponent } from './list-of-emp.component';

describe('ListOfEmpComponent', () => {
  let component: ListOfEmpComponent;
  let fixture: ComponentFixture<ListOfEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfEmpComponent]
    });
    fixture = TestBed.createComponent(ListOfEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
