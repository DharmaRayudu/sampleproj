import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appCustomedirectivestyle]',
})
export class CustomedirectivestyleDirective implements OnInit {
  /**
   * @HostBinding and @HostListener are used to manipulate the DOM
   */

  @Input('appCustomedirectivestyle') defaultColor: string = 'blue';
  @Input() hilightColor: string = 'gray';
  @HostBinding('style.backgroundColor') color: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }

  @HostListener('mouseenter') onMouseOVer() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'black'
    // );
    //By using HostBinding
    // this.color = 'black';

    //By using @Input

    this.color = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    // this.color = 'yellow';

    this.color = this.hilightColor;
  }

  @HostListener('click') onClick(enent: Event) {
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'white'
    // );

    this.color = 'pink';
  }
}
