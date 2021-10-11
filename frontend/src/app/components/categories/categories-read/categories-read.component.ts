import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-read',
  templateUrl: './categories-read.component.html',
  styleUrls: ['./categories-read.component.css']
})
export class CategoriesReadComponent implements OnInit {

  categories: Category[] = [];
  category : Category = {
    name: ""
  }
  displayedColumns = ['name', "Delete"]

  constructor(private categoriesService: CategoryService, private router : Router) { }

  ngOnInit(): void {
    this.categoriesService.read().subscribe(categories => {
      this.categories = categories;
      console.log(categories)
    })
  }

  deleteCategory(category: any): void {
    this.categoriesService.delete(category).subscribe(() => {
      console.log("weee")
      this.ngOnInit();
    })
  }

}
