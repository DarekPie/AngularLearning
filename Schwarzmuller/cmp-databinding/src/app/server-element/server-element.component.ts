import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  // @ViewChild('heading') header: ElementRef;
  @ViewChild('...', { static: true }) header: ElementRef;
  @ContentChild('...', { static: true }) parahtaph: ElementRef;

  constructor() {
    console.log('constuctor calles! ');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges calles');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit calles! ');
    console.log('Text content ' + this.header);
    console.log('Text Content of paragraph ' + this.parahtaph);
  }

  ngDoCheck() {
    console.log('ngDoCheck Call!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph' + this.parahtaph);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
