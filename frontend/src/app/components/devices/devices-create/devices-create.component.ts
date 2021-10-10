import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../device.model';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-devices-create',
  templateUrl: './devices-create.component.html',
  styleUrls: ['./devices-create.component.css']
})
export class DevicesCreateComponent implements OnInit {

  device : Device = {
    category_id: "",
    color: "",
    part_number: 0
  }
  constructor(private devicesService: DevicesService, private router: Router) { }

  ngOnInit(): void {
  }

  createDevice(): void {
    this.devicesService.create(this.device).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
