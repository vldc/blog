/*global define*/

define([
], function () {
    'use strict';

    return {
        getInstance: function () {
            var This = this;
            if (This._instance === undefined) {
                This._instance = new This();
            }
            return This._instance;
        }
    };
});
