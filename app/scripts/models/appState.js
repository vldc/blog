/*global define*/

define([
    'underscore',
    'backbone',
    'common/singleton'
], function (_, Backbone, singleton) {
    'use strict';

    var AppStateModel = Backbone.Model.extend({
        defaults: {
            currentPage: 'home'
        }
    });
    _.extend(AppStateModel, singleton);

    return AppStateModel;
});
