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
  selectedIndex: number = 0;
  @Input() images: any;
  @Input() expanderBgColor: string;
  @Input() expanderTextColor: string;
  @ContentChild(TemplateRef) parentTemplate;
  public imagesData: Array<any>;
  constructor() {

  }

  ngOnInit() {
    this.getWinSize();
    this.imagesData = this.getImagesData(this.images);
    if(!this.expanderBgColor){
      this.expanderBgColor = '#505558';
    }

    if(!this.expanderTextColor){
      this.expanderTextColor = '#fff';
    }
  }

  getImagesData(images): Array<any>{
    let imagesArray =[];
    _.forEach(images, function (image) {
      console.log(image);
      imagesArray.push({
        thumbnailUrl: image.thumbnailUrl,
        previewUrl: image.reviewUrl,
        expanderHeight: '0px',
        height: '220px'
      })
    });

    return imagesArray;
  }

  openImageExpander(imagePosition: number) {
    this.selectedIndex = imagePosition;
    _.forEach(this.imagesData, function (image, index) {
      if(index === imagePosition){
        image.height = '860px';
        image.expanderHeight = '640px';
      }else{
        image.height = '220px';
        image.expanderHeight = '0px';
      }
    });
  }

  closeImageExpander(imagePosition: number){
    this.selectedIndex = imagePosition;
    _.forEach(this.imagesData, function (image, index) {
      if(index === imagePosition){
        image.height = '220px';
        image.expanderHeight = '0px';
      }
    });
  }

  plusSlides(n: number): void {
    this.selectedIndex += n;
    this.openImageExpander(this.selectedIndex);
  }

  showPrevButton(): boolean {
    return this.selectedIndex !== 0;
  }

  showNextButton(): boolean {
    return this.selectedIndex !== this.images.length - 1;
  }

  getWinSize() {
    this.windowSize = { width : window.screen.width, height : window.screen.height };
  }

}
