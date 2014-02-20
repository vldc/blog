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
            model = this.model.getInstance();
            model.get('appState').on('change', this.render, this);
            model.on('change', this.render, this);
        },

        template: JST['app/scripts/templates/navigation.ejs'],

        render: function () {
            this.$el.html(this.template(model.attributes));
            return this;
        },

        events: {
            'click .change-lang': 'changeLang'
        },

        changeLang: function (e) {
            var newLang = $(e.target).data('val');
            model.langName = newLang;
            model.changeLang();
        }
    });

    return NavigationView;
});
