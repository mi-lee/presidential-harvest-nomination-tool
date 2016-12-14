var GOOGLE_FORMS_URL = '';
var FORM_FIELDS = 'formResponse?ifq&entry.1955598399=';

chrome.browserAction.onClicked.addListener( function( tab ) {
  console.log( "tab = ", tab );
  var currentURL = tab.url.replace( 'https://', '' );

  var notificationToolUrl = 'http://digital2.library.unt.edu/nomination/eth2016/url/';

  chrome.identity.getProfileUserInfo( function( userInfo ) {
    return $.get( {
      url: GOOGLE_FORMS_URL + FORM_FIELDS + userInfo.email + '&submit=Submit',
      success: function( res ) {
        window.open( notificationToolUrl + currentURL );
      },
      error: function( err ) {
        console.error( err );
      }
    } );
  } );
} );
