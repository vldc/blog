/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/main',
    'collections/posts',
    'views/post'
], function ($, _, Backbone, JST, MainModel, PostsCollection, PostView) {
    'use strict';

    var PostsView = Backbone.View.extend({
        initialize: function () {
            this.posts = new PostsCollection();
            this.posts.fetch({
                success: this.render.bind(this)
            });
            MainModel.getInstance().on('change', this.render, this);
        },

        template: JST['app/scripts/templates/posts.ejs'],

        render: function () {
            this
                .renderPosts()
                .renderPostsList();

            return this;
        },

        renderPostsList: function () {
            this.posts.each(function (post) {
                var postView = new PostView({model: post});
                this.$el.append(postView.el);
            }, this);
            return this;
        },

        renderPosts: function () {
            this.$el.html(this.template(MainModel.getInstance().attributes));
            return this;
        }
    });

    return PostsView;
});
