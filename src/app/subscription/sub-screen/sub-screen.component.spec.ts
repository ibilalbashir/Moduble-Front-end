import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubScreenComponent } from './sub-screen.component';

describe('SubScreenComponent', () => {
  let component: SubScreenComponent;
  let fixture: ComponentFixture<SubScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
