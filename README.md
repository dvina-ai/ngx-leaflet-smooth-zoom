# @dvina/ngx-leaflet-smooth-zoom

smooth wheel zoom for leaflet in angular. Using [projektpro-leaflet-smoothwheelzoom](https://github.com/mutsuyuki/Leaflet.SmoothWheelZoom)

This plugin provide smooth zoom ux like Google map.

## Install

Install the package and its peer dependencies via npm (or yarn):

```shell
npm install leaflet
npm install @dvina/ngx-leaflet-smooth-zoom
```

### Usage

```
var map = L.map('map', {
  scrollWheelZoom: false, // disable original zoom function
  smoothWheelZoom: true,  // enable smooth zoom
  smoothSensitivity: 1,   // zoom speed. default is 1
});
```

![demo](https://github.com/mutsuyuki/Leaflet.SmoothWheelZoom/blob/master/demo_gif/demo.gif 'demo')

### Demo

[Demo](https://mutsuyuki.github.io/Leaflet.SmoothWheelZoom/)
