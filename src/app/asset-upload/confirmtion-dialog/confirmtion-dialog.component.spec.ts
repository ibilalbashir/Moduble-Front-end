import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmtionDialogComponent } from './confirmtion-dialog.component';

describe('ConfirmtionDialogComponent', () => {
  let component: ConfirmtionDialogComponent;
  let fixture: ComponentFixture<ConfirmtionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmtionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmtionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
