/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    Banner: {
      populate:{
        link: true
      }
    },
    
    Header: {
      populate:{
        Logo:{
          populate:{
           Logo:{
             fields:["alternativeText", "url"]
            }
          }
        },
        navItems: true,
        cta: true,
      }
    },
    
    Footer:{
      populate:{
        Icon:{
          populate:{
            Logo:{
              fields:["alternativeText", "url"]
            }
          }
        },
        map: true,
      }
    }
  }

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, {depth: null});
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
