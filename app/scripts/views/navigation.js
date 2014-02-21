/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NavigationView = Backbone.View.extend({
        initialize: function() {
            this.model.get('appState').on('change', this.render, this);
            this.model.on('change', this.render, this);
        },

        template: JST['app/scripts/templates/navigation.ejs'],

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        events: {
            'click .change-lang': 'changeLang'
        },

        changeLang: function (e) {
            var newLang = $(e.target).data('val');
            this.model.langName = newLang;
            this.model.changeLang();
        }
    });

    return NavigationView;
});
