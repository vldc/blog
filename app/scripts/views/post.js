/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/main'
], function ($, _, Backbone, JST, MainModel) {
    'use strict';

    var PostView = Backbone.View.extend({
        tagName: 'li',
        className: 'post-item',
        template: JST['app/scripts/templates/post.ejs'],

        initialize: function () {
            this.model.set('lng', MainModel.getInstance().get('lng'));
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return PostView;
});
