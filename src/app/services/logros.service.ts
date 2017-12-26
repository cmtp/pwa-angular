import { Injectable } from '@angular/core';
import { ILogro } from "../home/home.component";

@Injectable()
export class LogrosService {

  constructor() { }

  getAll(): ILogro[] {
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
      },
      {
        id: 6, 
        title: 'Logre algo muy interesante', 
        description: 'Lorem ipsum'
      }
    ]
  }
}
