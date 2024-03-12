import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

   constructor(private dbzService: DbzService) {}

   get characteres(): Character[] {
    return [...this.dbzService.characteres];
   }

   onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterByID(id);
   }

   onNewCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
   }



}
