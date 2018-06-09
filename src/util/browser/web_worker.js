// @flow

import window from '../window';
import mapabcgl from '../../';

import type {WorkerInterface} from '../web_worker';

export default function (): WorkerInterface {
    return (new window.Worker(mapabcgl.workerUrl): any);
}
