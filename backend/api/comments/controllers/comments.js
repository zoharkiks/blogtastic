'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const { sanitizeEntity } = require('strapi-utils');

module.exports = {
   // this method is called when api to create comment is called
   async create(ctx) {
    // add user from the request and add it to the body of request
    ctx.request.body.author = ctx.state.user.id;
    // call the function to creating comment with data
    let entity = await strapi.services.comments.create(ctx.request.body);
    // return data for api after removing field which are not exported
    return sanitizeEntity(entity, { model: strapi.models.comments })
}};
