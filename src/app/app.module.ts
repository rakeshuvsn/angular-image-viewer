import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageViewerModule } from './image-viewer/image-viewer.module';
import { ImageDetailsComponent } from './image-details/image-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
