import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pizzeria.html',
  styleUrl: './pizzeria.css'
})
export class Pizzeria {
  nombreCliente: string = '';
  direccion: string = '';
  telefono: string = '';

  tamanioSeleccionado: string = 'Chica';
  precioTamanio: number = 40;
  numPizzas: number = 1;

  // Variables para los ingredientes
  ingredienteJamon: boolean = false;
  ingredientePina: boolean = false;
  ingredienteChampinones: boolean = false;

  pedidos: Array<{ cliente: string; direccion: string; telefono: string; tamanio: string; ingredientes: string; numPizzas: number; subTotal: number }> = [];

  agregarPedido() {
    let costoIngredientes = 0;
    let listaIngredientes: string[] = [];

    if (this.ingredienteJamon) {
      costoIngredientes += 10;
      listaIngredientes.push('Jamón');
    }
    if (this.ingredientePina) {
      costoIngredientes += 10;
      listaIngredientes.push('Piña');
    }
    if (this.ingredienteChampinones) {
      costoIngredientes += 10;
      listaIngredientes.push('Champiñones');
    }

    // Subtotal = (Precio base de la pizza + costo de ingredientes seleccionados) * Número de pizzas
    let subtotal = (this.precioTamanio + costoIngredientes) * this.numPizzas;

    const nuevoPedido = {
      cliente: this.nombreCliente || 'Sin nombre',
      direccion: this.direccion,
      telefono: this.telefono,
      tamanio: `${this.tamanioSeleccionado} ($${this.precioTamanio})`,
      ingredientes: listaIngredientes.length > 0 ? listaIngredientes.join(', ') : 'Ninguno',
      numPizzas: this.numPizzas,
      subTotal: subtotal
    };

    this.pedidos.push(nuevoPedido);

    // Imprimir base de datos local en consola
    console.log('--- BASE DE DATOS LOCAL (PEDIDOS) ---');
    console.table(this.pedidos);

    // Resetear cantidad
    this.numPizzas = 1;
  }

  actualizarIngredientes() {
    // Método auxiliar opcional por si requieres lógica reactiva en los checkboxes
  }
}