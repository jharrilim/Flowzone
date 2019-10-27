'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/services.html#core-services)
 * to customize this service
 */

module.exports = {
    hot: (params) => {
        return Composition.find()
        .orderBy('Views', 'desc')
        .limit(10);
    }
};
