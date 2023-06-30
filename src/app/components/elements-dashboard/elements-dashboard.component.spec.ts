import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsDashboardComponent } from './elements-dashboard.component';

describe('ElementsDashboardComponent', () => {
  let component: ElementsDashboardComponent;
  let fixture: ComponentFixture<ElementsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
