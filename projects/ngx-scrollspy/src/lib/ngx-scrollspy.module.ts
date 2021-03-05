import { ModuleWithProviders, NgModule } from '@angular/core';
import { ScrollSpyElementDirective } from './core/element.directive';
import { ScrollSpyService } from './core/service';
import { ScrollSpyDirective } from './core/window.directive';
import { NgxScrollspyComponent } from './ngx-scrollspy.component';
import { ScrollSpyIndexService } from './scrollSpy';



@NgModule({
  declarations: [NgxScrollspyComponent, ScrollSpyDirective, ScrollSpyElementDirective],
  imports: [
  ],
  exports: [NgxScrollspyComponent, ScrollSpyDirective, ScrollSpyElementDirective]
})
export class NgxScrollSpyModule {

  static forRoot(): ModuleWithProviders<NgxScrollSpyModule> {
    return {
      ngModule: NgxScrollSpyModule,
      providers: [
        ScrollSpyService,
        ScrollSpyIndexService
      ]
    };
  }
}
