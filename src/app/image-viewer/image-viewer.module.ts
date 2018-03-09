/**
 * Created by UPPALAR on 3/9/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './image-viewer.component';



@NgModule({
    declarations: [
        ImageViewerComponent,
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        ImageViewerComponent
    ],
    providers: [],
})
export class ImageViewerModule { }