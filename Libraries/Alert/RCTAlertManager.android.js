/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import NativeDialogManagerAndroid from '../NativeModules/specs/NativeDialogManagerAndroid';

function emptyCallback() {}

module.exports = {
  alertWithArgs: function (args, callback) {
    // TODO(5998984): Polyfill it correctly with DialogManagerAndroid
    if (!NativeDialogManagerAndroid) {
      return;
    }

    NativeDialogManagerAndroid.showAlert(
      args,
      emptyCallback,
      callback || emptyCallback,
    );
  },
};
