function myScript(){
  window.addEventListener('load', function() {
 
    var user_id = null;   // user's id
    var app_id = 7747088;  // your app's id
 
    admanInit({
      user_id: user_id,
      app_id: 7747088,
      mobile: true,
      type: 'rewarded' 			// 'preloader' or 'rewarded' (default - 'preloader')
      // params: {preview: 1}   // to verify the correct operation of advertising
    }, onAdsReady, onNoAds);
 
    function onAdsReady(adman) {
      adman.onStarted(function () {});
      adman.onCompleted(function() {});
      adman.onSkipped(function() {});      
      adman.onClicked(function() {}); 
      adman.start('preroll');
    };
    function onNoAds() {};
  });
}
