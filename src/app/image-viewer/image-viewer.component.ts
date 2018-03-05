import {Component, OnInit, Input, ViewEncapsulation, TemplateRef, ContentChild} from '@angular/core';
import * as _ from "lodash";
@Component({
  moduleId: module.id,
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ImageViewerComponent implements OnInit {
  windowSize: any;
  // current expanded item´s index
  currentImage = -1;
  // position (top) of the expanded item
  // used to know if the preview will expand in a different row
  previewPosition = -1;
  // extra amount of pixels to scroll the window
  scrollExtra = 0;
  // extra margin when expanded (between the preview element and the next item row)
  marginExpanded = 10;
  @Input() images: any;
  @ContentChild(TemplateRef) parentTemplate;
  public imagesData: Array<any>;
  constructor() {

  }

  ngOnInit() {
    this.getWinSize();
    console.log(this.images);
    this.imagesData = this.getImagesData(this.images);

  }

  getImagesData(images): Array<any>{
    let imagesArray =[];
    _.forEach(images, function (image) {
      console.log(image);
      imagesArray.push({
        thumbnailUrl: image.thumbnailUrl,
        previewUrl: image.reviewUrl,
        expanderHeight: '0px',
        height: '250px'
      })
    });

    return imagesArray;
  }

  openImageExpander(imagePosition: number) {
    _.forEach(this.imagesData, function (image, index) {
      if(index === imagePosition){
        image.height = '900px';
        image.expanderHeight = '640px';
      }else{
        image.height = '250px';
        image.expanderHeight = '0px';
      }
    });
  }

  closeImageExpander(imagePosition: number){
    _.forEach(this.imagesData, function (image, index) {
      if(index === imagePosition){
        image.height = '250px';
        image.expanderHeight = '0px';
      }
    });
  }

  getWinSize() {
    this.windowSize = { width : window.screen.width, height : window.screen.height };
  }

}
