/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var PostView = Backbone.View.extend({
        template: JST['app/scripts/templates/post.ejs']
    });

    return PostView;
});
