# AngularImageViewer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Usage:
```
npm install angular-image-viewer --save

After install try to import { ImageViewerModule } from 'angular-image-viewer';

then you can use this as:
<app-image-viewer [images]="images" [expanderBgColor]="bgColor" [expanderTextColor]="textColor">
    <ng-template let-image>
        <div class="image">// this block can be updated according to your requirements.
            <h2>{{ image.thumbnailUrl }}</h2>
            <p>{{ image.previewUrl }}</p>
        </div>
    </ng-template>
</app-image-viewer>
```
## Attribuites:
-images : takes an array of image objects each object might include image meta data or information.
-expanderBgColor: this will change the background color for expander of the image. by default #505558;
-expanderTextColor: this will change text color inside expander. by default '#fff';

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
