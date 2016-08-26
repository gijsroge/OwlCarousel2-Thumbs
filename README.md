# Owl Carousel 2 Thumbnails plugin
Enables thumbnail support for Owl Carousel 2.0

## Quick start
grab the [latest release](https://github.com/gijsroge/OwlCarousel2-Thumbs/archive/0.1.7.tar.gz) and slam it behind the default owl carousel plugin.

##### Enable thumbs
```javascript
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    thumbs: true
  });
});
```

## Use pre-rendered html as thumbnails. **_recommended_**
```javascript
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    thumbs: true,
    thumbsPrerendered: true
  });
});
```

##### Add thumbnails (link slider and thumbnails with data-slider-id attribute)
```html
<div class="owl-carousel" data-slider-id="1">
    <div>Your Content</div>
    <div>Your Content</div>
    <div>Your Content</div>
    <div>Your Content</div>
</div>
<div class="owl-thumbs" data-slider-id="1">
    <button class="owl-thumb-item">slide 1</button>
    <button class="owl-thumb-item">slide 2</button>
    <button class="owl-thumb-item">slide 3</button>
    <button class="owl-thumb-item">slide 4</button>
</div>
```

## Or add data-thumb attribute to your slides
```html
<div class="owl-carousel">
    <div data-thumb='Content of your thumbnail (can be anything)'> Your Content </div>
    <div data-thumb='Content of your thumbnail (can be anything)'> Your Content </div>
    <div data-thumb='Content of your thumbnail (can be anything)'> Your Content </div>
    <div data-thumb='Content of your thumbnail (can be anything)'> Your Content </div>
</div>
```

#### [demo](http://gijsroge.github.io/owl-carousel2-thumbs)

## Available options
```javascript
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    // Enable thumbnails
    thumbs: true,
  
    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,

    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    thumbsPrerendered: true,
    
    // Class that will be used on the thumbnail container
    thumbContainerClass: 'owl-thumbs',
    
    // Class that will be used on the thumbnail item's
    thumbItemClass: 'owl-thumb-item'
  });
});
```

## npm
```
npm install owl.carousel2.thumbs
```

## bower
```
bower install owl.carousel2.thumbs
```

</> with <3 in Belgium by [@GijsRoge](https://twitter.com/GijsRoge)
