import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkitComponent } from './ankit.component';

describe('AnkitComponent', () => {
  let component: AnkitComponent;
  let fixture: ComponentFixture<AnkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
