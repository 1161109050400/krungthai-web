import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { AuthService } from 'src/app/services/auth.service';

import wordCloud from 'highcharts/modules/wordcloud.js';
import { HttpClient } from '@angular/common/http';
import { ChartService } from 'src/app/services/chart.service';
wordCloud(Highcharts);

// import * as Chart from 'chart.js'

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  dataTotal: any = {
    total_insurance:0,
    total_hospital:0,
    total_user:0
  };
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  // Highcharts = Highcharts;
  chartOptions = {};
  chartOptions1 = {};
  chartOptions2 = {};

  @Input() data = [];

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private chartService: ChartService
  ) {}

  ngOnInit() {
    this.chartOptions2 = {
      title: {
        text: '',
      },
      subtitle: {
        text: '',
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      series: [
        {
          type: 'column',
          colorByPoint: true,
          data: [1, 2, 1, 1, 5, 1, 5, 1, 3, 2, 1, 2],
          showInLegend: false,
        },
      ],
    };

    this.chartOptions = {
      chart: {
        styledMode: true,
      },

      title: {
        text: '',
      },

      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      series: [
        {
          type: 'pie',
          allowPointSelect: true,
          keys: ['name', 'y', 'selected', 'sliced'],
          data: [
            // ['Apples', 29.9, false],
            // ['Pears', 71.5, false],
            // ['Oranges', 106.4, false],
            // ['Plums', 129.2, false],
            // ['Bananas', 144.0, false],
            // ['Peaches', 176.0, false],
            // ['Prunes', 135.6, true, true],
            // ['Avocados', 148.5, false],
            // ['Avocados', 148.5, false],
            // ['Avocados', 148.5, false]

            ['PWLNP85', 116, true, true],
            ['WLANP85', 99, false],
            ['12PL', 34, false],
            ['10EC', 25, false],
            ['PLB10', 20, false],
            ['RPUL', 14, false],
            ['WLCI05', 11, false],
            ['RL05', 7, false],
            ['WLN99L', 7, false],
            ['20P10', 4, false],
          ],
          showInLegend: true,
        },
      ],
    };

    this.chartOptions1 = {
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      subtitle: {
        text: '',
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)',
        },
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      series: [
        // {
        //   name: 'ผู้ที่มาเยี่ยมชม',
        //   data: [
        //     49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        //     95.6, 54.4,
        //   ],
        // },
        {
          name: 'ลูกค้าที่สนใจ',
          data: [2, 3, 5, 4, 1, 5, 1, 3, 2, 5, 6, 3],
        },
      ],
    };
    this.getTotalData();
  }
  getTotalData() {
    this.chartService.getTotal().subscribe((result) => {
      this.dataTotal = result;
    });
  }
  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
