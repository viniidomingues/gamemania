import { Component, OnInit } from '@angular/core';

interface Destaques {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destaques: Destaques[] = [
    {
      id: 1,
      imagem: 'assets/images/pc-gamer-1.jpg',
      titulo: 'Dragon Slayer',
      descricao: 'PC Gamer com processador Intel i7, 16GB RAM, placa de vídeo RTX 3060.',
      preco: 4999.99
    },
    {
      id: 2,
      imagem: 'assets/images/pc-gamer-2.jpg',
      titulo: 'Beast Mode',
      descricao: 'PC Gamer com processador AMD Ryzen 9, 32GB RAM, placa de vídeo RTX 3080.',
      preco: 6999.99
    },
    {
      id: 3,
      imagem: 'assets/images/pc-gamer-3.jpg',
      titulo: 'Cyber Phantom',
      descricao: 'PC Gamer com processador Intel i9, 32GB RAM, placa de vídeo RTX 3090.',
      preco: 9999.99
    },
    {
      id: 4,
      imagem: 'assets/images/pc-gamer-4.jpg',
      titulo: 'Thunderbolt',
      descricao: 'PC Gamer com processador AMD Ryzen 7, 16GB RAM, placa de vídeo RX 6700 XT.',
      preco: 5499.99
    },
    {
      id: 5,
      imagem: 'assets/images/pc-gamer-5.jpg',
      titulo: 'Stealth Assassin',
      descricao: 'PC Gamer com processador Intel i5, 16GB RAM, placa de vídeo GTX 1660 Super.',
      preco: 3999.99
    },
    {
      id: 6,
      imagem: 'assets/images/pc-gamer-6.jpg',
      titulo: 'Vortex Strike',
      descricao: 'PC Gamer com processador AMD Ryzen 5, 8GB RAM, placa de vídeo GTX 1650.',
      preco: 2999.99
    },
    {
      id: 7,
      imagem: 'assets/images/pc-gamer-7.jpg',
      titulo: 'Neon Fury',
      descricao: 'PC Gamer com processador Intel i7, 32GB RAM, placa de vídeo RTX 3070.',
      preco: 7499.99
    },
    {
      id: 8,
      imagem: 'assets/images/pc-gamer-8.jpg',
      titulo: 'Shadow Hunter',
      descricao: 'PC Gamer com processador AMD Ryzen 7, 16GB RAM, placa de vídeo RTX 2060.',
      preco: 4999.99
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
