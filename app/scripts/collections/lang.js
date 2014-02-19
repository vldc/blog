/*global define*/

define([
    'underscore',
    'backbone',
    'models/lang'
], function (_, Backbone, LangModel) {
    'use strict';

    var LangCollection = Backbone.Collection.extend({
        model: LangModel
    });

    return LangCollection;
});
