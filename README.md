# AngularImageViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Usage:
```
npm install angular-image-viewer --save

After install try to import { ImageViewerModule } from 'angular-image-viewer';

then you can use this as:
<app-image-viewer [images]="images" [expanderBgColor]="bgColor" [expanderTextColor]="textColor">
    <ng-template let-image>
        <div class="image">// customize this block can be updated according to your requirements.
            <h2>{{ image.thumbnailUrl }}</h2>
            <p>{{ image.previewUrl }}</p>
        </div>
    </ng-template>
</app-image-viewer>
```
## Attribuites:
```
###images : takes an array of image objects each object might include image meta data or information.
###expanderBgColor: this will change the background color for expander of the image. by default #505558;
###expanderTextColor: this will change text color inside expander. by default '#fff';
```
## you can access demo here https://rakeshuvsn.github.io/angular-image-viewer/
