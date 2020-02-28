import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsexamComponent } from './nodejsexam.component';

describe('NodejsexamComponent', () => {
  let component: NodejsexamComponent;
  let fixture: ComponentFixture<NodejsexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodejsexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
