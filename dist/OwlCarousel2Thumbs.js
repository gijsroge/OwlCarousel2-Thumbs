/*! OwlCarousel2Thumbs - v0.1.3 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
/**
 * Thumbs Plugin
 * @version 2.0.0
 * @author Gijs Rogé
 * @license The MIT License (MIT)
 */
(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the thumbs plugin.
     * @class The thumbs Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Thumbs = function(carousel) {


        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this.owl = carousel;

        /**
         * All DOM elements for thumbnails
         * @protected
         * @type {Object}
         */
        this._thumbcontent = [];


        /**
         * Return current item regardless of clones
         * @protected
         * @type {Object}
         */
        this.owl_currentitem = this.owl.options.startPosition;


        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this.owl.$element;


        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */

        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.owl._options.thumbs && !this.owl._options.thumbImage) {
                    this._thumbcontent.push($(e.content).find('[data-thumb]').attr('data-thumb'));
                } else if (e.namespace && this.owl._options.thumbs && this.owl._options.thumbImage) {
                    var innerImage = $(e.content).find('img');
                    this._thumbcontent.push(innerImage);
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.owl._options.thumbs) {
                    this.initialize();
                    this.currentslide();
                    this.draw();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this.owl._options.thumbs) {
                    this.currentslide();
                    this.draw();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this.draw();
                }
            }, this)
        };


        // set default options
        this.owl._options = $.extend(Thumbs.Defaults, this.owl.options);

        // register the event handlers
        this.owl.$element.on(this._handlers);
    };


    /**
     * Default options.
     * @public
     */
    Thumbs.Defaults = {
        thumbs: true,
        thumbImage: false,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    };


    /**
     * Get current index
     * @protected
     */
    Thumbs.prototype.currentslide = function() {
        this.owl_currentitem = this.owl._current - (this.owl._clones.length / 2);
        if (this.owl_currentitem === this.owl._items.length) {
            this.owl_currentitem = 0;
        }
    };


    /**
     * Updates active class on thumbnails
     * @protected
     */
    Thumbs.prototype.draw = function() {
        $(this._thumbcontent._thumbcontainer).children().filter('.active').removeClass('active');
        $(this._thumbcontent._thumbcontainer).children().eq(this.owl_currentitem).addClass('active');
    };


    /**
     * Builds thumbnails
     * @protected
     */
    Thumbs.prototype.initialize = function() {

        //set default options
        var options = this.owl._options;

        //create thumbcontainer
        this._thumbcontent._thumbcontainer = $('<div>').addClass(options.thumbContainerClass).appendTo(this.$element);

        //create thumb items
        var i;
        if (!this.owl._options.thumbImage) {
            for (i = 0; i < this._thumbcontent.length; ++i) {
                this._thumbcontent._thumbcontainer.append('<button class=' + options.thumbItemClass + '>' + this._thumbcontent[i] + '</button>');
            }
        } else {
            for (i = 0; i < this._thumbcontent.length; ++i) {
                this._thumbcontent._thumbcontainer.append('<button class=' + options.thumbItemClass + '><img src="' + this._thumbcontent[i].attr('src') + '" alt="' + this._thumbcontent[i].attr('alt') + '" /></button>');
            }
        }

        //check what thumbitem has been clicked and move slider to that item
        $(this._thumbcontent._thumbcontainer).on('click', 'button', $.proxy(function(e) {

            var index = $(e.target).parent().is(this._thumbcontent._thumbcontainer) ? $(e.target).index() : $(e.target).parent().index();
            e.preventDefault();

            this.owl.to(index, options.dotsSpeed);
        }, this));
    };


    /**
     * Destroys the plugin.
     * @public
     */
    Thumbs.prototype.destroy = function() {
        var handler, property;
        for (handler in this._handlers) {
            this.owl.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };


    $.fn.owlCarousel.Constructor.Plugins.Thumbs = Thumbs;

})(window.Zepto || window.jQuery, window, document);