import { Observable } from 'rxjs/Observable';
import { Servico } from '../model/servico';


export class ServicosService{

    public getServicos() {
        let servicos:Servico[];
        servicos=[
            new Servico(1,'Normalização de Banco de Dados',5000,'Otimização, regras normais, performance e corretos procedimentos armazenados'),
            new Servico(2,'Front-End Aplicações - Angular',8000, 'Configuração, definição de telas, serviços, componentes e demais métodos'),
            new Servico(3,'Back-End Aplicações - Java',10000,'Definição de objetos, serviços, controllers, segurança e design patterns')
        ]
        return servicos;               
    }

    public getServico(id) {
        let servicos:Servico[]=this.getServicos();
        return servicos.find(p => p.id==id);
    }


}