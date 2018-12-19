var IFrameResizer = window.IFrameResizer = (function(){
    var F = {
        iframes: [],
        register: function(iframe, resizeHeight, resizeWidth) {
            if (resizeHeight === undefined) {
                resizeHeight = true;
            }
            if (!F.iframes.find(function(item){return item.element === iframe;})) {
                F.iframes.push({
                    element: iframe,
                    resizeHeight: resizeHeight,
                    resizeWidth: resizeWidth
                });
                try {
                    iframe.contentWindow.postMessage({message:'iframe-resize-registered'},'*');
                }catch(e){console.error(e);}
            }
        },
        getIFrameForWindow: function(win) {
            return F.iframes.find(function(item){
                return item.element.contentWindow == win;
            });
        },
        resize: function(iframe, height, width) {
            if (height || height === 0) {
                iframe.style.height = height;
                iframe.height = height;
            }
            if (width || width === 0) {
                iframe.style.width = width;
                iframe.width = width;
            }
            iframe.contentWindow.postMessage({message:'iframe-resize-resized'},'*');
        },
        unregister: function(iframe) {
            var i = F.iframes.indexOf(iframe);
            if (i >= 0) {
                F.iframes.splice(i,1);
            }
            iframe.contentWindow.postMessage({message:'iframe-resize-unregistered'},'*');
        }
    };
    window.addEventListener('message', function(event) {
        try {
            if (event.data.message === 'iframe-resize-content') {
                var width = event.data.width;
                var height = event.data.height;
                var iframe = F.getIFrameForWindow(event.source);
                F.resize(iframe.element, iframe.resizeHeight && height, iframe.resizeWidth && width);
            } else if (event.data.message === 'iframe-resize-register-request') {
                var iframe = F.getIFrameForWindow(event.source);
                if (iframe && F.iframes.find(function(item){return item.element === iframe;})) {
                    try {
                        iframe.contentWindow.postMessage({message:'iframe-resize-registered'},'*');
                    }catch(e){console.error(e);}
                }
            }
        }catch(e){console.error(e);}
    }, false);
    return F;
})();
