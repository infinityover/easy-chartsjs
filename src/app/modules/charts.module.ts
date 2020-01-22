import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterGaugeChartComponent } from './water-gauge-chart/water-gauge-chart.component';
//import { WaterGaugeChartComponent } from './water-gauge-chart/water-gauge-chart.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WaterGaugeChartComponent],
  exports: [WaterGaugeChartComponent]
})
export class ChartsModule { }
