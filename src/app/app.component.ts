import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Components';
  //itTypeVideo=false
  carouselData=[
    {
      src:'../assets/img/img1.png',
      title:'Title',
      type:'img',
      decs:'With supporting text below as a natural lead-in to additional content.'
    },
    {
      src:'../assets/img/img1.png',
      title:'Title',
      type:'img',
      decs:'With supporting text below as a natural lead-in to additional content.'
    },
    {
      src:'../assets/img/img1.png',
      title:'Title',
      type:'img',
      decs:'With supporting text below as a natural lead-in to additional content.'
    }
  ];
}
