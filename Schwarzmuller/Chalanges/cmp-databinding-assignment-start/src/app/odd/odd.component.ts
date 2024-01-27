import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css',
})
export class OddComponent implements OnInit {
  @Input() number: number;
  constructor() {}

  ngOnInit(): void {}
}
