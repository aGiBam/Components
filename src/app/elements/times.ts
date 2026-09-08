import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class Times {
  viewContainer: ViewContainerRef;
  templateRef: TemplateRef<any>;
  constructor(viewContainer: ViewContainerRef, templateRef: TemplateRef<any>) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
  }
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
