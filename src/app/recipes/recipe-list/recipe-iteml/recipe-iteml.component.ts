import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-iteml',
  templateUrl: './recipe-iteml.component.html',
  styleUrls: ['./recipe-iteml.component.css']
})
export class RecipeItemlComponent implements OnInit {
  @Input()  recipe:Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeSelected.emit();
  }

}
