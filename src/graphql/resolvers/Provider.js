'use strict';

const models = require('../../../database/models');

const ProviderController = {
    index() {
        const Provider = models.Provider;
        return Provider.findAll();
    }
}

module.exports = ProviderController;