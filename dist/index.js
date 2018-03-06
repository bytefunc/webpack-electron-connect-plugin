"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electronConnect = require("electron-connect");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElectronConnectPlugin = function () {
    function ElectronConnectPlugin(obj) {
        _classCallCheck(this, ElectronConnectPlugin);

        obj = obj || {};
        if (obj.hasOwnProperty("type") && obj.type !== "reload" && obj.type !== "restart") {
            throw new Error("webpack-electron-connect-plugin: type value error");
        }

        this.type = obj.type || "reload";
        this.options = obj.options || {};

        this.electron = _electronConnect.server.create(this.options);
        this.start = false;
    }

    _createClass(ElectronConnectPlugin, [{
        key: "apply",
        value: function apply(compiler) {
            var _this = this;

            compiler.plugin("done", function (stats) {
                if (!_this.start) {
                    _this.electron.start();
                    _this.start = true;
                } else {
                    if (_this.type === "reload") {
                        _this.electron.reload();
                    } else {
                        _this.electron.restart();
                    }
                }
            });
        }
    }]);

    return ElectronConnectPlugin;
}();

exports.default = ElectronConnectPlugin;
module.exports = exports["default"];