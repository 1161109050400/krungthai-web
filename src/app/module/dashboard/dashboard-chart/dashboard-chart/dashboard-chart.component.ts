import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
})
export class DashboardChartComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  chartOptions1 = {};

  @Input() data = [];

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: ''
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'PWLNP85',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'WLANP85',
              y: 11.84
          }, {
              name: '12PL',
              y: 10.85
          }, {
              name: '10EC',
              y: 4.67
          }, {
              name: 'WLN99L',
              y: 4.18
          }, {
              name: 'PLB10',
              y: 7.05
          }]
      }]
  };
    // HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

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
        {
          name: 'ผู้ที่มาเยี่ยมชม',
          data: [
            49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4,
          ],
        },
        {
          name: 'ลูกค้าที่สนใจ',
          data: [
            83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
            106.6, 92.3,
          ],
        },
  
      ],
    };
  }
}
