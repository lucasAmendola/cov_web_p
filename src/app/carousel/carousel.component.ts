import { Component, Input, OnInit, HostListener } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 3000;

  currentIndex = 0;
  touchStartX = 0;
  touchEndX = 0;
  autoSlide: any;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.autoSlide = setInterval(() => {
      this.next();
    }, this.interval);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlide);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  // Gestos mobile
  @HostListener('touchstart', ['$event'])
  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }

  handleSwipe() {
    const dist = this.touchStartX - this.touchEndX;
    if (dist > 60) this.next();
    if (dist < -60) this.prev();
  }

  scrollDown() {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  } 
}
