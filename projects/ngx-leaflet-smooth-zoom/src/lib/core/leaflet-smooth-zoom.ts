import * as L from 'leaflet';

declare module 'leaflet' {
	interface MapOptions {
		smoothWheelZoom?: boolean;
		smoothSensitivity?: number;
	}
}
