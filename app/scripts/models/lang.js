/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var LangModel = Backbone.Model.extend({
        defaults: {
            'langName': 'en_US',
            'values': {}
        },

        url: function () {
            return '/i18n/' + this.attributes.langName + '.json';
        }
    });

    return LangModel;
});
