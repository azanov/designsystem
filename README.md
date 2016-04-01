#PB Design System

###TL;DR:

Production-ready CSS file is `/dist/css/design_system.css`.

**IMPORTANT** instructions to upgrade to version 2.0 see the  [CHANGELOG](https://github.com/PBGUX/designsystem/blob/master/CHANGELOG.md).


###Installation

_Do not use vendor.js in your application! This is the minified/concatonated third party libraries for the Design System website. You must install/manage third party dependencies in your application._

**Bower Install**

Installation via [Bower](http://www.bower.io):

```shell
bower install pb-design-system --save
```
<br>

**NPM Install**

Installation via [npm](https://www.npmjs.com/):

```shell
npm install pb-design-system --save
```
<br>

**Traditional Install**

The Design System CSS processed and compacted CSS file is in the `/dist/css` directory. To use the design system in your project, copy all folders in the `dist` directory to your project. The fonts folder must be at at the same level as the css folder that contains the design_system.css or else the fonts will not be found.

For example:

```
myapp
|
-- assets
   |
   --css
   --fonts
   --images
```


###System Requirements
Previous versions of the Design System site are not archived, only the latest version is available online. Follow the instructions below to build and run locally.

You'll need:
- [Node](https://nodejs.org)
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby-sass](http://sass-lang.com/install)

######To run the Design System app locally:

- In Terminal, navigate (`cd`) into project directory and run `npm install`, then `bower install`.

- To run and view the source files run `gulp`. The project will then run out of the `/app` directory.

For change history, see [CHANGELOG.md](https://github.com/PBGUX/designsystem/blob/master/CHANGELOG.md)
