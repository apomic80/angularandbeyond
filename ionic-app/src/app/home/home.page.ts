import { Component } from '@angular/core';
import { Camera } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Camera]
})
export class HomePage {

  base64Image: string;

  constructor(private camera: Camera) {
  }

  takePicture() {
    this.camera.getPicture({
      quality: 70,
      targetHeight: 300,
      targetWidth: 300,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err);
      console.log(err);
    });
  }

}
