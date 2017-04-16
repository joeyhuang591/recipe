import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('A test recipe','This is simply test',
    'http://www.seriouseats.com/recipes/assets_c/2016/01/20160206-fried-rice-food-lab-68-thumb-1500xauto-429632.jpg'),
    new Recipe('Another test recipe','This is another simply test',
    'http://www.seriouseats.com/recipes/assets_c/2016/01/20160206-fried-rice-food-lab-68-thumb-1500xauto-429632.jpg'),
    new Recipe('Very good recipe','This is very good test',
    'http://www.seriouseats.com/recipes/assets_c/2016/01/20160206-fried-rice-food-lab-68-thumb-1500xauto-429632.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
