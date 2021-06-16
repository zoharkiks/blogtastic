const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

   async comments(ctx) {
    let entity;

    // ctx.request.body.author = ctx.state.user.id;
    // ctx.request.body.article = ctx.params.slug;
    // console.log(ctx.request.body);
    entity = await strapi.services.comments.create(ctx.request.body);

    return sanitizeEntity(entity, { model: strapi.models.comments });
  },

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.articles.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.articles });
  },


  
};
