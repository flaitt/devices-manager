import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }

  category: Category = {
    name: ""
  }

  ngOnInit(): void {
  }

  createCategory(): void {
    if(this.category.name.length===0){
      alert("Category name must not be empty.")
    } else {
      this.categoryService.create(this.category).subscribe(() => {
        this.router.navigate(['/categories'])
      })
    }
  }

}
