import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare function require(x: string): any;
const Sessions = require('../../data/sessions.json')[0].sessions;

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions = Sessions;

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          window.requestAnimationFrame(() => {
            const element: any = document.querySelector('#' + tree.fragment);
            if (element) {
              element.scrollIntoView(element);
              window.requestAnimationFrame(() => {
                document.documentElement.scrollTop = document.body.scrollTop =
                  (document.documentElement.scrollTop ||
                    document.body.scrollTop) - 80;
              });
            }
          });
        }
      }
    });
  }

  ngOnInit() {}
}
