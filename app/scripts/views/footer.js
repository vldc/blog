/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';
    var model;
    var FooterView = Backbone.View.extend({
        initialize: function () {
            model = this.model.getInstance();
            model.langCollection.on('change', this.render, this);
            model.on('change', this.render, this);
            this.render();
        },

        template: JST['app/scripts/templates/footer.ejs'],

        render: function () {
            this.$el.html(this.template(model.attributes));
        }
    });

    return FooterView;
});
