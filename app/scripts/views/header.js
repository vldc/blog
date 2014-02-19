/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'common/baseView',
    'views/navigation'
], function ($, _, Backbone, JST, BaseView, NavigationView) {
    'use strict';

    var HeaderView = BaseView.extend({
        template: JST['app/scripts/templates/header.ejs'],

        initialize: function () {
            this.navigationView = new NavigationView({
                model: this.model
            });
        },

        render: function () {
            var model = new this.model();
            this.$el.html(this.template(model.attributes));
            this.renderNested(this.navigationView, '.main-navigation');
        }
    });

    return HeaderView;
});
