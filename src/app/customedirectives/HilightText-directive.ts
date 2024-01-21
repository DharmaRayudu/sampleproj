import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Creating custome attribute directive
 */

@Directive({
  selector: '[custome-directive]',
})
export class HilightTextDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
  }
}
