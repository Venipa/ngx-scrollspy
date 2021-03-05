import { ModuleWithProviders, NgModule } from '@angular/core';
import { ScrollSpyService } from './core/service';
import { NgxScrollspyComponent } from './ngx-scrollspy.component';
import { ScrollSpyIndexService } from './scrollSpy';



@NgModule({
  declarations: [NgxScrollspyComponent],
  imports: [
  ],
  exports: [NgxScrollspyComponent]
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
