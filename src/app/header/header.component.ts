import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isTransparent: boolean
  @Input() showJoinButton = true

  isOpen= false

  constructor() { }

  ngOnInit() {
  }

  open() {
    console.log('open');
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}
