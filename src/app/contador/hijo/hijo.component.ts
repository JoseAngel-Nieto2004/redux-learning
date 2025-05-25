import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: false,
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() contador!: number; 
  @Output() cambioContador= new EventEmitter<number>();

  multiplicar () {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }
  
  dividir () {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto($event: number) {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
