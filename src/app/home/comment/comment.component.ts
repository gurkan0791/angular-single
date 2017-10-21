import { Component, OnInit, HostListener, ViewChild, Renderer2, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'home-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations: [
    trigger('flexComment', [
      state('inactive', style({
        opacity: '0',
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('active', style({
        opacity: '1',
        transform: 'none'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class CommentComponent implements OnInit {

  private state = 'inactive';
  @ViewChild('flexdata') flexElements: ElementRef;

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    var a = this.flexElements.nativeElement.offsetTop;
    var elements = this.flexElements.nativeElement.children;
    if (window.pageYOffset > a - 550) {
      this.state = 'active';
      // Array.prototype.forEach.call(elements, child => {
      // });
    }
  }
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.flexElements.nativeElement.children);
  }

}
