import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { EbookComponent } from './components/ebook/ebook.component';
import { AprenderComponent } from './components/aprender/aprender.component';
import { QuemSouEuComponent } from './components/quem-sou-eu/quem-sou-eu.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    EbookComponent,
    AprenderComponent,
    QuemSouEuComponent,
    OfertaComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page');
}
