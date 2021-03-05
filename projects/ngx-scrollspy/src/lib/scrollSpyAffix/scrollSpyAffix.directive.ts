import {
  Directive,
  Injectable,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

import { ScrollSpyService } from '../core/service';

export interface ScrollSpyAffixOptions {
  topMargin?: number;
  bottomMargin?: number;
  scrollRef?: string;
}

@Injectable()
@Directive({
  selector: '[scrollSpyAffix]',
  host: {
    '[class.affix]': 'affix',
    '[class.affix-top]': 'affixTop',
    '[class.affix-bottom]': 'affixBottom'
  }
})
export class ScrollSpyAffixDirective implements AfterViewInit, OnDestroy {
  @Input('scrollSpyAffix') public options: ScrollSpyAffixOptions;

  public elementTop: number;
  public elementBottom: number;
  public affix: boolean = false;
  public affixTop: boolean = false;
  public affixBottom: boolean = false;

  public defaultOptions: ScrollSpyAffixOptions = {
    topMargin: 0,
    bottomMargin: 0,
    scrollRef: 'window'
  };

  public scrollStream$: any;

  public el: HTMLElement;
  public parentEl: any;

  constructor(
    private ref: ChangeDetectorRef,
    private elRef: ElementRef,
    private scrollSpy: ScrollSpyService
  ) {
    this.el = elRef.nativeElement;
  }

  ngAfterViewInit() {
    if (!this.options) {
      this.options = {};
    }

    this.options = Object.assign(this.defaultOptions, this.options);

    this.parentEl = this.el.parentElement;
    this.elementTop = this.parentEl.scrollTop;
    this.elementBottom = this.elementTop + this.parentEl.getBoundingClientRect().height;

    if (!!this.scrollSpy.getObservable(this.options.scrollRef)) {
      // TODO: Remove setTimeout once: https://github.com/angular/angular/issues/7443
      this.scrollStream$ = this.scrollSpy.getObservable(this.options.scrollRef).subscribe((e: Event) => {
        const el = e.target as HTMLElement;
        if (el.scrollHeight > el.clientHeight) {
          setTimeout(() => this.update(el.scrollTop));
        }
      });
    }
  }

  update(currentTop: number) {
    if (currentTop >= this.elementTop + this.options.topMargin) {
      if (currentTop > this.elementBottom - this.options.bottomMargin - this.el.getBoundingClientRect().height) {
        if (this.affixTop || !this.affixBottom) {
          this.ref.markForCheck();
        }
        this.affixTop = false;
        this.affixBottom = true;
        this.affix = true;
      } else {
        if (!this.affixTop || this.affixBottom) {
          this.ref.markForCheck();
        }
        this.affixTop = true;
        this.affixBottom = false;
        this.affix = true;
      }
    } else {
      if (this.affixTop) {
        this.ref.markForCheck();
      }
      this.affixTop = false;
      this.affixBottom = false;
      this.affix = false;
    }
  }

  ngOnDestroy() {
    this.scrollStream$.unsubscribe();
  }
}
