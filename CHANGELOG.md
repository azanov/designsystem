## Release Notes

### 2.5.0 -- February 29, 2016

#### CSS Changes

**BREAKING CHANGES**

* the footer template has been updated to use the new "Branded Footer with Copyright" version on the [Headers and Footers page](http://guxstaging.pbi.global.pvt/design_system/#/patterns/headersfooters). It is also now updated for proper display on phones. There are updated alfternate header and footer designs there as well.
* all "busy" spinners have been synchroized to use the Font Awesome "slotted circle".  This includes progress buttons and spinners, See [Web > User Feedback](http://guxstaging.pbi.global.pvt/design_system/#/feedback#process) for samples. This requires you to use the updates directive at `app/core/directives/pb-button-progress.directive.js` if you use one of these buttons. The code below will add the correct spinner to the [angular-loading-bar](http://chieffancypants.github.io/angular-loading-bar/) via the spinnerTemplate:
  ```javascript
  angular.module('app')
  .config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><i class="fa fa-circle-o-notch fa-spin spinner"></i></div>';
  });
  ```
* The signin pages and its children have been updated with a new layout, approved footer/copyright line (you will need to add the correct links to your privacy policy and T&C) and new HTML structure, below. See [Web > Patterns > Sign In & Sign Up](http://guxstaging.pbi.global.pvt/design_system/#/patterns/signinup)

```html
<body class="site fullscreen signin">
  <div class="signin-wrapper">

    <div class="signin-body">
      <a class="signin-pb-logo" href="http://www.pb.com"></a>

      <div class="signin-box">
        <h1 class="signin-heading">Product Name<sup>™</sup></h1>
        <h5 class="signin-subheading">Product tag line</h5>
        <!-- your sign in content here -->
      </div>
    </div>

    <div class="signin-footer">
      Pitney Bowes Inc. the Corporate Logo and Product Name<sup>™</sup> are trademarks of Pitney Bowes Inc. or a subsidiary. All other marks are the intellectual property of their respective owners. <a href="">Privacy</a>&nbsp;|&nbsp;<a href="">Terms and Conditions</a>&nbsp;<a>© 2016 Pitney Bowes Inc. All rights reserved.</a>
    </div>
  </div>
</body>
```


**Non-breaking Changes**

* Updated all magenta gradients (such as the header) to a 2-color header, PB Blue to PB Magenta. There is now an extend mixin you can use when you need the gradient in `_mixins.scss`

```scss
%gradient {
  background-image: linear-gradient(90deg, $pb-blue 0%, $pb-magenta 100%);
}
```
* Footer copyright updated to 2016 via `new Date()`, no more manual updates
* The "angular loading bar" plugin has been updated to 0.8.0, and the loading bar itself has been changed from white to turquoise in the css. See [Web > User Feedback](http://guxstaging.pbi.global.pvt/design_system/#/feedback#process).
* We are now on Angular JS 1.4.9.  See below for all other library updates.
* The "hamburger menu" on the phone version of the CSS has been updated to have a tranparent background. This is consistent with the new headers and the new hamburger menu module described below.


**Additions**

* There are [new designs for the headers](http://guxstaging.pbi.global.pvt/design_system/#/patterns/headersfooters) that include revised content and iconography for the Utility menus (on the right).
* There are also new footer alternatives that include the approved layouts for terms & conditions and "contact us". Contact Us is  a link that reveals alternate contact methods. There is logic provided for offline hours display.
* A hamburger menu module has been added. See samples under Web > Patterns > Hamburger Menu. There is a "slide" version and a "push" version.

####Website Changes

* Unused images have been removed from the Design System file system
* Content has been promoted to the top-level navigation bar and new copy has been added
* Several libraries have been updated in `bower.json`

####Updated Libraries

For version numbers, please see `bower.json` and `package.json`

* angular-chart.js
* highlightjs
* angular-daterangepicker
* browser-sync
* angular-loading-bar
* angular-utils-pagination
* angular-bootstrap
* angular 1.4.9
* angular-translate-storage-cookie
* angular-translate-loader-partial
* angular-translate-storage-local
* angular-dynamic-locale
* angular-ui-select
* angular-toaster

#### Other Tools
- updated Sketch UI Kit to 2.5.0, see [Resources > Tools](http://guxstaging.pbi.global.pvt/design_system/#/resources/tools)

#### Thanks to the following contributors and bug reporters:
Andy Grossman, Ania Mastriano, Cameron Chu, Erik Balisi, Gaurav Varshney, Henry Rogando, Jim Norris, Joan Doutney, Kathy Belleau, Kevin Bodie, Kyle Pause, Manish Kukreja, Rob Woods, Sara Conklin

### 2.4.0 -- January 29, 2016

#### CSS changes

**BREAKING CHANGES**

- None.

**Non-breaking Changes**

- fixed enhanced checkboxes misaligned in `.form-horizontal`. Our _first pull request_ by Nisha Rana (closes [#62](https://github.com/PBGUX/designsystem/issues/62)).
- fixed Web > Foundation > Split Views margin space above footer, vertical spacing and double lines showing on last 2 examples. Note that Split Views are desktop only.
- changed linear gradients from CSS "background" to "background-image", old way worked but was technically incorrect

**Additions**

- added items in Web > Elements > Containers that previously were images, have been converted to live code
  - Gallery
  - Cards
  - Widgets: Data Styles
  - Widgets: Category Styles
- added animated SVG "spinner" in Web > Elements > User Feedback > Process Indicators

#### Website Changes

- fixed incorrect color values in the Web > Foundation > Typography > Navigation table.
- added [FAQ section](https://github.com/PBGUX/designsystem/wiki) to Github and link on homepage.
- Web > Elements > User Feedback > Process Indicators:
  - updated and copy has been revised and expanded
  - changed progress spinner buttons to correctly retain "normal" appearance whilst "waiting" although the button is actually disabled during this time. (they used to appear "disabled")
- added descriptive copy to the Web > Foundation > Grid
- removed alert type "tip" from Web > Elements > User Feedback due to Globalization requirements, use Note or Help examples as an alternative
- updated libraries:
  - angular-loading-bar v0.8.0

#### Other Tools
- updated Sketch and Illustrator UI Kits to 2.4.0, see Resources > Tools

#### Thanks to the following contributors and bug reporters:

Globalization Team, Joan Doutney, Nick Roberts, Nisha Rana, Jayachandra Madarapu, Sam Swartz, Adam Czarnik, Andy Grossman, Cassie Gunn, Jim Norris



### 2.3.0 -- December 15, 2015

#### CSS changes

**BREAKING CHANGES**

- footer html structure has been simplified and now correctly supports mobile view. Please see the following structure and examples on the Web > Headers and Footers

  ``` html
  <div class="footer-wrapper">
  <div class="container">
    <footer>

    <div>
      <a href="http://www.pb.com"><i class="pb-footer-logo gradient"></i></a><span class="copyright">© 2015 Pitney Bowes Inc. All rights reserved.</span>
    </div>

    <!-- Legal -->
    <div>
      <ul class="list-unstyled list-inline legal">
        <li><a href="" target="_blank">Terms and Conditions</a></li>
        <li><a href="" target="_blank">Privacy Policy</a></li>
        <li><a href="" target="_blank">Link</a></li>
        <li><a href="" target="_blank">Link</a></li>
      </ul>
    </div>

    <!-- Social -->
    <div>
      <ul class="list-unstyled list-inline social">
        <li><a class="twitter" href="https://twitter.com/pitneybowes" target="_blank"><svg>...</svg></a></li>
        <li><a class="facebook" href="http://www.facebook.com/pitneybowes" target="_blank"><svg>...</svg></a></li>
        <li><a class="linkedin" href="http://www.linkedin.com/company/pitney-bowes" target="_blank"><svg>...</svg></a></li>
        <li><a class="google-plus" href="http://www.youtube.com/user/PitneyBowesInc" target="_blank"><svg>...</svg></a></li>
      </ul>
    </div>

  </footer>
  </div>
  </div>
  ```

**Non-breaking changes**

- fixed active hover state of tile buttons
- fixed focus state of nav items, should be white
- tertiary (pill) buttons include all states
- fixed default Bootstrap mobile menu (updated icon and menu styling), now fully responsive
- fixed panel headers, added guidance for panel alerts in Web > Elements > User Feedback (NOTE: default Bootstrap contextual alternative classes should not be used with panels) (closes [#47](https://github.com/PBGUX/designsystem/issues/47))
- fixed table drawer caret color (closes [#51](https://github.com/PBGUX/designsystem/issues/51))
- changed text color to #4e4e4e on Contextual Backgrounds section - #717171 does not have high enough contrast, see Web > Foundation > Helpers (closes [#42](https://github.com/PBGUX/designsystem/issues/42))
- fixed ui-bootstrap alerts, was showing double close icons (closes [#38](https://github.com/PBGUX/designsystem/issues/38))

**Additions**

- added animation principles under Web > Foundation > Animation
- added guidance for help tooltips and popovers in Web > Elements > Help Prompts
- added ngTagsInput control, see Web > Elements > UI Controls > Dropdowns > Advanced Select Menus

#### Other Tools

- Illustrator
  - updated Illustrator DS UI Kit to 2.3.0, see Resources > Tools

#### Website changes

- Web > Foundation >Writing > Resources: update title caps guidance
- added link to [titlecapitalization.com](http://titlecapitalization.com) under Resources > Tools > Other Resources
- updated images with copy changes in Web > Patterns > Error Pages
- revised jump menus to link to anchor tags, will enable deep linking for future updates
- added guidance for spot alert placements, see Web > Elements > User Feedback > Alert Positioning
- updated dropdown menu capitalization to follow guidance under Web > Headers and Footers (closes [#58](https://github.com/PBGUX/designsystem/issues/58))
- fixed Capitalization copy error (closes [#57](https://github.com/PBGUX/designsystem/issues/57))
- fixed green color hex code (closes [#48](https://github.com/PBGUX/designsystem/issues/48))
- updated typography specifications (closes [#52](https://github.com/PBGUX/designsystem/issues/52))
- used correct icons in spot alerts on Web > Elements > User Feedback > Spot Alerts (closes [#49](https://github.com/PBGUX/designsystem/issues/49))
- updated bg-4 hex color code on Web > Foundation > Color (closes [#43](https://github.com/PBGUX/designsystem/issues/43))
- page HTML title tag changed to Design System (removed 2.0)
- updated libraries:
  - gulp usemin v0.3.15
  - angular-dynamic-locale 0.1.28
  - angular-datatables v0.5.1
  - angular-utils-pagination v0.9.2
  - angular-daterangepicker to v0.2.1
  - angular-hilightjs to v0.5.1
  - hilightjs to v8.9.1
- added cache busting for css/js in gulp build

#### Thanks to the following contributors and bug reporters:

Jayachandra Madarapu, Dustin Clark, ni10go, jrodguitar, James Crisp, Jim Norris, Sikhar Jyoti Saikia, Sam Swartz, Cameron Chu, Ron Cianfaglione, Andy Grossman, Cassie Gunn, Yuka Kurihara, Andrew Wong, Adam Czarnik, Ania Mastriano, Nisha Rana, John Winkelman







### 2.2.0 -- October 30, 2015

The Design System is now available via [Bower](http://bower.io). See the [bower-designsystem](https://github.com/PBGUX/bower-designsystem) repo for more information and installation.



###### CSS changes

**BREAKING CHANGES**

- updated angular-daterange-picker to v0.2.0 and now supports Bootstrap Daterangepicker v2+ (prior versions of CSS is not supported)

- Enhanced input and radio buttons use [WTF forms](http://wtfforms.com/) as a base to support accessibility keyboard interaction and focus states. The markup structure and class names have changed as follows:

  ​

  <!-- Stacked checkboxes -->

  <div class="controls-stacked">

  <label class="control checkbox">

```
<input type="checkbox">

<span class="control-indicator"></span> Check this custom checkbox
```

  </label>

  <label class="control checkbox disabled">

```
<input type="checkbox" disabled="disabled">

<span class="control-indicator"></span> But not this custom checkbox
```

  </label>

  </div>

<div class="controls-inline">

  <label class="control checkbox">

<input type="checkbox">

<span class="control-indicator"></span> Custom checkbox

  </label>

  <label class="control checkbox">

<input type="checkbox">

<span class="control-indicator"></span> Custom checkbox

  </label>

</div>



<!-- Stacked radio buttons -->

<div class="controls-stacked">

  <label class="control radio">

<input id="radio1" name="radio" type="radio">

<span class="control-indicator"></span> Toggle this custom radio

  </label>

  <label class="control radio disabled">

<input id="radio2" name="radio" type="radio">

<span class="control-indicator"></span> Or toggle this other custom radio



  </label>

</div>

<!-- Inline radio buttons -->

<div class="controls-inline">

  <label class="control radio">

<input id="radio11" name="radio" type="radio">

<span class="control-indicator"></span> Custom radio

  </label>

  <label class="control radio">

<input id="radio22" name="radio" type="radio">

<span class="control-indicator"></span> Or Custom radio

  </label>

</div>



**NON-BREAKING CHANGES**

- fa-lg issue with pb-font icons (fixes [#35](https://github.com/PBGUX/designsystem/issues/35))

- primary button disabled state fill slightly darkened

- secondary disabled button now has no fill color

- .site-content calc() correctly calculates footer placement

- color changes:

  - cyan 300 from #66C3EC to #66C4D9
  - cyan 700 from #007CB2 to #007D99
  - yellow 500 from #EEB700 to #EDB700

- adjusted header menu items for consistency

  - mega menu: removed item animation, indent titles and items to left align
  - single menu: reduce vertical padding

- .tile-button no longer has image embedded in css (.logo-button-usps removed), the image should be added in markup

  ​```html

  <button type="button" name="button" class="btn btn-default tile-button">

  <img src="assets/images/logo-usps.png" alt="">

  </button>

  \```

**ADDITIONS**

- added Web > Patterns > Splitviews:  5 design styles with 3 variations

- added styling to default Bootstrap breadcrumbs in Web > Buttons > Breadcrumbs, example markup:

  ``` html
  <ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
  </ol>
  ```

###### Website changes

- added web and mobile roadmaps in embedded iframes
- added Resources > Gallery with InVision link for images of application samples
- upgrade angular ui-select to v13.2
- upgrade angular-bootstrap to v14.3
- fixed references to bootstrap to use bower_components
- added landing pages for web and mobile buttons from homepage
- added version numbers for web and mobile to the homepage header
- change text description for BG3-5 on color page:
  - BG3 - #EAEDF8 - Summary Tables / Vertical Dividers / Hover States
  - BG4 - #D8DBF1 - Selected States
  - BG5 - #C5CBE3 - Data Cell Borders
- Color Selection portion of Color page had incorrect text labels (colors in CSS were correct):
  - Change PB Blue from #72BF44 to #3E53A4
  - Change 700 from #5A9836 to #314183
  - Change 500 from #72BF44 to #3E53A4
  - Change 300 from #F5A66D to #8B98C8
  - Change PB Magenta from #72BF44 to #CF0989
  - Change Error Color from #E70600 to #DC0000
- fix download links for personas under resources > strategy; one link missing file extension (.pdf), "+" character causing issue in some browsers

###### Sketch

- updated template fonts
- update breadcrumbs
- add underline tabs
- add datatable drawer

###### Thanks to the following contributors and bug reporters:

Luke Daugherty, Nick Roberts, Rick Dukeshier, Nisha Rana, dustin2524, Joan Doutney, Ron Cianfaglione, Rick Cole, Sam Swartz, Jim Norris, Ania Mastriano, Cameron Chu



### 2.1.1 -- October 2015 update

###### CSS changes

- added version header to CSS (closes [#32](https://github.com/PBGUX/designsystem/issues/32))
- fixed header magnify glass icon in FF, was cut off on right side
- header links changed to solid white for accessibility compliance

###### Website changes

- updated Resources > Strategy section, added Personas content
- fixed table selected state examples, used incorrect color
- added header dropdown examples with section heads
- added Web > Foundation > Accessibility section
- updated AngularJS to v1.4.5
- updated select-ui to v0.13.1 (fixes webkit dropup issue)
- updated angular-scroll to v0.7.3

###### Thanks to the following contributors and bug reporters:

Nick Roberts, Nisha Rana



### 2.1.0 -- September 29, 2015

- modal dialogs no longer need an inline close icon in the `modal-header`, remove the markup from the html indicated by the NO ICON HERE in the example below. The icon is added by the CSS with an SVG image to the button.

  ``` html
  <div class="modal-header">
  <button type="button" class="close" ng-click="close()"><!-- NO ICON HERE --><span aria-hidden="true"></span><span class="sr-only">Close</span></button>
  <h4 class="modal-title">Simple Dialog Box</h4>
  </div>
  ```

- added daterange picker examples, revised styling with new hover/selected states

- revised color values for accessibility

- updated pb-font to latest version

- added table variations

  ```
  - `table-unstyled` removes all borders
  - `table-open` removes all vertical borders
  ```

- fixed `table-condensed` styling

- button font changed to PrecisionSans Regular

- colors page is no longer an image to allow copy/paste of hex codes

- revised all hover and active colors

- added dropdown menus to header examples (including sign out), also fixed [#22](https://github.com/PBGUX/designsystem/issues/22)

- fixed all welcome pages to work in IE10

- changed selectize menus to use ui-select plugin

- added `::ms-expand` to remove extra arrow in IE dropdowns (fixes [#25](https://github.com/PBGUX/designsystem/issues/25))

- fixed misaligned prepended inputs; fixes [#26](https://github.com/PBGUX/designsystem/issues/26)

- input group buttons on right side missing border (fixes [#29](https://github.com/PBGUX/designsystem/issues/29))

- various revisions and improvements to the Design System website (copy changes, styling changes, image revisions, etc)

- revised gulp tasks, updated plugins

---

__Thanks to the following contributors and bug reporters:__

Rick Dukeshier, Shawn Sharifi, Luke Daugherty, Nick Roberts, Nisha Rana, Sam Swartz, Ania Mastriano, Joan Doutney, Renee Barsoum, Andy Grossman, Steve King, Andrea Greggo-McManus

### 2.0.0 -- August 31, 2015

- dropped support for IE8/9, following industry standards
- SVG embedded graphics used for resolution independence
- CSS3 Flexbox used in places for layout and alignment
- Updates to header and footer, see below

###### Header

- Use the `<header>` tag in place of a div with a class or id

###### Footer

- Use the `<footer>` tag in place of a div with a class or id
- uses flexbox and does not need Bootstrap classes

``` html
<footer>
	<div class="footer-wrapper">
	  <div  class="container">
		  <div class="fb-footer">
		    <!-- Copyright -->
		    <div>
		      <a href="http://www.pb.com"><i class="pb-footer-logo gradient"></i></a><span class="copyright">&copy; 2015 Pitney Bowes Inc. All rights reserved.</span>
		    </div>

		    <!-- Legal -->
		    <div>
		      <ul class="list-unstyled list-inline legal">
		        <li><a href="" target="_blank">Terms and Conditions</a></li>
		        <li><a href="" target="_blank">Privacy Policy</a></li>
		      </ul>
		    </div>

		    <div>
		      <a href="mailto:someone@pb.com">Send us feedback</a>
		    </div>
		  </div>
		</div>
	</div>
</footer>
```

### 1.2.0 Feb 20,2015

- Added "sign-in screen"
- fixed button hovers to lighten button instead of darken

### 1.1.5 Feb 19, 2015

- bug in default button hover state fixed

### 1.1.4 Feb 19, 2015

- renamed spacer classes.  2-letter sizes now: xs, sm, md, lg, xl. If you have used these, you will need to find/replace.

### 1.1.3 Feb 18, 2015

- fixed modal backdrop

### 1.1.2 Feb. 17, 2015

- fixed alert links to aways be underlined

### 1.10 February 12, 2015

- re-organized and simplified color variables
- reverted alert and callout colors to Bootstrap defaults
- reverted functional colors (except Danger) to Bootstrap defaults
- re-organized buttons to re-use as much Bootstrap code as possible
- hard-coded link color to be pb-dark-blue no matter active chord
- changed buttons to use 4th color in chord (active chord = pb-purple)
- a great deal of scss code cleaned up

### 1.05 February 11, 2015

- fixed , hopefully for good, button text color on open dropdown buttons
- added PB favicons.  They are in `/images/favicons`, so to use them upload this directory and copy the code in head of `index.html`

### 1.04 February 6, 2015

- Added "spacer" classes to add margins above and/or below objects.
- Use `spacer-top.xsm`, `spacer-top.sm`, `spacer-top.med`, `spacer-top.lg`, `spacer-top.xlg` (or `-bottom-`) to add margin of 10, 20, 30, 40, or 50 pixels, respectively.

### 1.03 February 4, 2015

- Updated variables to match Bootstrap 3.32 structure
- Updated Bootstrap CDN to 3.32
- Updated Font Awesome CDN to 4.3.0
- Removed some deprecated Sass/CSS
- Fixed arrows in numeric stepper control to use FA glyphs
- cleaned up Sass files for readability
- clarified alert link text does not need separate class

### 1.01 February 3, 2015

- Fixed space above DT (Issue #7)
- Fixed functional colors hex labels

### 1.0 January 14, 2015

- Incorporates color and typography changes for new branding
- Switched build system from Grunt to Gulp
- Simplified folder structure

----------------

##### Upgrading to 1.0.0 from previous versions

- Copy `/build/css/design_system.css` and overwrite your project design system CSS file

- Remove `<head>` links to fonts hosted at Google, for example:

  ``` html
  <link href="http://fonts.googleapis.com/css?family=Ubuntu:400,700,400italic,700italic" rel="stylesheet" type="text/css">
  ```

- Copy all PrecisionSans fonts from `/build/fonts` to your project fonts folder

- Replace the copyright column in the footer with the following markup:

``` html
<!-- Copyright -->
<div class="col-md-6">
	<a href="http://www.pb.com"><i class="pb-footer-logo gradient"></i></a>&copy; 2015 Pitney Bowes Inc. All rights reserved.
</div>
```

----------------

<br/>

### 0.9.6.1

- fixed color bug in button dropdown

### 0.9.6

- updated Miller Columns to not respond to window resizing.  As indicated on page, they are desktop-only at this point; they will now resize up to a point, but will not stack.

### 0.9.5 December 18, 2014

- Updated PB Font to use new icons from Beth and created via IcoMoon. Please replace your pbfonts with thse and replace the design_system.css file.

### 0.8.8  September 23, 2014

- Refactored Sass into separate files using manifest files.  Will be easier to locate specific sass for a page
- Updates and improvements to gruntfile
- Updated bower and npm packages to latest versions
- Updated Angular to 1.2.23
- Fixed Kendo UI colors to match design system
- Fixed Kendo splitter to no longer require image files
- Styling and changes to Miller Columns
- Split controllers for elements into separate controllers
- Select2 Menu deprecated and removed; now using Selectize menu
- Fixes to angular toggle switch
- Reversed show/hide password in control
- Text color slightly darker

### 0.85 August 12, 2014

- Separated Kendo UI and UI-Bootstrap into their own CSS files
- Fixed Knockout button bug

### 0.8 August 11, 2014

- Fixes to Colors page, added sample charts in all colors

### 0.75 August 5, 2014

- Converted project to use SASS instead of LESS.  Updated Gruntfile to compile SASS files, removed LESS code.  Please be sure to run npm install if downloading entire package.
- This **does not affect** the CSS file in /dist
- Made some other fixes to clean up paths

### 0.73 July 29,2014

- Fixed styling buf on home page of live preview
- updated Grunt serve command to inject css on recompile rather than force a reload.  Finally.

### 0.72 July 29, 2014

- Updates to fix a couple of styling bugs introduced when changing the Gray color.

### 0.71 July 28,2014

- Small update to fix the CSS file from Bootstrap UI not being compiled into vendor.css

### 0.7 July 28, 2014

- Updates to color palette for accessibility
  - Eliminated "gray-mid" and moved some text objects, such as labels, to "gray-text".
  - New "gray" added for elements such as rules and borders
  - Revised Blue and Yellow
  - Adjusted Blues
- Added separate page with alternative Angular Bootstrap UI components.  The layout of this section is still being worked on.
- Overrode some Bootstrap colors and styles that still persisted
- Clarified Alerts pages a bit more
- Most, if not all, JS code converted to Angular JS directives

### 0.6 - July 18, 2014

- Updated to use Bootstrap 3.2
- Added Kendo UI splitter
- Added range slider
- Added animated progress button
- Added thin footer and footer without social icons
- Added stacked 2-row header
- Fixes to the "user menu" at the top right
- Other menu fixes
- Fine-tuned several colors
- Added vendor.css to the DIST folder.  This compressed css file includes all the css from the various vendor add-ons used in the DS
- Fixes to state colors in toggle buttons
- Updated the angular code for the prepended checkbox
- Much cleanup done to the Live Preview

### 0.5 - June 27, 2014

- Removed Font Awesome from Bower, using CDN instead.

- Alerts:

  ```
  - updated modal dialogs
  - finalized colors and layout
  - removed cancel buttons from dialogs
  ```

- Inputs

  ```
  - fixed angular toggle switches
  - prepended checkbox field
  - updated calendar picker
  - reorganized page and support text
  ```

- Icons

  ```
  - Updated page layout
  ```

- Buttons

  ```
  - Updated page layout
  ```

### 0.4 - June 17, 2014

- Colors:

  ```
  - Added extended color palette, with colors for charts
  ```

- Alerts:

  - Added modal alert boxes and dialog boxes

- Inputs:

  ```
  - made clear prepended and appended icons the default
  - changed button type in prepend/append to primary
  - Added **Select2** menu and multi-picker
  ```

- Icons:

  ```
  - organized FA icons by type
  - added "pb-folder-add" icon
  ```

- Added **Isotope** image gallery

- Cleaned up home page and used chart colors for charts

### 0.3 - May 29, 2014

- Inputs:

  - removed inner shadows
  - added date/time picker
  - fixed error color
  - added Multi-select with checkboxes
  - added "clear" prepended and appended form fields
  - added small and large field sizes
  - added link to the page for the date/time picker plugin docs

- Alerts

  ```
  - normalized color palette
  - added simple contextual color backgrounds
  - added disconnected transitory alert (more options coming)
  ```

- Tables

  ```
  - added "extra compressed" variant
  ```

- Text

  ```
  - added contextual colors
  ```

- Accordions

  ```
  - replaced Angular accordion with simple Bootstrap one
  - added "compact" variant with no space between
  - added a simple collapsing div
  - separated tabs onto their own page
  ```

- Tabs

  - switched to Bootstrap tabs
  - added better vertical variant
