// returns true if browser is Internet Explorer
function isMSIEBrowser() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
    var isMSIEBrowser = (msie > 0) || isIE11;

    return isMSIEBrowser;
}

function getMSIEVersion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
    var browserVersion = -1;

    if (msie > 0)  // If Internet Explorer, return version number
    {
        browserVersion = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    }
    else if (isIE11) {
        browserVersion = 11;
    }

    return browserVersion;
}

if (isMSIEBrowser()) {

    var browserVersion = getMSIEVersion();

    if (browserVersion >= 9) {

        $(".reg").addClass("regIE");        
    }
}