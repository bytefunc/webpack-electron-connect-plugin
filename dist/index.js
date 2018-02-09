"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electronConnect = require("electron-connect");

class ElectronConnectPlugin {
    constructor(obj) {
        obj = obj || {};
        if (obj.hasOwnProperty("type") && obj.type !== "reload" && obj.type !== "restart") {
            throw new Error("webpack-electron-connect-plugin: type value error");
        }

        this.type = obj.type || "reload";
        this.options = obj.options || {};

        this.electron = _electronConnect.server.create(this.options);
        this.start = false;
    }

    apply(compiler) {
        compiler.plugin("done", stats => {
            if (!this.start) {
                this.electron.start();
                this.start = true;
            } else {
                if (this.type === "reload") {
                    this.electron.reload();
                } else {
                    this.electron.restart();
                }
            }
        });
    }
}
exports.default = ElectronConnectPlugin;