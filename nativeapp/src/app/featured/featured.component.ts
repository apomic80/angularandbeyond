import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { requestPermissions, takePicture } from "nativescript-camera";
import { ImageAsset } from "tns-core-modules/image-asset";

@Component({
  selector: "Featured",
  moduleId: module.id,
  templateUrl: "./featured.component.html"
})
export class FeaturedComponent {
  imageTaken: ImageAsset;

  onTakePhoto() {
    const options = {
      width: 300,
      height: 300,
      keepAspectRatio: true,
      saveToGallery: true
    };

    takePicture(options)
      .then((imageAsset) => {
        this.imageTaken = imageAsset;
        console.log(
          "Size: " + imageAsset.options.width + "x" + imageAsset.options.height
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  onRequestPermissions() {
    requestPermissions();
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
