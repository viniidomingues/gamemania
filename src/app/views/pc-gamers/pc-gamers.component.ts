import { Component, OnInit } from '@angular/core';

interface Produto {
  id: number;
  imagem: string;
  titulo: string;
  descricao: string;
  preco: number;
}

@Component({
  selector: 'app-pc-gamers',
  templateUrl: './pc-gamers.component.html',
  styleUrls: ['./pc-gamers.component.css']
})

export class PcGamersComponent implements OnInit {
  produtos: Produto[] = [
    {
      id: 1,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 2,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 3,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 4,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 5,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 6,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 7,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    {
      id: 8,
      imagem: 'assets/images/pc-gamer.jpg',
      titulo: 'Produto em Destaque',
      descricao: 'Descrição do Produto',
      preco: 2999.99
    },
    // Adicione mais produtos conforme necessário
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
