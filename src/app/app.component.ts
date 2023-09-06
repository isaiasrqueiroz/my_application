import { Component, Injector, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';

/**
 * App component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  /**
   * @ignore
   */
  public title = 'my_application';
  /**
   * @ignore
   */
  private primengConfig: PrimeNGConfig;
  /**
   * @ignore
   */
  private translateService: TranslateService;

  /**
   * TypeScript's default method, used as a member of a class and making it possible to work with Dependency Injection (DI).
   * @param primengConfig Instance of management of global configurations of components.
   * @param translateService The internationalization (i18n) library for Angular.
   */
  constructor(private injector: Injector) {
    this.primengConfig = injector.get<PrimeNGConfig>(PrimeNGConfig);
    this.translateService = injector.get<TranslateService>(TranslateService);

    this.translateService.setDefaultLang('pt');
    this.translate('pt');
  }

  /**
   * component initialization.
   */
  ngOnInit(): void {
    this.getTranslations();
    this.setConfigurations();
  }

  /**
   * Global configuration options of the components.
   */
  private setConfigurations() {
    this.primengConfig.ripple = true;

    this.primengConfig.zIndex = {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100, // tooltip
    };
  }

  /**
   * get translations for the application
   */
  private getTranslations() {
    this.translateService
      .get('init.hello')
      .subscribe((translations: string) => {
        console.log(translations);
      });
  }

  /**
   * Method used to define translation language
   * @param language language
   */
  translate(language: string) {
    this.translateService.use(language);
    this.translateService
      .get('primeng')
      .subscribe((res) => this.primengConfig.setTranslation(res));
  }
}
