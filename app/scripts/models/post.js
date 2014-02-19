/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var PostModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return PostModel;
});
