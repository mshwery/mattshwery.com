function getViewport() {
  var e = window,
    a = 'inner';
  if ( !( 'innerWidth' in window ) ) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {
    width: e[ a + 'Width' ],
    height: e[ a + 'Height' ]
  };
}

var fixWidths = function() {
  var padding = getViewport().height / 5,
    maxWidth = 0;

  $( ".option" ).each( function() {
    maxWidth = Math.max( maxWidth, parseInt( $( this ).outerWidth() ) );
  } );

  $( ".option" ).width( maxWidth );

  $( ".container" ).css( {
    'padding-bottom': padding,
    'padding-top': padding
  } );
};

var setupQuestionOptions = function( options ) {
  $( ".subquestion" ).each( function( i ) {
    var optionGroup = $( "<div class='options'/>" );

    if ( $( this ).is( ':first-of-type' ) ) {
      optionGroup.addClass( 'current' );
    }

    $.each( options, function() {
      var label, name, radio, text;
      name = [ "option", i ].join( "-" );
      radio = $( "<input type='radio'/>" ).attr( "value", this.value ).attr( "name", name );
      text = $( "<span/>" ).text( this.text );
      label = $( "<label/>" ).addClass( "option" ).append( radio ).append( text );
      optionGroup.append( label.prepend( "<div class='animated bg'/>" ) );
    } );

    $( this ).append( optionGroup ).attr( 'id', 'q' + i ).toggleClass( "current", i === 0 );
  } );
};

var scrollToEl = function( el ) {
  var currentEl = $( '.current' ),
    hash = '',
    scroll;

  if ( el.length && el != currentEl ) {
    currentEl.removeClass( 'current' );
    el.addClass( 'current' );

    var viewportHeight = getViewport().height,
      questionHeight = el.outerHeight(),
      centeredScroll = el.offset().top - ( ( viewportHeight - questionHeight ) / 2 ),
      offsetScroll = ( parseInt( el.css( 'padding-top' ) ) > ( viewportHeight / 10 ) ) ? el.offset().top : el.offset().top - ( viewportHeight / 10 );

    hash = el.attr( "id" );
    scroll = ( questionHeight > ( viewportHeight * 0.8 ) ) ? offsetScroll : centeredScroll;

  } else if ( currentEl.is( ":last-child" ) ) {
    scroll = document.body.scrollHeight;
  }

  if ( scroll ) {
    $( 'html, body' ).stop().animate( {
      'scrollTop': Math.max( 0, scroll )
    }, 200, "swing", function() {
      window.location.hash = hash;
      $( 'html, body' ).clearQueue();
    } );
  }
};

var gotoQuestion = function( el ) {
  scrollToEl( el );
}

var nextQuestion = function( direction ) {
  var direction = direction || 'next',
    currentQuestion = $( ".current" ),
    nextQuestion = currentQuestion[ direction ]();

  gotoQuestion( nextQuestion );
};

$( document ).ready( function() {

  var options = [ {
    value: 0,
    text: "every day"
  }, {
    value: 1,
    text: "a few times a week"
  }, {
    value: 2,
    text: "every couple weeks"
  }, {
    value: 3,
    text: "a few times a month"
  }, {
    value: 4,
    text: "a few times a year"
  }, {
    value: 5,
    text: "never"
  } ];

  setupQuestionOptions( options );
  fixWidths();

  var waypointOffset = function() {
    var $window = $( window ),
      viewportHeight = $window.height(),
      $el = $( this ),
      questionTitle = $el.find( '.subquestion-text' ).height();
    return ( viewportHeight / 2 );// - questionTitle;
  };

  $( ".subquestion" )
    .waypoint( function( direction ) {
      var $this = $( this );
      // console.log( '%s, %s', direction, $.trim( $this.find( '.subquestion-text' ).text() ) );

      if ( direction === 'down' ) {
        $this.addClass( 'current' ).siblings().removeClass( 'current scrolled' );
      } else {
        var $prev = $this.waypoint( 'prev' );
        if ($prev.length) {
          $prev.addClass( 'current' ).siblings().removeClass( 'current' );
          $prev.toggleClass( 'scrolled', $prev.offset().top < $( window ).scrollTop() );
        }
      }
    }, {
      offset: waypointOffset
    } )
    .waypoint( function( direction ) {
      var $this = $( this );
      $this.toggleClass( 'scrolled', direction === 'down' && $this.hasClass( 'current' ) );
    }, {
      offset: function() {
        return -$( this ).find( '.subquestion-text' ).height();
      }
    } );

  $( ".subquestion" ).on( "click", function( e ) {
    var question = $( e.target ).closest( '.subquestion' ),
      isOption = $( e.target ).is( 'input' ) || $( e.target ).is( 'label' );

    if ( !$( this ).hasClass( 'current' ) ) {
      /* if they click the input/label of another question (not the current one) it will prevent default behavoir and scroll to that question first */
      if ( isOption ) {
        e.preventDefault();
      }

      scrollToEl( $( this ) );
    }

  } );

  $( ".prev" ).on( "click", function( e ) {
    e.preventDefault();
    nextQuestion( 'prev' );
  } );

  $( ".next" ).on( "click", function( e ) {
    e.preventDefault();
    nextQuestion( 'next' );
  } );

  $( "input" ).on( "change", function( e ) {
    var option = $( this ).closest( ".option" ),
      question = option.closest( ".subquestion" );

    if ( this.checked ) {
      option.addClass( "selected" ).siblings().removeClass( "selected" );

      setTimeout( function() {
        question.addClass( 'answered' );
        gotoQuestion( question.next() );
      }, 800 );
    }
  } );
} );