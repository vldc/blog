/*global define*/

define([
    'underscore',
    'backbone',
    'jquery',
    'common/singleton',
    'collections/lang',
    'models/lang'
], function (_, Backbone, $, singleton, LangCollection, LangModel) {
    'use strict';

    var i = 0;
    var ConfigModel = Backbone.Model.extend({
        initialize: function () {
            var langs = ['pl_PL', 'en_US'];
            var callCount = _.after(langs.length, this.changeLang);
            var promises = [];

            var models = langs.map(function (langName) {
                var langModel = new LangModel().set('langName', langName);
                promises.push(langModel.fetch());

                return langModel;
            }, this);

            _.extend(this, {
                langName: 'pl_PL',
                langCollection: new LangCollection(models),

                changeLang: function () {
                    var currLangModel = this.langCollection.find(function (model) {
                        return model.get('langName') === this.langName;
                    }.bind(this));

                    this.set('lng', currLangModel.attributes);
                }
            });

            this.set('lng', {});

            $.when.apply(promises).done(function () {
                this.changeLang();
            }.bind(this));
        }
    });
    _.extend(ConfigModel, singleton);

    return ConfigModel;
});
