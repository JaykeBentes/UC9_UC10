import { Component, OnInit } from '@angular/core';
import { Jogos } from 'src/app/model/jogos';
import { JogosService } from 'src/app/services/Jogos.service';


@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {
  constructor( private JogosService: JogosService) { }

  listaJogos = [] as Jogos[]

  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos() {
    this.JogosService.getJogos().subscribe( (jogosRecebidos: Jogos[]) => {
      this.listaJogos = jogosRecebidos
      console.log(this.listaJogos);
    })
  }
}
