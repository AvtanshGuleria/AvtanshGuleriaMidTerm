import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

}
