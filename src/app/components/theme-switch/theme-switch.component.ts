import { Component, Injector } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
  /**
   * @ignore
   */
  private themeService: ThemeService;

  /**
   * @ignore
   * @param injector
   */
  constructor(private injector: Injector) {
    this.themeService = injector.get<ThemeService>(ThemeService);
  }

  /**
   * Change application theme
   * @param enableDarkMode Enable Dark Mode Theme
   */
  changeTheme(enableDarkMode: boolean) {
    if (enableDarkMode) {
      this.themeService.switchTheme('arya-blue');
    } else {
      this.themeService.switchTheme('saga-blue');
    }
  }
}
