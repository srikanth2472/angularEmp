import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmComponent } from './view-em.component';

describe('ViewEmComponent', () => {
  let component: ViewEmComponent;
  let fixture: ComponentFixture<ViewEmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmComponent]
    });
    fixture = TestBed.createComponent(ViewEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
