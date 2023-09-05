import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Theme Service
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /**
   * @ignore
   */
  constructor(@Inject(DOCUMENT) private document: Document) {}

  /**
   * Apply theme to application
   * @param theme Theme css
   */
  switchTheme(theme: string) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
}
