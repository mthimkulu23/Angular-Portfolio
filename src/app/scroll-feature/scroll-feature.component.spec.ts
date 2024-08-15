import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollFeatureComponent } from './scroll-feature.component';

describe('ScrollFeatureComponent', () => {
  let component: ScrollFeatureComponent;
  let fixture: ComponentFixture<ScrollFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
