import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Pizzeria } from './pizzeria/pizzeria'; // Asegúrate de que la ruta sea correcta según dónde tengas creada la carpeta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Pizzeria], // <-- Pizzeria debe estar aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  title = 'Examen2p';

  ngAfterViewInit(): void {
    initFlowbite();
  }
}