/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../src/App';

// In a real setup, you'd read it from webpack build stats.
let assets = {
  'main.js': '/main.js',
  'main.css': '/main.css',
};

module.exports = function render(url, res) {
  res.send(
    '<!DOCTYPE html>' +
    renderToString(
      <App assets={assets} />
    )
  );
};
