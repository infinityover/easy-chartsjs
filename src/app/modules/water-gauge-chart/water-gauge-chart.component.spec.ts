import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterGaugeChartComponent } from './water-gauge-chart.component';

describe('WaterGaugeChartComponent', () => {
  let component: WaterGaugeChartComponent;
  let fixture: ComponentFixture<WaterGaugeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterGaugeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
