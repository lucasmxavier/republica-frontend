import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Chart } from 'node_modules/chart.js';
import { ChartService } from '../../services/chart.service';
import { Republica } from '../../models/republica';
import { DataChart } from '../../models/data-chart';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-republica-financas-grafico',
  templateUrl: './republica-financas-grafico.component.html',
  styleUrls: ['./republica-financas-grafico.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class RepublicaFinancasGraficoComponent implements OnInit {

  republica = new Republica();
  myChart: Chart;
  date = new FormControl(moment());
  meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  mes: number;
  ano: number;
  dataChart: DataChart;
  labels: Set<string>;
  receitas = [];
  despesas = [];

  constructor(private chartService: ChartService) {
    const data = new Date();
    this.mes =  data.getMonth() + 1;
    this.ano = data.getFullYear();
  }

  ngOnInit() {

    this.republica.id = parseInt(localStorage.getItem('idRepublica'), 10);

    this.getDados().then(() => {
      this.getLabels();
      this.gerarEixos();
      this.displayChart();
    });
  }

  displayChart() {

      this.myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: [...this.labels],
        datasets: [{
          label: 'Receitas',
          data: this.receitas,
          borderColor: 'rgba(54, 162, 235, 0.6)',
          fill: false
        }, {
          label: 'Despesas',
          data: this.despesas,
          borderColor: 'rgba(255, 99, 132, 0.6)',
          fill: false
        }
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  async getDados() {
    this.dataChart = await this.chartService.getChartData(this.republica, this.mes, this.ano).toPromise();
  }

  getLabels() {
    console.log(this.dataChart);
    this.labels = new Set(Object.keys(this.dataChart.despesas)
    .concat(Object.keys(this.dataChart.receitas))
    .sort());
  }

  gerarEixos() {
    const receitas = new Map(Object.entries(this.dataChart.receitas));
    const despesas = new Map(Object.entries(this.dataChart.despesas));

    this.labels.forEach(dia => {
      this.receitas.push(receitas.get(dia) || 0);
      this.despesas.push(despesas.get(dia) * -1 || 0);
    });
  }

  chosenYearHandler(normalizedYear: Moment) {
    this.ano = normalizedYear.year();
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    this.mes = normalizedMonth.month() + 1;
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();

    this.receitas = [];
    this.despesas = [];
    this.ngOnInit();
  }
}
