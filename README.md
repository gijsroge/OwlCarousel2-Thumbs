# Owl Carousel 2 Thumbnails plugin
Enables thumbnail support for Owl Carousel 2.0

## Quick start
grab the [latest release](https://github.com/gijsroge/OwlCarousel2-Thumbs/blob/master/src/owl.thumbs.js) and slam it behind the default owl carousel plugin.

##### Enable thumbs
```javascript
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    thumbs: true
  });
});
```
##### Add data-thumb attribute to your slides
```html
<div class="owl-carousel">
    <div data-thumb='Content of your thumbnail (can ben anything)'> Your Content </div>
    <div data-thumb='Content of your thumbnail (can ben anything)'> Your Content </div>
    <div data-thumb='Content of your thumbnail (can ben anything)'> Your Content </div>
    <div data-thumb='Content of your thumbnail (can ben anything)'> Your Content </div>
</div>
```

#### [demo](http://gijsroge.github.io/owl-carousel2-thumbs)

# Available options
#### Thumbs
options: true/false
Enable thumbnails

#### thumbImage
options: true/false
When using only images in your slide (like the [demo](http://gijsroge.github.io/owl-carousel2-thumbs)) use this option to dynamicly create thumbnails without using the attribute data-thumb.

#### ThumbContainerClass
options: Class/String
Class that will be used on the thumbnail container

#### thumbItemClass
options: Class/String
Class that will be used on the thumbnail item's

##### All default values
```javascript
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    // Enable thumbnails
    thumbs: true,
  
    // When using only images in your slide (like the [demo](http://gijsroge.github.io/owl-carousel2-thumbs)) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,
    
    //Class that will be used on the thumbnail container
    thumbContainerClass: 'owl-thumbs',
    
    //Class that will be used on the thumbnail item's
    thumbItemClass: 'owl-thumb-item'
  });
});
```

</> with <3 in Belgium by [@GijsRoge](https://twitter.com/GijsRoge)
