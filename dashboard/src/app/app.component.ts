import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  data: any[] = [];
  chartType: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getMetrics().subscribe({
      next: (mockData: any) => {
        this.data = mockData;
      },
      error: (err) => {
        console.error('Error loading data:', err);
      },
    });
  }

  chartUpdate() {
    this.loadData();
  }
}
