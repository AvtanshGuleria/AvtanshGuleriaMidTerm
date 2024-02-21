import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

}
