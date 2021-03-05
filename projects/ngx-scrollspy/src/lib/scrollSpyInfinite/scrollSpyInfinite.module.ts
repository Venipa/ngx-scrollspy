import { NgModule } from '@angular/core';

export * from './scrollSpyInfinite.directive';

import { ScrollSpyInfiniteDirective } from './scrollSpyInfinite.directive';

@NgModule({
  declarations: [ ScrollSpyInfiniteDirective ],
  exports: [ ScrollSpyInfiniteDirective ]
})
export class  ScrollSpyInfiniteModule {}
