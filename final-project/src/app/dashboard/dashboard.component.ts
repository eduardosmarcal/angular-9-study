import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.init();
    });
  }

  /**
   * Initialize the Chart API with a delay of 1 second,
   * which allows the integration of the API with Angular.
   *
   * @return {void}
   */
  init(): void {
    if (typeof google !== 'undefined') {
      google.charts.load('current', {'packages': ['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.showCharts());
      }, 1000);
    }
  }

  /**
   * Call all the methods to generate the charts.
   *
   * @return {void}
   */
  showCharts(): void {
    this.showPieChart();
    this.show3dPieChart();
    this.showBarChart();
    this.showLineChart();
    this.showColumnChart();
    this.showDonutChart();
  }

  /**
   * Show Pie Chart.
   *
   * @return {void}
   */
  showPieChart(): void {
    const element = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(element);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  /**
   * Show 3d Pie Chart.
   *
   * @return {void}
   */
  show3dPieChart(): void {
    const element = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(element);

    chart.draw(this.getDataTable(), {
      ...this.getOptions(),
      'is3D': true
    });
  }

  /**
   * Show Bar Chart.
   *
   * @return {void}
   */
  showBarChart(): void {
    const element = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(element);

    chart.draw(this.getDataTable(), {
      ...this.getOptions(),
      'legend': 'bottom'
    });
  }

  /**
   * Show Line Chart.
   *
   * @return {void}
   */
  showLineChart(): void {
    const element = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(element);

    chart.draw(this.getDataTable(), {
      ...this.getOptions(),
      'legend': 'bottom'
    });
  }

  /**
   * Show Column Chart.
   *
   * @return {void}
   */
  showColumnChart(): void {
    const element = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(element);

    chart.draw(this.getDataTable(), {
      ...this.getOptions(),
      'legend': 'bottom'
    });
  }

  /**
   * Show Donut Chart.
   *
   * @return {void}
   */
  showDonutChart(): void {
    const element = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(element);

    chart.draw(this.getDataTable(), {
      ...this.getOptions(),
      'pieHole': 0.4
    });
  }

  /**
   * Create and return the DataTable object from the Chart API,
   * that will define the chart data.
   *
   * @return {any}
   */
  getDataTable(): any {
    const dataTable = new google.visualization.DataTable();

    dataTable.addColumn('string', 'Month');
    dataTable.addColumn('number', 'Quantity');
    dataTable.addRows(this.data);

    return dataTable;
  }

  /**
   * Return the Chart Options like:
   * Title, Height, Width, etc.
   *
   * @return {any}
   */
  getOptions(): any {
    return {
      'title': 'Quantity of First Semester Records.',
      'height': 300,
      'width': 400
    }
  }
}
