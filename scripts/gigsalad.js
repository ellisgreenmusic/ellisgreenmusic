var gsReviewWidget;
(function(d, t) {
    var s = d.createElement(t),
        options = {
            path: '225885',
            maxWidth: 600,
            count: 3
        };
    s.src = 'https://www.gigsalad.com/js/gigsalad-reviews-widget.min.js';
    s.onload = s.onreadystatechange = function() {
        var rs = this.readyState;
        if (rs)
            if (rs != 'complete')
                if (rs != 'loaded') return;
        try {
            gsReviewWidget = new GsReviewsWidget(options);
            gsReviewWidget.display();
        } catch (e) {}
    };
    var scr = d.getElementsByTagName(t)[0];
    var par = scr.parentNode;
    par.insertBefore(s, scr);
})(document, 'script');