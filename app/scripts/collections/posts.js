/*global define*/

define([
    'underscore',
    'backbone',
    'models/post',
], function (_, Backbone, PostModel) {
    'use strict';

    var PostsCollection = Backbone.Collection.extend({
        model: PostModel
    });

    return PostsCollection;
});
