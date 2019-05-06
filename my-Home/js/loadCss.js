function loadCss(css){
    var added = false;
    function trigger()
    {
        if(added) return;
        added = true;
        
        var css = document.createElement("link");
        
        css.onload = function()
        {
            document.body.appendChild(css);
        };
        
        css.rel = "stylesheet";
        css.src = css;
    }
    if(document.readyState !== "Loading")
    {
        trigger();    
    }else
    {
        document.addEventListener("DOMContentLoaded", trigger);
    }
}
loadCss("css/style.css");
