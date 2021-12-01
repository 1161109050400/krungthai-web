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
        type: 'pie',
      },
      title: {
        text: '',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true,
              color: '#003696',
            },
            {
              name: 'Internet Explorer',
              y: 11.84,
              color: '#2C77FF',
            },
            {
              name: 'Firefox',
              y: 10.85,
              color: '#C7E4FF',
            },
          ],
        },
      ],
    };
    // HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    this.chartOptions1 = {
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        },
        // tooltip: {
        //     formatter: function () {
        //         return '<b>' + this.series.name + '</b><br/>' +
        //             this.point.y + ' ' + this.point.name.toLowerCase();
        //     }
        // }
    };












  }


}
