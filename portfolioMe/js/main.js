$(document).ready(function(){
  
  $('.carousel').carousel();

  $('.tap-target').featureDiscovery();
  $('.tap-target').featureDiscovery('open');

  });
  function closeFeatureDiscovery() {
    $('.tap-target').featureDiscovery('close');
  }