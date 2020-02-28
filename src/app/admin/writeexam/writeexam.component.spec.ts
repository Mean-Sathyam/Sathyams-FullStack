import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteexamComponent } from './writeexam.component';

describe('WriteexamComponent', () => {
  let component: WriteexamComponent;
  let fixture: ComponentFixture<WriteexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
