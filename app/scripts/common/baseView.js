/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
], function ($, _, Backbone) {
    'use strict';

    var BaseView = Backbone.View.extend({
        renderNested: function (view, selector) {
            var $element = (selector instanceof $) ? selector : this.$(selector);
            view.setElement($element).render();
        }
    });

    return BaseView;
});
