import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/cars_api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private cars:CarsService) { }

  public cars_data : any[] =[];

  ngOnInit(): void {
    this.cars.getUsers().subscribe((data: any) => {
      this.cars_data = data;
      console.log(data);
    });
  }

}
