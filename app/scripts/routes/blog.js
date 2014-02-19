/*global define*/

define([
    'jquery',
    'backbone',
    'models/appState',
    'views/posts',
    'views/home',
    'views/about'
], function ($, Backbone, AppStateModel, PostsView, HomeView, AboutView) {
    'use strict';

    var appState = AppStateModel.getInstance();
    var defViewCfg = {el: $('.main-container')};
    var views = {
        'posts': new PostsView(defViewCfg),
        'home': new HomeView(defViewCfg),
        'about': new AboutView(defViewCfg)
    };

    var genRoute = function (routeName, options) {
        options = options || {
            model: null,
            fn: function (){}
        };

        return function () {
            options.fn();
            appState.set('currentPage', routeName);
            views[routeName].render();
        };
    };

    var BlogRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'posts': 'posts',
            'about': 'about'
        },

        home: genRoute('home'),
        posts: genRoute('posts'),
        about: genRoute('about')

    });

    return BlogRouter;
});
