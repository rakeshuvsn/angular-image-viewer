import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  bgColor = '#505558';
  textColor= '#fff';
  images=[
    {
      thumbnailUrl: 'assets/images/download.jpg',
      reviewUrl: 'assets/images/download.jpg'
    },
    {
      thumbnailUrl: 'assets/images/download 1.jpg',
      reviewUrl: 'assets/images/download 1.jpg'
    },
    {
      thumbnailUrl: 'assets/images/download 2.jpg',
      reviewUrl: 'assets/images/download 2.jpg'
    },
    {
      thumbnailUrl: 'assets/images/download3.jpg',
      reviewUrl: 'assets/images/download3.jpg'
    },
    {
      thumbnailUrl: 'assets/images/download4.jpg',
      reviewUrl: 'assets/images/download4.jpg'
    },
    {
      thumbnailUrl: 'assets/images/download5.jpg',
      reviewUrl: 'assets/images/download5.jpg'
    }
  ];
}
