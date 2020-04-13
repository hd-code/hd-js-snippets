"use strict";
/*! worker-template v1.0.0 from hd-snippets-js | MIT | © Hannes Dröse https://github.com/hd-code/hd-snippets-js */Object.defineProperty(exports,"__esModule",{value:!0});var worker_threads_1=require("worker_threads");function main(r){for(var e=0,t=0;t<r.a;t++)for(var n=0;n<r.b;n++)e+=1;return e}var Script=function(){function r(){var e=this;this.callback=function(){},this.worker=new worker_threads_1.Worker(__filename),this.worker.on("message",function(r){e.running=!1,e.callback(r)}),this.running=!1}return r.prototype.registerCallback=function(r){this.callback=r},r.prototype.run=function(r){this.running=!0,this.worker.postMessage(r)},r.prototype.isRunning=function(){return this.running},r.prototype.delete=function(){this.worker.terminate()},r}();function onMessage(r){var e=main(r);null!==worker_threads_1.parentPort&&void 0!==worker_threads_1.parentPort&&worker_threads_1.parentPort.postMessage(e)}exports.default=Script,worker_threads_1.isMainThread||null===worker_threads_1.parentPort||void 0===worker_threads_1.parentPort||worker_threads_1.parentPort.on("message",onMessage);