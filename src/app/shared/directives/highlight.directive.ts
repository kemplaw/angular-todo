import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string
  private el: HTMLElement

  constructor(el: ElementRef, private render2: Renderer2) {
    this.el = el.nativeElement
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighlightColor(this.highlightColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighlightColor(null)
  }

  private setHighlightColor(color: string) {
    if (!this.el) return

    this.render2.setStyle(this.el, 'color', color)
  }
}
