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
        initialize: function () {
            this.model.langCollection.once('change', this.render, this);
            this.model.on('change', this.render, this);
            this.render();
        },

        template: JST['app/scripts/templates/header.ejs'],

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            this.renderNested(new NavigationView({model: this.model}), '.main-navigation');
        }
    });

    return HeaderView;
});
