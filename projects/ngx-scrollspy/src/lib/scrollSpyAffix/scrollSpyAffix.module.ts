import { NgModule } from '@angular/core';

export * from './scrollSpyAffix.directive';

import { ScrollSpyAffixDirective } from './scrollSpyAffix.directive';

@NgModule({
  declarations: [ ScrollSpyAffixDirective ],
  exports: [ ScrollSpyAffixDirective ]
})
export class ScrollSpyAffixModule {}
