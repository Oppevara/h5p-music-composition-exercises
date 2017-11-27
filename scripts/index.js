/**
 * Music Composition Exercises Content Type
 */

 var H5P = H5P || {};

 /**
  * Music Composition Exercises module
  * @param  {H5P.jQuery} $ jQuery usef by H5P Core
  * @return {function}   MusicCompositionExercises constructor
  */
 H5P.MusicCompositionExercises = (function($) {
   /**
    * MusicCompositionExercises constructor
    * @param       {object} options Object with current data and configurations
    * @param       {integer} id      Unique identifier
    * @constructor
    */
   function MusicCompositionExercises (options, id) {
     this.options = options;
     this.id = id;
   }

   /**
    * Returns title
    * @return {string} Title text
    */
   MusicCompositionExercises.prototype.getTitle = function() {
     return this.options.title;
   };

   /**
    * Returns description
    * @return {string} Description text
    */
   MusicCompositionExercises.prototype.getDescription = function() {
     return this.options.description;
   };

   /**
    * Checks if description is set and not empty
    * @return {boolean} Description is set or not
    */
   MusicCompositionExercises.prototype.hasDescription = function() {
     var description = this.getDescription() || '';
     description = description.trim();

     return description && description.length > 0;
   };

   /**
    * Returns exercise type
    * @return {string} Exercise type
    */
   MusicCompositionExercises.prototype.getType = function() {
     return this.options.type;
   };

   /**
    * Returns number of attempts
    * @return {integer} Number of attempts
    */
   MusicCompositionExercises.prototype.getAttempts = function() {
     return this.options.attempts;
   };

   /**
    * Creates and fills container with content
    * @param  {object} $container Container node
    * @return {void}
    */
   MusicCompositionExercises.prototype.attach = function($container) {
     var self = this;
     self.$container = $container;

     $container.addClass('h5p-music-composition-exercises');
     $('<h3>', {
       'class': 'h5p-music-composition-exercises-title',
       'text': self.getTitle()
     }).appendTo($container);

     if (self.hasDescription()) {
       $('<div>', {
         'class': 'h5p-music-composition-exercises-description',
         'html': self.getDescription()
       }).appendTo($container);
     }

     // TODO These two are not required and should be replaced with exercise itself
     $('<div>', {
       'class': 'h5p-music-composition-exercises-type',
       'text': self.getType()
     }).appendTo($container);
     $('<div>', {
       'class': 'h5p-music-composition-exercises-attempts',
       'text': self.getAttempts()
     }).appendTo($container);
   };

   return MusicCompositionExercises;
 })(H5P.jQuery);
