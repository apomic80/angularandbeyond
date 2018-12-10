import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

declare const notifier: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'web-native-DEV MARCHE';

  constructor(private electron: ElectronService) { }

  ngOnInit() {
  }

  notify(message: string) {
    /* const options = {
      body: message
    };
    const notification = new Notification('Demo Notification', options);
    notification.onclick = () => {
      alert('notification clicked');
    };*/
    // notifier.notify(message);
    this.electron.ipcRenderer.send('notification', message);
  }
}
