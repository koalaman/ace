define(function(require, exports, module) {
"use strict";

var oop = require("ace/lib/oop");
var Mirror = require("ace/worker/mirror").Mirror;

var ShellcheckWorker = exports.ShellcheckWorker = function(sender) {
    Mirror.call(this, sender);
    this.setTimeout(2000);
    this.setOptions();
};

// Mirror is a simple class which keeps main and webWorker versions of the document in sync
oop.inherits(ShellcheckWorker, Mirror);

(function() {

    this.onUpdate = function() {
        // I have no idea how ACE or Javascript works, so this worker
        // just posts the document back to the shell mode for it to handle.
        var script = this.doc.getValue();
        this.sender.emit("update", script);
    };
}).call(ShellcheckWorker.prototype);

});
