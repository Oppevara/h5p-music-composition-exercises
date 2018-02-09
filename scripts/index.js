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
     this.exercise = null;
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

   MusicCompositionExercises.prototype.hasVexTabDiv = function() {
     return !!window.VexTabDiv;
   };

   /**
    * Returns number of attempts
    * @return {integer} Number of attempts
    */
   MusicCompositionExercises.prototype.getAttempts = function() {
     return this.options.attempts;
   };

   MusicCompositionExercises.prototype.initExercise = function($container) {
     H5P.MusicCompositionExercisesLibrary.generateHtml(this, $container);
     try {
       this.exercise = H5P.MusicCompositionExercisesLibrary.createExerciseInstance(this.getType(), $container.get(0), 'mainCanvas');
     }
     catch(err) {
       if ( console && console.error ) {
         console.error(err);
       }
     }
   };

   /**
    * Creates and fills container with content
    * @param  {object} $container Container node
    * @return {void}
    */
   MusicCompositionExercises.prototype.attach = function($container) {
     var self = this;
     self.$container = $container;
     self.$exerciseContainer = $('<div>', {
       'class': 'h5p-music-composition-exercise'
     });

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

     self.$exerciseContainer.appendTo(self.$container);

     if ( !self.hasVexTabDiv() ) {
       var intervalId = setInterval(function() {
         if ( self.hasVexTabDiv() ) {
           clearInterval(intervalId);
           self.initExercise(self.$exerciseContainer);
         }
       }, 150);
     } else {
       self.initExercise(self.$container);
     }
   };

   return MusicCompositionExercises;
 })(H5P.jQuery);
