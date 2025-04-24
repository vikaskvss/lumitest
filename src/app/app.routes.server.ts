import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return an array of product IDs to prerender
      // You can fetch this from your API or database
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
