/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var LangModel = Backbone.Model.extend({
        defaults: {
            'langName': 'en_US',
            'values': {
                'about': 'About',
                'home': 'Home',
                'mainTitle': 'Title',
                'menuTitle': 'Menu',
                'posts': 'Posts'
            }
        }
    });

    return LangModel;
});
