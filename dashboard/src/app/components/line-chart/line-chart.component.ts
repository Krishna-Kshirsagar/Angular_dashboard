import { Component, Input, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-line-chart',
  standalone: false,
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  @Input() line_data: any[] = [];

  chart_data: any;
  ngOnInit(): void {
    this.chart_data = this.line_data;
  }

  view: [number, number] = [700, 400];

  colorScheme: Color = {
    domain: ['#1E88E5', '#D81B60', '#FFC107', '#8E24AA'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'customScheme',
  };
}
