import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logros: ILogro[];
  title: string = 'Bienvenido';

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros();
  }

  getLogros(): ILogro[] {
    return [
      {
        id: 1, 
        title: 'Logre algo muy interesante', 
        description: 'Lorem ipsum dasdjkasld sdjakl sjdsadjajsd sdas dsad jasldaskldjalksdj kjsdal sjdlskd alskjdlasd jklasdjksjd skdjskdj sdasd asdasdas s sadasdsa sksjd ksjksjd'
      },
      {
        id: 2, 
        title: 'Logre algo muy interesante', 
        description: 'Lorem ipsum'
      },
      {
        id: 3, 
        title: 'Logre algo muy interesante', 
        description: 'Lorem ipsum'
      },
      {
        id: 4, 
        title: 'Logre algo muy interesante', 
        description: 'Lorem ipsum'
      },
      {
        id: 5, 
        title: 'Logre algo muy interesante', 
        description: 'Lorem ipsum'
      }
    ]
  }

}
// id, title, description

interface ILogro {
  id: number;
  title: string;
  description ?: string; //opcional

  
}