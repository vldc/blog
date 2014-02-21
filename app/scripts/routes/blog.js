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
        'posts': function () {
            return new PostsView(defViewCfg);
        },
        'home': function () {
            return new HomeView(defViewCfg);
        },
        'about': function () {
            return new AboutView(defViewCfg);
        }
    };
    var instantiateView = function (viewName) {
        return views[viewName]();
    };

    var genRoute = function (routeName, options) {
        options = options || {
            model: null,
            fn: function (){}
        };

        return function () {
            options.fn();
            appState.set('currentPage', routeName);
            instantiateView(routeName).render();
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
