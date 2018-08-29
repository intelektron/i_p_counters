# Counter paragraph for Droopler #

***This module is deprecated**. It works only with Droopler 1.2. Since version 1.3 it is bundled into Droopler core.* 

[![N|Solid](http://intelektron.pl/logo.svg)](http://intelektron.pl)

## How does it look? ##

![Screen](http://intelektron.pl/static/intelektron-counters-1.png)

## Installation ##

1. Update **composer.json**

Put this module in the "require" section of your composer.json. I assume you have configured asset-packagist.org and "composer-installers-extender" extension.

```json
"require": {
  "intelektron/i_p_counters":  "^1.0",
  "npm-asset/countup": "^1.9",
  "npm-asset/in-viewport": "^3.6",
}
```

In the "repositories" section put:

```json
"repositories": {
  "intelektron-counters": {
    "type": "git",
    "url":  "git@github.com:intelektron/i_p_counters.git"
  }
}
```

2. Run **composer update**.
3. Include module's scss in droopler_subtheme style.scss file

```scss
@import "../../../../modules/contrib/i_p_counters/scss/i_p_counters";
```

**Note**: Any changes made in this file won't be caught by **gulp watch**.

4. Run **gulp compile** in droopler_subtheme directory
5. Enable module in Drupal.
6. Enjoy the new paragraph :-).
