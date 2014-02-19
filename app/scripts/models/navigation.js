/*global define*/

define([
    'underscore',
    'backbone',
    'models/main'
], function (_, Backbone, MainModel) {
    'use strict';

    var NavigationModel = MainModel.extend({
        initialize: function () {
            MainModel.prototype.initialize.apply(this);
        }
    });

    return NavigationModel;
});
