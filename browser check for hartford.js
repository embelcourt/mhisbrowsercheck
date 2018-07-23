<script type="text/javascript" language="javascript">

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    
    function GetSilverlightVersion() {
                // initialize the silverlightVersion to -1.
                var silverlightVersion = -1;
                getSilverlightVersion = function () {
                    try {
                       // create the ActiveX Object of AgControl.
                       // This is the core of Silverlight runtime.
                       var control = new ActiveXObject('AgControl.AgControl');

                      // will execute if your latest Silverlight version is 5.
                      if (control.IsVersionSupported("5.0")) {
                          silverlightVersion = 5;
                     }
                      else if (control.IsVersionSupported("4.0")) {
                          silverlightVersion = 4;
                     }
                      // will execute if your latest Silverlight version is 3.
                      else if (control.IsVersionSupported("3.0")) {
                         silverlightVersion = 3;
                      }
                      // will execute if your latest Silverlight version is 2.
                       else if (control.IsVersionSupported("2.0")) {
                          silverlightVersion = 2;
                       }
                       // if Silverlight version is not supported by your app,
                       // set it as 0 (zero).
                       else {
                           silverlightVersion = 0;
                       }
                       control = null;
                   }
                   catch (e) {
                       // if any exception while creating the ActiveX Object,
                       // will set the silverlightVersion as -1.
                       silverlightVersion = -1;
                       alert("Unable to create the ActiveX Object from Browser window.");
                   }
               }
               // call to the inner function to detect the Silverlight.
               getSilverlightVersion();

               // return the version of the Silverlight.
               return silverlightVersion;
           }

    <script type="text/javascript" language="javascript">
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    
    function GetSilverlightVersion() {
                // initialize the silverlightVersion to -1.
                var silverlightVersion = -1;
                getSilverlightVersion = function () {
                    try {
                       // create the ActiveX Object of AgControl.
                       // This is the core of Silverlight runtime.
                       var control = new ActiveXObject('AgControl.AgControl');

                      // will execute if your latest Silverlight version is 5.
                      if (control.IsVersionSupported("5.0")) {
                          silverlightVersion = 5;
                     }
                      else if (control.IsVersionSupported("4.0")) {
                          silverlightVersion = 4;
                     }
                      // will execute if your latest Silverlight version is 3.
                      else if (control.IsVersionSupported("3.0")) {
                         silverlightVersion = 3;
                      }
                      // will execute if your latest Silverlight version is 2.
                       else if (control.IsVersionSupported("2.0")) {
                          silverlightVersion = 2;
                       }
                       // if Silverlight version is not supported by your app,
                       // set it as 0 (zero).
                       else {
                           silverlightVersion = 0;
                       }
                       control = null;
                   }
                   catch (e) {
                       // if any exception while creating the ActiveX Object,
                       // will set the silverlightVersion as -1.
                       silverlightVersion = -1;
                       alert("Unable to create the ActiveX Object from Browser window.");
                   }
               }
               // call to the inner function to detect the Silverlight.
               getSilverlightVersion();

               // return the version of the Silverlight.
               return silverlightVersion;
           }

    </script>
	
	<script type="text/javascript">

/*
var output = 'Detecting browsers...<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;
*/

if (isIE == true) {
       document.writeln("<h4>You are using Internet Explorer version 11 ")
       // get the Silverlight version
           var silverlightVersion = GetSilverlightVersion();

            // if the retrieved version is -1, means detection failed.
            if (silverlightVersion == -1) {
               document.writeln(" but we are unable to detect the Silverlight Version.");
               document.writeln("Please go install Microsoft's Silverlight by clicking <a href='https://www.microsoft.com/getsilverlight/get-started/install/'>HERE.</a></h4>");

           }
           // if the retrieved version is 0, means Silverlight is not installed.
           else if (silverlightVersion == 0) {
               document.writeln("however, Silverlight is not installed in your PC.<br><br>");
               document.writeln("Please go install Microsoft's Silverlight by clicking <a href='https://www.microsoft.com/getsilverlight/get-started/install/>'HERE.</a></h4>");

           }
           // show the Silverlight version.
           else {
               document.writeln("and have Silverlight " + silverlightVersion);
               document.writeln(" installed.  You are able to use the City of Victorville's Online Permitting System.  Click home to get started.</h4>")
           }
} else {
       document.writeln("<h4>You are not using Internet Explorer version 11.  You must use Internet Explorer 11 to use the City of Hartford's Online Permitting System.<br><br>")
       document.writeln("In the Windows 10 taskbar search box, click on the Type here to search text and type in Internet Explorer.<br><br>")
       document.writeln("You will see Internet Explorer appear in the results.  Clicking on it will open Microsoft Internet Explorer 11.<br><br>")
       document.writeln("Please use Internet Explorer 11 to use the City of Hartford's Online Permitting System.<br><br></h4>")
}


</script>