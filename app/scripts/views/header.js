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
    var model;
    var HeaderView = BaseView.extend({
        initialize: function () {
            model = this.model.getInstance();
            model.langCollection.once('change', this.render, this);
            model.on('change', this.render, this);
            this.render();
        },

        template: JST['app/scripts/templates/header.ejs'],

        render: function () {
            this.$el.html(this.template(model.attributes));
            this.renderNested(new NavigationView({model: this.model}), '.main-navigation');
        }
    });

    return HeaderView;
});
