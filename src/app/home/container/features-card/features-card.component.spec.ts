import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesCardComponent } from './features-card.component';

describe('FeaturesCardComponent', () => {
  let component: FeaturesCardComponent;
  let fixture: ComponentFixture<FeaturesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
