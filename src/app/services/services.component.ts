import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos/service-servicos';
import { Servico } from '../model/servico';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicos:Servico[];

  constructor(private servico:ServicosService) { }

  ngOnInit() {
    this.servicos = this.servico.getServicos();
  }

}
