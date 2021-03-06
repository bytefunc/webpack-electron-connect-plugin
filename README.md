# webpack-electron-connect-plugin

webpack plugin to reload and restart Electron

requires electron-connect package

## Installation

```javascript
npm install --save-dev electron-connect webpack-electron-connect-plugin

or

yarn add --dev electron-connect webpack-electron-connect-plugin
```

## Usage

Electron renderer process

```html
<html>
<body>

<!-- add script -->
<script>require('electron-connect').client.create()</script>

</body>
</html>
```

webpack.config

```javascript
const ElectronConnectPlugin = require("webpack-electron-connect-plugin");

{
    // ...
    plugins: [
        new ElectronConnectPlugin({
            type: "reload", // "reload" or "restart"
            options: {}
        })
    ];
}
```

use webpack watch option

```cli
webpack -w
```

## API

### type

```javascript
// Not kill Electron process. reload Electron
{
    type: "reload",
}

// Kill Electron process. restart Electron
{
    type: "restart",
}
```

### options

check [server.create([options])](https://www.npmjs.com/package/electron-connect) from npm electron-connect page

```javascript
// example
{
    options: {
        port: 30080, // WebSocket server port (default: 30080)
    }
}
```

## License

MIT
