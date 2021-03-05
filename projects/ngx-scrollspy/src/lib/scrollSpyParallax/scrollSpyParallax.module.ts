import { NgModule } from '@angular/core';

export * from './scrollSpyParallax.directive';

import { ScrollSpyParallaxDirective } from './scrollSpyParallax.directive';

@NgModule({
  declarations: [ ScrollSpyParallaxDirective ],
  exports: [ ScrollSpyParallaxDirective ]
})
export class  ScrollSpyParallaxModule {}
