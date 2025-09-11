import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Centro oncologico veterinario';
    logo ='assets/img/ocov.png';
    logoFooter ='assets/img/ocov-white.png';
    wpIcon = 'assets/icon/wp-icon.png';
    igIcon = 'assets/icon/ig-icon.png';
    fcIcon = 'assets/icon/fc-icon.png';

      isScrolled = false;

    @HostListener('window:scroll', [])
      onWindowScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrolled = scrollTop > 0;
    }

    @ViewChild('logoRef', { static: true }) logoRef!: ElementRef;

    onLogoHover() {
      this.logoRef.nativeElement.classList.add('logo-hovered');
    }

    onLogoLeave() {
      this.logoRef.nativeElement.classList.remove('logo-hovered');
    }

}
