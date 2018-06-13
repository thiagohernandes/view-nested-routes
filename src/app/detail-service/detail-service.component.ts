import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos/service-servicos';
import { Servico } from '../model/servico';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {

  sub;
  id:number;
  servico:Servico;


  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private _servicosService:ServicosService){
  }

ngOnInit() {
  this.sub=this._Activatedroute.params.subscribe(params => { 
      this.id = params['id']; 
      let servicos = this._servicosService.getServicos();
      this.servico = servicos.find(p => p.id == this.id);    
  
  });
}

ngOnDestroy() {
 this.sub.unsubscribe();
}

onBack(): void {
  this._router.navigate(['services']);
}

}
