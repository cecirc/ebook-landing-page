import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-aprender',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './aprender.component.html',
  styleUrls: ['./aprender.component.scss']
})
export class AprenderComponent {

}
