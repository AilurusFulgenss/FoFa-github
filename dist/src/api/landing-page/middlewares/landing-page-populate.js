"use strict";
/**
 * `landing-page-populate` middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
const populate = {
    blocks: {
        on: {
            "blocks.hero": {
                populate: {
                    HeroPicture: {
                        populate: {
                            Image: {
                                fields: ["alternativeText", "url"]
                            }
                        }
                    }
                }
            },
            "blocks.section-heading": true,
            "blocks.card-grid": {
                populate: {
                    Card: {
                        populate: {
                            cardImage: {
                                fields: ["alternativeText", "url"]
                            }
                        }
                    }
                }
            },
            "blocks.section-youtube": {
                populate: {
                    Clip: true,
                }
            }
        }
    }
};
exports.default = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        strapi.log.info('In landing-page-populate middleware.');
        ctx.query.populate = populate;
        await next();
    };
};
