/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';
    var FooterView = Backbone.View.extend({
        initialize: function () {
            this.model.langCollection.on('change', this.render, this);
            this.model.on('change', this.render, this);
            this.render();
        },

        template: JST['app/scripts/templates/footer.ejs'],

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    return FooterView;
});
