//!(function(document, Reveal){
//====================
// Done:
// - Notes
// - Remove config text from object
// - Fragment list items, globally or slide specific
// - Animate slides
//
// TODO:
// - Ignore config options in code nodes
// - Subsections based on H2+ headers
// - Parameters as content with underscores http://_big_joke_.com/
// - Disable animations on headers
// Next Release:
// - Sets of background images
// - IFrame / Video URL as background
// - Notes working without socketio
// - Fragment specific items

var
  i, length, $slide = null, line, split,
  $notes, isNoting = false, iInSlide,
  $bulk = document.createDocumentFragment();
  $content = document.getElementById('content'),
  $slides = document.getElementById('slides'),
  elementOptions = [
    'id',
    'background',
    'background-image',
    'background-iframe',
    'background-video',
    'background-size',
    'background-repeat',
    'transition',
    'transition-speed'
  ],
  // Animate is by defiault the globally set animation parameter
  // Once a slide adds it as a config flag, it will overwrite the default
  // setting and add it to each node within that slide After the config was set
  // After creating each new slide, it will be reset to the default animation flag
  animate = false,

  // The slides are stored in documentFragments, pushed to the slides array.
  slides = [],

  // Store jekyll's generated HTML as an alias to $nodes
  // We will organise them into separate slides based on the HTML tags and
  // their contents. Read more on that here: //TODO
  $nodes = $content.children;
  while( ($node = $nodes[0]) && $node !== undefined){

    // Create a new slide once running into one of the following tags
    // And push it to the `slides` array
    if($slide === null || ($node.nodeType === 1 && (
        $node.tagName === 'HR' ||
        $node.tagName === 'SECTION' ||
        $node.tagName === 'H1' ))){

      // Stop taking notes for the previous slide
      isNoting = false;

      // Create a new slide Three
      subsliding = false;

      // If we're dealing with a section tag, it's probably created for the
      // reveal.js API. We are skipping all our handling and just add the slide
      // to the deck
      if($node.tagName === 'SECTION') {
        slides.push($node);
        //continue;
      }

      // Set the default animation settings for the nodes inside the slide
      // Text configuration inside the slide can overwrite the animation
      // settings for the current slide
      animate = jekyllFlags.animate;

      // Generate the slide, keep it's reference and add it to slides array
      slides.push( $slide = document.createElement('section') );
    }

    // Don't add HR tags to the slides
    if($node.tagName === 'HR'){
      // Remove the child so we don't iterate it again in our while loop
      $content.removeChild($node);
      continue;
    }

    // An H2 tag will convert the current slide into a slide with vertical slides
    // If the current slide was already converted we won't do so
    // It converts it by creating a new overlapping section element. Call it sectionA
    // The current slide (sectionB) will be appended to that section
    // Then we create a new section, append that to sectionA as well
    //  Visually:
    //  Before:
    //    <section id="B">
    //      H1 Blah content
    //    </section>
    //  After:
    //    <section id="A">
    //      <section id="B">
    //        H1 Blah content
    //      </section>
    //      <section id="C">
    //      </section>
    //    </section>
    //    ---
    //  Whereas $slide references to B in the beginning, but will later be overwritten by C
    //  If we bump into another H2, we'll create another section, and add that to A
    if($node.tagName==='H2'){
      // Create A, move B to A, and overwrite $slide by C
      if(subsliding === false){
        subsliding = true;
        var A = document.createElement('section');

        // Add B to A
        A.appendChild($slide);

        // Overwrite the slide in the slides array with the new slide
        slides[slides.length-1] = A;
      }

      // Create a new section for C
      var C = document.createElement('section');
      $slide.parentNode.appendChild(C);
      $slide = C;
    }

    var textLines = $node.innerHTML.split("\n"), newHtml = '';
    for(i=0; i < textLines.length; i++ ) {
      line = textLines[i];
      split = line.split(':');

      if(i===0 && split[0] === 'notes'){
        isNoting = true;
        $notes = document.createElement('aside');
        $notes.className = 'notes';

        // Add the just created 'notes' element to the slide
        $slide.appendChild($notes);

        // Remove the 'Notes: ' part from the content
        $node.innerHTML = $node.innerHTML.replace(/^notes?\:\s?/i,'');
        continue;
      }

      if(split[0] === 'animate'){
        animate = line.substring(line.indexOf(':')+1);

        // Remove the config line from the HTML
        $node.innerHTML = $node.innerHTML.replace(line,'');
      }

      // Only add the option if its in a whitelisted array of element options
      if(~elementOptions.indexOf(split[0])){
        $slide.setAttribute(
          // Allow the ID to be set to the slide, without the 'data-' prefix
          split[0] === 'id'
            ? split[0]
            : 'data-'+split[0],
          line.substring(line.indexOf(':')+1));

        // Remove the config line from the HTML
        $node.innerHTML = $node.innerHTML.replace(line,'');
      }
    }

    // Skip and delete the node if its empty
    // Handling empty notes (generated by the Markdown parser) can become annoying when animating
    if(~$node.innerHTML.search(/^\s+$|^$/)){
      $content.removeChild($node);
      continue;
    }

    // If we're taking notes, add our current node's content to the notes box
    if(isNoting) {
      $notes.appendChild($node);
      // Continue, so the just added note content doesn't move to $slide
      continue;
    }

    // Add the animation settings to the node if they exist
    if(animate !== false && animate !== 'false' && animate !== ''){
      // When animating a list, animate it's children instead
      // Otherwise the UL node will be animated, and everything will appear all at once
      if($node.tagName === 'UL' || $node.tagName === 'OL') {
        for(var ci = 0, length = $node.children.length; ci < length; ci++){
          animateNode($node.children[ci], animate);
        }
      }
      else {
        animateNode($node, animate);
      }
    }

    $slide.appendChild($node);
  }

  // We bulk insert all our generated slides at once
  for(var i=0;i<slides.length;i++){
    $bulk.appendChild(slides[i]);
  }

  // Add the generated slides to the DOM
  $slides.appendChild($bulk);

  // Generate the Reveal Settings Object
  var revealSettings = {

      // Leap motion settings
      leap: {
          naturalSwipe   : false,    // Invert swipe gestures
          pointerOpacity : 0.5,      // Set pointer opacity to 0.5
          //pointerColor   : '#d80000' // Red pointer
          pointerColor   : '#ffffff' // Red pointer
      },

      // Optional libraries used to extend on reveal.js
      dependencies: [
        { src: '/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

        // Speaker notes
        { src: '/reveal.js/plugin/notes/notes.js', async: true },

        // Leap motion
        { src: '/reveal.js/plugin/leap/leap.js', async: true },

        { src: '/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } },
        { src: '/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } }
      ]
  };

  var k;
  for(k in jekyllFlags) {
    revealSettings[k] = jekyllFlags[k];
  }

  // Initialize Reveal
  Reveal.initialize(revealSettings);

  // Function definition
  function countTags(tag){ return content.getElementsByTagName(tag).length; }

  function animateNode($node, animation){
      $node.classList.add('fragment');
      // Classlist doesn't like whitespaces
      $node.classList.add(animation.replace(/\s+/g,''));
  }

//====================
//})(document, Reveal);
