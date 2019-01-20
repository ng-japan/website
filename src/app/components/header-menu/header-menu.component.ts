import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent implements OnInit, OnDestroy {
  showMenuButton = false;
  isMenuOpen = false;

  private onDestroy$ = new Subject();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(`(max-width: 667px)`)
      .pipe(
        takeUntil(this.onDestroy$),
        map(state => state.matches)
      )
      .subscribe(isSmallDevice => {
        this.showMenuButton = isSmallDevice;
        this.cdRef.markForCheck();
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
