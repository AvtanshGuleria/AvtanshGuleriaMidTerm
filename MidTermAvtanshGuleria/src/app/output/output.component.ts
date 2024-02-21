import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  dataDisplay:any;
  shareData=inject(ShareDataService);
  ngOnInit() {
    this.dataDisplay = this.shareData.getData();
  }
}
