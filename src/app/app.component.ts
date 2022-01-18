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
  carouselData = [
    {
      src: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
      title: 'Title',
      type: 'img',
      decs: 'With supporting text below as a natural lead-in to additional content.'
    },
    {
      src: '../assets/video/Tropical.mp4',
      title: 'Title',
      type: 'video',
      decs: 'With supporting text below as a natural lead-in to additional content.'
    },
    {
      src: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
      title: 'Title',
      type: 'img',
      decs: 'With supporting text below as a natural lead-in to additional content.'
    }
  ];
}
