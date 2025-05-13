"use strict";
/**
 * `global-populate` middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
const populate = {
    Banner: {
        populate: {
            link: true
        }
    },
    Header: {
        populate: {
            Logo: {
                populate: {
                    Logo: {
                        fields: ["alternativeText", "url"]
                    }
                }
            },
            navItems: true,
            cta: true,
        }
    },
    Footer: {
        populate: {
            Icon: {
                populate: {
                    Logo: {
                        fields: ["alternativeText", "url"]
                    }
                }
            },
            map: true,
        }
    }
};
exports.default = (config, { strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        console.dir(ctx.query, { depth: null });
        ctx.query.populate = populate;
        strapi.log.info('In global-populate middleware.');
        await next();
    };
};
