import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NitinComponent } from './nitin.component';

describe('NitinComponent', () => {
  let component: NitinComponent;
  let fixture: ComponentFixture<NitinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NitinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NitinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
