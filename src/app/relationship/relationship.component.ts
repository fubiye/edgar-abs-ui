import { Component, HostListener, OnInit } from '@angular/core';
import * as echarts from 'echarts/core';
import { LegendComponent } from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { HttpClient } from '@angular/common/http';

echarts.use([LegendComponent, GraphChart, CanvasRenderer]);
const ROOT_PATH =
  'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {
  chart: any = {};
  relations: any = {};
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const dom = document.getElementById('relationship-graph') as any;
    this.chart = echarts.init(dom);
    this.httpClient.get(ROOT_PATH + '/data/asset/data/webkit-dep.json').subscribe((relations: any) => {
      this.relations = relations;
      this.draw();
    })
  }

  draw() {
    const option = {
      // legend: {
      //   data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other']
      // },
      series: [
        {
          type: 'graph',
          layout: 'force',
          animation: false,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          draggable: true,
          data: this.relations.nodes.map((node: any, idx: any) => {
            node.id = idx;
            return node;
          }),
          categories: this.relations.categories,
          force: {
            edgeLength: 5,
            repulsion: 20,
            gravity: 0.2
          },
          edges: this.relations.links
        }
      ]
    };
    this.chart.setOption(option);
  }

  @HostListener('window:resize')
  public onWindowResize() {
    this.chart.resize();
  }

}
