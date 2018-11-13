import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amoutInputRef:ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amoutInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
