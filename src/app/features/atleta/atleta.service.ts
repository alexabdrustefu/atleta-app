import { Injectable } from '@angular/core';
import { Observable, filter, of } from 'rxjs';
import { Atleta } from 'src/app/model/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  
 listaAtleti: Atleta[] = [
  {
    id: 1,
    nome: "Mario",
    cognome: "Rossi",
    inAttivita: true,
    dataUtilmaGara: new Date("2022-12-31"),
    numeroMedaglieVinte: 5,
  },
  {
    id: 2,
    nome: "Luca",
    cognome: "Verdi",
    inAttivita: true,
    dataUtilmaGara: new Date("2023-05-15"),
    numeroMedaglieVinte: 8,
  },
  {
    id: 3,
    nome: "Giulia",
    cognome: "Bianchi",
    inAttivita: false,
    dataUtilmaGara: new Date("2021-09-30"),
    numeroMedaglieVinte: 3,
  },
  {
    id: 4,
    nome: "Sara",
    cognome: "Neri",
    inAttivita: true,
    dataUtilmaGara: new Date("2023-06-01"),
    numeroMedaglieVinte: 2,
  },
];
listAll(): Observable<Atleta[]> {
  return of(this.listaAtleti);
}
findById(id: number): Observable<Atleta> {
  return of(this.listaAtleti.find(item => item.id === id)).pipe(
    filter((atleta: Atleta | undefined): atleta is Atleta => atleta !== undefined)
  );
}
insert(atletaInput: Atleta): Observable<Atleta> {
  const newId: number = Math.max.apply(Math, this.listaAtleti.map(atletaItem => atletaItem.id ? atletaItem.id : 1));
  atletaInput.id = newId + 1;
  this.listaAtleti.push(atletaInput);
  return of(atletaInput);
}
  

  constructor() { }
}
