/*global define*/

define([
    'underscore',
    'backbone',
    'models/config',
    'models/appState'
], function (_, Backbone, ConfigModel, AppStateModel) {
    'use strict';

    var MainModel = ConfigModel.extend({
        initialize: function () {
            ConfigModel.prototype.initialize.apply(this);
        },
        defaults: {
            appState: AppStateModel.getInstance()
        }
    });

    return MainModel;
});
