import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url = 'http://www.google.com.br';
  urlImg = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 2;
  }

  getCurtirCurso(): boolean {
    return true;
  }
}
