var GOOGLE_FORMS_URL = 'https://docs.google.com/forms/d/1kuwxu2lXYSRpkwBj4o9kwjURZL3hgk-mSFoK4qkC4ZI/formResponse?ifq';
//var FORM_FIELDS = 'formResponse?ifq&entry.1955598399=';
var NAME_FIELD = '&entry.604638068=';
var EVENTNAME_FIELD = '&entry.1800984457=';
var URL_FIELD = '&entry.242612017=';
// Form Name entry value = entry.604638068
// Event URL Entry Value = entry.242612017
//curl 'https://docs.google.com/forms/d/1kuwxu2lXYSRpkwBj4o9kwjURZL3hgk-mSFoK4qkC4ZI/formResponse?ifq'&entry.604638068=NAME&entry.1800984457=something'&entry.242612017=url&submit=Submit'

chrome.browserAction.onClicked.addListener( function( tab ) {
  console.log( "tab = ", tab );
  var currentURL = tab.url.replace( 'https://', '' );

  var notificationToolUrl = 'http://digital2.library.unt.edu/nomination/eth2016/url/';

  chrome.identity.getProfileUserInfo( function( userInfo ) {
    return $.get( {
      url: GOOGLE_FORMS_URL + NAME_FIELD +'NAME'+ EVENTNAME_FIELD + 'Guerilla Archiving'+URL_FIELD+'www.google.ca'+ '&submit=Submit',
      success: function( res ) {
        window.open( notificationToolUrl + currentURL );
      },
      error: function( err ) {
        console.error( err );
      }
    } );
  } );
} );
