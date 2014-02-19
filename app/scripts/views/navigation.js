/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var model;
    var NavigationView = Backbone.View.extend({
        initialize: function() {
            model = new this.model();
            model.get('appState').on('change',this.render,this);
        },

        template: JST['app/scripts/templates/navigation.ejs'],

        render: function () {
            this.$el.html(this.template(model.attributes));
            return this;
        }
    });

    return NavigationView;
});
