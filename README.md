# Everest Precise Theme

This provides the styling and layout for Everest Engineering [Precise](http://precise.io) Portfolios and Profiles.

## So you want to theme a Portfolio or Profile

Great!  Here's how you do it:

1. Install development dependencies
3. Run the development server
4. Create your desired HTML markup and CSS
5. Package as a NPM
6. Deploy

### Getting your development environment setup

After cloning this repository, you need to install:

* [Node.js](http://nodejs.org/)
* [NPM](https://www.npmjs.com/)

With that done:

1. Change to the directory your copied this repository.
2. Install project dependencies using `npm install`
3. Run the developer server with `npm start`
4. Open http://localhost:9001/profile in your browser to see a Profile with your styling.
5. Open http://localhost:9001/portfolio in you browser to see a Portfolio with your styling.

## Make it look good

With your development environment up and running you're ready to begin theme creation.

### What goes where

It's pretty simple:

* `package.json`: This file describes your NPM package.  The most important fields
and the `name` and `version`. If you have any dependencies such as a template engine
include them in the `dependencies` field. **Note** We recommend using
``bundledDependencies``.  This removes the need to installed dependencies from
NPM at runtime resulting in faster install and no downtime should NPM go down.
As with any software package you must bump the version on every release.

* `index.js`: This file is really important.  It's the glue between
the incoming JSON and your markup / css.   You must provide 2 functions: `renderProfile()`
and `renderPortfolio()`.  Both functions take a single argument - either the
Profile JSON object or the Portfolio JSON object. The job of this file is to
apply the JSON to the template and include relevant CSS.

* `profile.template`: This file contains the HTML Markup needed for your Profile.  You
can use from favourite templating language or stick with the one we used -- Handlebars.

* `portfolio.template`: Same as `profile.template` but for Portfolios.

Also worthy of a mention is the example Profile and Portfolio JSON. `exampleProfile.json`
and `examplePortfolio.json`.  These files provide example data during development. You
can modify to suit your needs but you must ensure they conform to the Precise
schema.

### Images

You may want to include images in the theme you are developing. There are two options:

1. **Reference assets from an external URL.** You may have these images already hosted elsewhere. Simply reference them via their HTTP URL.
```
<img src="http://external.com/images/example/png" />
```
2. **Use Base64 encoding in CSS.** You can embed images directly into your CSS. Note that there are some [limitations](http://css-tricks.com/data-uris/) to using this approach.
```
.image {
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIA...);
}
```

## Deployment

When you are done with **making it look good** it's time to deploy:

1. Bump the version in your package.json file.
2. Package into tarball using

    $ npm pack

Once packaged:

1. Login to [Precise](http://profiles.precise.io)
2. Open the theme page /theme
3. Upload your new release from your local machine.
4. After a short pause the theme should be available to preview or select.
5. Preview the theme to ensure all is well before making permanent.
6. Rinse and repeat as required.


