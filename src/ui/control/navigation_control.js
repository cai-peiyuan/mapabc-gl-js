// @flow

import DOM from '../../util/dom';
import { extend, bindAll } from '../../util/util';
import DragRotateHandler from '../handler/drag_rotate';

import type Map from '../map';

type Options = {
    showCompass?: boolean,
    showZoom?: boolean
};

const defaultOptions: Options = {
    showCompass: true,
    showZoom: true
};

/**
 * A `NavigationControl` control contains zoom buttons and a compass.
 *
 * @implements {IControl}
 * @param {Object} [options]
 * @param {Boolean} [options.showCompass=true] If `true` the compass button is included.
 * @param {Boolean} [options.showZoom=true] If `true` the zoom-in and zoom-out buttons are included.
 * @example
 * var nav = new mapabcgl.NavigationControl();
 * map.addControl(nav, 'top-left');
 * @see [Display map navigation controls](http://www.mapabc.com/mapabc-gl-js/example/navigation/)
 * @see [Add a third party vector tile source](http://www.mapabc.com/mapabc-gl-js/example/third-party/)
 */
class NavigationControl {
    _map: Map;
    options: Options;
    _container: HTMLElement;
    _zoomInButton: HTMLElement;
    _zoomOutButton: HTMLElement;
    _compass: HTMLElement;
    _compassArrow: HTMLElement;
    _handler: DragRotateHandler;

    constructor(options: Options) {
        this.options = extend({}, defaultOptions, options);

        this._container = DOM.create('div', 'mapabcgl-ctrl mapabcgl-ctrl-group');
        this._container.addEventListener('contextmenu', (e) => e.preventDefault());

        if (this.options.showZoom) {
            this._zoomInButton = this._createButton('mapabcgl-ctrl-icon mapabcgl-ctrl-zoom-in', 'Zoom In', () => this._map.zoomIn());
            this._zoomOutButton = this._createButton('mapabcgl-ctrl-icon mapabcgl-ctrl-zoom-out', 'Zoom Out', () => this._map.zoomOut());
        }
        if (this.options.showCompass) {
            bindAll([
                '_rotateCompassArrow'
            ], this);
            this._compass = this._createButton('mapabcgl-ctrl-icon mapabcgl-ctrl-compass', 'Reset North', () => this._map.resetNorth());
            this._compassArrow = DOM.create('span', 'mapabcgl-ctrl-compass-arrow', this._compass);
        }
    }

    _rotateCompassArrow() {
        const rotate = `rotate(${this._map.transform.angle * (180 / Math.PI)}deg)`;
        this._compassArrow.style.transform = rotate;
    }

    onAdd(map: Map) {
        this._map = map;
        if (this.options.showCompass) {
            this._map.on('rotate', this._rotateCompassArrow);
            this._rotateCompassArrow();
            this._handler = new DragRotateHandler(map, {button: 'left', element: this._compass});
            DOM.addEventListener(this._compass, 'mousedown', this._handler.onMouseDown);
            this._handler.enable();
        }
        return this._container;
    }

    onRemove() {
        DOM.remove(this._container);
        if (this.options.showCompass) {
            this._map.off('rotate', this._rotateCompassArrow);
            DOM.removeEventListener(this._compass, 'mousedown', this._handler.onMouseDown);
            this._handler.disable();
            delete this._handler;
        }

        delete this._map;
    }

    _createButton(className: string, ariaLabel: string, fn: () => mixed) {
        const a = DOM.create('button', className, this._container);
        a.type = 'button';
        a.setAttribute('aria-label', ariaLabel);
        a.addEventListener('click', fn);
        return a;
    }
}

export default NavigationControl;
