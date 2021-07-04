require('./bootstrap');

import { InertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import Layout from './Components/Layout';

const app = document.getElementById('app');

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => {
      const page = import(`./Pages/${name}`).then(module => module.default);
      page.layout = page.layout || <Layout children={page} title={page.title} />;
      return page;
    }}
  />,
  app
);