import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbexamComponent } from './mongodbexam.component';

describe('MongodbexamComponent', () => {
  let component: MongodbexamComponent;
  let fixture: ComponentFixture<MongodbexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodbexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodbexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
