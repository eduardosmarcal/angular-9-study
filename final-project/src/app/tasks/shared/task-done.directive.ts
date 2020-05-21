import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskDone]'
})
export class TaskDoneDirective implements OnInit {
  @Input() taskDone: boolean;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    if (this.taskDone) {
      this.element.nativeElement.style.textDecoration = "line-through";
    }
  }
}
