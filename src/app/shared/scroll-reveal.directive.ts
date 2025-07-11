import { Directive, ElementRef, Input, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

enum ElementWeight {
  LIGHT = 0.3,    // Ícones, textos pequenos
  MEDIUM = 0.6,   // Cards, botões, parágrafos
  HEAVY = 0.9     // Títulos, imagens grandes
}

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() parallaxStrength: number = 40;
  @Input() elementWeight: 'LIGHT' | 'MEDIUM' | 'HEAVY' = 'MEDIUM';

  private observer?: IntersectionObserver;
  private revealed = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const element = this.el.nativeElement;
    const weight = ElementWeight[this.elementWeight];
    const adjustedStrength = this.parallaxStrength * weight;
    
    this.setInitialState(element, adjustedStrength);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.revealed) {
          // Anima para o estado final
          this.renderer.setStyle(element, 'opacity', '1');
          this.renderer.setStyle(element, 'transform', 'translateY(0)');
          this.revealed = true;
        }
        // else {
        //   // Volta ao estado inicial (espelho)
        //   this.setInitialState(element, adjustedStrength);
        // }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -20% 0px' // anima quando o topo do elemento chega a 80% da tela
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setInitialState(element: HTMLElement, strength: number) {
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', `translateY(${strength}px)`);
    this.renderer.setStyle(element, 'will-change', 'transform, opacity');
    this.renderer.setStyle(element, 'transition', 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)');
  }
} 