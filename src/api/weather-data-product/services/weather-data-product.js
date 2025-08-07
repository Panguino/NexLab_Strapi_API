'use strict';

/**
 * weather-data-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weather-data-product.weather-data-product');
