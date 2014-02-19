/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var PostsView = Backbone.View.extend({
        template: JST['app/scripts/templates/posts.ejs'],

        render: function () {
            this.$el.html(this.template());
        }
    });

    return PostsView;
});
