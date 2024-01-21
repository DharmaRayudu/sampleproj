import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIfCustomDirective]',
})
export class IfCustomDirectiveDirective implements OnInit {
  @Input() appAlternativeIf: boolean = true;

  constructor(
    private tempRef: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (this.appAlternativeIf) {
      this.vc.createEmbeddedView(this.tempRef);
    } else {
      this.vc.clear;
    }
  }
}
