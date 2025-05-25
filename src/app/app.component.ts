import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'redux-learning';

  contador!: number;

  constructor( private store: Store<AppState>) {
    this.store.subscribe( state => {
      console.log('Estado actualizado:', state);
      this.contador = state.contador;
    })
  }

  // Funciones 

  incrementar() { 
    this.store.dispatch( actions.incrementar() )
  }

  reducir() {
    this.store.dispatch( actions.reducir() )
  }
}
