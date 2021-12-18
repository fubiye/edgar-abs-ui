import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { StatRecord } from '../statistics.model';
import * as echarts from 'echarts/core';

import {
  GridComponent, TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  MarkPointComponent,
  MarkPointComponentOption
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([MarkPointComponent, TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

@Component({
  selector: 'app-filing-by-year',
  templateUrl: './filing-by-year.component.html',
  styleUrls: ['./filing-by-year.component.css']
})
export class FilingByYearComponent implements OnInit {

  public records: StatRecord[] = [];
  public chart!: echarts.ECharts;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.httpClient.get('/assets/statistics/filing-by-year.json').subscribe((response: any) => {
      this.records = response as StatRecord[];
      this.draw();
    });
  }

  public draw() {
    var chartEle = document.getElementById('filing-by-year') as any;
    this.chart = echarts.init(chartEle);
    var option = {
      color: ['#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      title: {
        text: 'SEC ABS Filing Count from 1994 to 2020',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          name: 'Year',
          data: this.records.map(record => record.year) as any
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Filing Count',
        }
      ],
      series: [{
        name: 'Filing Count',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        label: {
          show: true,
          position: 'top'
        },
        markPoint: {
          symbol: 'circle',
          symbolSize: 10,
          label: {
            show: true,
            // color: 'rgb(135, 0, 157)',
            color: 'black',
            offset: [30, -20]
          },
          itemStyle: {
            color: 'rgb(255, 0, 135)'

          },
          data: [{
            coord: [13, 27820],
            value: '2007 Subprime mortgage crisis'
          }, {
            coord: [15, 4411],
            value: '2009 Global Economic Crisis End'
          }]
        },
        data: this.records.map(record => record.filingCnt) as any
      }]
    }
    this.chart.setOption(option);
  }

  @HostListener('window:resize')
  public onWindowResize() {
    this.chart.resize();
  }

}
