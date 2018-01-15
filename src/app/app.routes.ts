import { Routes } from '@angular/router';

import { SelectSynthComponent } from './select-synth/select-synth.component';

export const routes: Routes = [
  { path: '', redirectTo: 'select-synth', pathMatch: 'full'},
  { path: 'select-synth', component: SelectSynthComponent }

];
