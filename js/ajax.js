function ajax(opts) {
    var defaults = {
        method:'GET',
        url:'',
        data:'',
        async:true,
        cache:true,
        contentType:'application/x-www-form-urlencoded',
        success:function() {},
        error:function() {},
    };
    for(var key in opts) {
        defaults[key] = opts[key];
    };
    if (typeof defaults.data === 'object') {
        var str = '';
        for(var key in defaults.data) {
            str += key + '=' + defaults.data[key] + '&'
        }
        defaults.data = str.substring(0,str.length - 1);
    };
    defaults.method = defaults.method.toUpperCase();
    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime();
    if (defaults.method === 'GET' && (defaults.data || defaults.cache) ) {
        defaults.url += '?' + defaults.data + defaults.cache;
    };
    var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    oXhr.open(defaults.method, defaults.url, defaults.asycn);
    if (defaults.method === 'GET') {
        oXhr.send(null);
    }
    else {
        oXhr.setRequestHeader("Content-type",defaults.contentType);
        oXhr.send(defaults.data);
    }
    oXhr.onreadystatechange = function () {
        if (oXhr.readyState === 4) {
            if (oXhr.status === 200) {
                defaults.success.call(oXhr,oXhr.responseText);
            }
            else {
                defaults.error();
            };
        };
    };
};