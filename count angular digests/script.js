var actualCode = `

window.angular.element(document.body).injector()
  .invoke(function($rootScope) {
    console.log('called run');
      var oldDigest = $rootScope.$digest;
      window.digestCounter = 0;
      $rootScope.$digest = function $digest() {
        window.digestCounter++;
        oldDigest.apply(this, arguments);
      };
  });
`;

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
