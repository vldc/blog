/*global define*/

define([
    'underscore',
    'backbone',
    'collections/lang',
    'models/lang'
], function (_, Backbone, LangCollection, LangModel) {
    'use strict';

    var langCollection;

    var ConfigModel = Backbone.Model.extend({
        initialize: function () {
            var langs = {
                def: new LangModel()
            };

            this.langName = 'en_US';

            // sync here
            langCollection = new LangCollection([langs.def]);

            this.changeLang();
        },

        changeLang: function () {
            this.set('lng', langCollection.find(function (model) {
                return model.get('langName') === this.langName;
            }.bind(this)).get('values'));
        }
    });

    return ConfigModel;
});
