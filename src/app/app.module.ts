import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
