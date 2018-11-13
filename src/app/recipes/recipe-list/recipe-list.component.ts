import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
recipes:Recipe[]=[
  new Recipe('A Test Recipe','This is for test','https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg?resize=768:*')
];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe :Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

}
