import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressjsexamComponent } from './expressjsexam.component';

describe('ExpressjsexamComponent', () => {
  let component: ExpressjsexamComponent;
  let fixture: ComponentFixture<ExpressjsexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressjsexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressjsexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
