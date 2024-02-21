import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  shareData=inject(ShareDataService);
  route=inject(Router)
  outputData(data:any){
    console.log(data);
    this.shareData.setData(data);
    this.route.navigate(['output'])
  }
}
