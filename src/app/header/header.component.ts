import {Component, OnInit, Input, LOCALE_ID, Inject} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isTransparent: boolean
  @Input() showJoinButton = false

  isOpen = false

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  ngOnInit() {
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }
}
