import { Component } from '@angular/core';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  constructor(private dotosService: DatosService) {
    this.dotosService.getData().subscribe( (data: any) => {
      this.data = data;
      console.log(data);
  
    })
  }
}
