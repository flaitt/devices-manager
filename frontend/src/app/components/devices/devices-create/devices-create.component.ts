import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../categories/category.model';
import { CategoryService } from '../../categories/category.service';
import { Device } from '../device.model';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-devices-create',
  templateUrl: './devices-create.component.html',
  styleUrls: ['./devices-create.component.css']
})
export class DevicesCreateComponent implements OnInit {

  device : Device = {
    category_name: "",
    color: "",
    part_number: 0
  }

  categories : Category[] = []

  categorySelected: Category = {
    name: ""
  }

  constructor(private devicesService: DevicesService, private router: Router, private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.read().subscribe((categories) => {
      this.categories = categories;
    })
  }

  createDevice(): void {
    this.categorySelected.id = this.categories.filter((category)=> {
      return category.name === this.categorySelected.name;
    })[0].id
    console.log("devices:", this.device)
    
    this.devicesService.create(this.device, this.categorySelected.id).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
