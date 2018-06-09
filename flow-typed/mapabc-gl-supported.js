// @flow
'use strict';
declare module "@mapabc/mapabc-gl-supported" {
    declare type isSupported = (options?: {failIfMajorPerformanceCaveat: boolean}) => boolean;
    declare module.exports: isSupported;
}
