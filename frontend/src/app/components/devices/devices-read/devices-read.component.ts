import { Component, OnInit } from '@angular/core';
import { Device } from '../device.model';
import { DevicesService } from '../devices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices-read',
  templateUrl: './devices-read.component.html',
  styleUrls: ['./devices-read.component.css']
})
export class DevicesReadComponent implements OnInit {

  devices: Device[] = [];
  device : Device = {
    category_name: "",
    color: "",
    part_number: 0
  }
  displayedColumns = ['color', 'partNumber', 'categoryId', "Delete"]

  constructor(private devicesService: DevicesService, private router : Router) { }

  ngOnInit(): void {
    this.devicesService.read().subscribe(devices => {
      this.devices = devices;
      console.log(devices)
    })
  }

  deleteDevice(device: any): void {
    this.devicesService.delete(device).subscribe(() => {
      console.log("weee")
      this.ngOnInit();
    })
  }

}
