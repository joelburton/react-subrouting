React Subrouting
================

This is a small demo of a site, Spice.ly, that demonstrates top-level
routes and further down routes.

Our Components
--------------

![Puffin Components](./meta/puffins.svg)

Our Routes
----------

- _exact_ */* renders `<Homepage />`

- _non-exact_ */about* renders `<AboutSection />`

- _else_ - redirect to `<Homepage />`

The about section has self-contained routing to:

- _exact_ */about* - renders nothing (already rendered by`<AboutSection />`)

- _exact_ */about/jobs* renders `<JobsList />`

- _exact_ */about/team* renders `<Team />`

- _else_ - redirect to `<AboutSection />`
