/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

import { Directive } from '@angular/core';

import 'projektpro-leaflet-smoothwheelzoom/Leaflet.SmoothWheelZoom.js';

@Directive({
	selector: '[leafletSmoothZoom]',
})
export class LeafletSmoothZoomDirective {
	constructor() {}
}
