import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('nav') slider!: NgImageSliderComponent;


  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }

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


  imageObject: Array<object> = [{
    video: '../assets/video/Tropical.mp4' // Youtube url
  },
  {
    video: '../assets/video/Tropical.mp4', // MP4 Video url
  },
  {
    video: '../assets/video/Tropical.mp4',
    posterImage: '../assets/video/Tropical.mp4', //Optional: You can use this key if you want to show video poster image in slider
    title: 'Image title'
  },
  {
    image: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
    thumbImage: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
    alt: 'Image alt'
  },
  {
    video: '../assets/video/Tropical.mp4',
    title: 'Image title'
  },
  {
    image: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
    thumbImage: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
    alt: 'Image alt'
  },
  {
    video: '../assets/video/Tropical.mp4',
    title: 'Image title'
  },
  {
    image: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
    thumbImage: 'https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d',
    alt: 'Image alt'
  }
  ];

}
