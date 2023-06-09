/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

import { NgModule } from '@angular/core';

import { LeafletSmoothZoomDirective } from './core/leaflet-smooth-zoom.directive';

@NgModule({
	exports: [LeafletSmoothZoomDirective],
	declarations: [LeafletSmoothZoomDirective],
})
export class LeafletSmoothZoomModule {}
