/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone',
    'routes/blog',
    'models/main',
    'views/header',
    'views/footer'
], function (Backbone, Router, MainModel, HeaderView, FooterView) {

    var router = new Router();
    var headerView = new HeaderView({
        el: $('.main-header'),
        model: MainModel,
    });
    var footerView = new FooterView({
        el: $('.main-footer'),
        model: MainModel
    });

    Backbone.history.start();
});
