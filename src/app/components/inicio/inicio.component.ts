import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad: number = 25;
  peso: number = 60;
  altura: number = 170;
  sexo: string = 'Masculino';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }

  femenino() {
    this.sexo = 'Femenino';
  }

  calcularBMI(): void {

    const BMI = this.peso / Math.pow((this.altura / 100), 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
