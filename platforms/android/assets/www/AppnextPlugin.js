

var AppnextPlugin = {
    
    initializeWithAPIKey: function(apiKey, successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'Appnext', 'initializeWithApiKey', [apiKey]);
    }
  , showPopup: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'Appnext', 'showPopup', []);
    }
  , hidePopup: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'Appnext', 'hidePopup', []);
    }
  , cacheAd: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'Appnext', 'cacheAd', []);
    }
  , setAdsCallback: function(successCallback, failureCallback) {
      return cordova.exec(successCallback, failureCallback, 'Appnext', 'setAdsCallback', []);
    }
};