import { Component, OnInit } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AtletaService } from '../atleta.service';


@Component({
  selector: 'atl-atleta-insert',
  templateUrl: './atleta-insert.component.html',
  styleUrls: ['./atleta-insert.component.css']
})
export class AtletaInsertComponent implements OnInit {

  atleta: Atleta ={
    id: 0,
    nome: "",
    cognome: "",
    inAttivita: true,
    dataUtilmaGara: new Date(),
    numeroMedaglieVinte: 0,
  }
  errorMessage: string = '';

  constructor(private atletaService: AtletaService, private router: Router) { }

  ngOnInit(): void {
  }

  save(atletaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.atleta));
    if (atletaForm.valid) {
      this.atletaService.insert(this.atleta).subscribe({
        next: atletaItem => this.atleta = atletaItem,
        complete: () => this.router.navigate([`atleta/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
