import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const firstTocItem = context.locals.starlightRoute.toc?.items[0];

  if (firstTocItem?.slug === '_top') {
    firstTocItem.text = context.locals.starlightRoute.entry.data.title;
  }
});
