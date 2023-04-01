import { Component, HostListener } from '@angular/core';
import { fadeIn, fadeOut } from 'src/app/animations/animation';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
  animations: [fadeIn(600, true), fadeOut(600, true)]
})
export class ScrollTopComponent {
  showScrollTop: boolean = false;

  scrollTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event): void {
    const docScrollPosition: number | undefined = ($event.target as Document)['scrollingElement']?.scrollTop;
    if (docScrollPosition! >= 100) {
      this.showScrollTop = true;
    } else {
      this.showScrollTop = false;
    }
  }
}
