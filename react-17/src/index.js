/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {hydrate} from 'react-dom';
import App from './App';

hydrate(document, <App assets={window.assetManifest} />);
