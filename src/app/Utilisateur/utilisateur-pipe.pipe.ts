import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utilisateurPipe'
})
export class UtilisateurPipePipe implements PipeTransform {

  transform(competences: string) {

    let sortieComptences: string[];
    sortieComptences = competences.split(",");

    if (sortieComptences != null && sortieComptences.length == 3) {
      return `
      <ul>
      <li>${sortieComptences[0]}</li>
      <li>${sortieComptences[1]}</li>
      <li>${sortieComptences[2]}</li>
      </ul>
      `;
    }
    else if (sortieComptences != null && sortieComptences.length == 2) {
      return `
      <ul>
      <li>${sortieComptences[0]}</li>
      <li>${sortieComptences[1]}</li>
      </ul>
      `;
    } else {
      return `
      <ul>
      <li>${sortieComptences[0]}</li>
      </ul>
      `;
    }
  }
}
