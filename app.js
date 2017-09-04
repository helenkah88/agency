function setActiveSlide(index) {
    // var slides = $('.slide-item');
    $('body').attr('class', 'slide-' + index);
}

function scrollListener() {

    var isScrollable = false;

    function onWheel(e) {
        e = e || window.event;

        // wheelDelta не дает возможность узнать количество пикселей
        var delta = e.deltaY || e.detail || e.wheelDelta;

        var slidesLength = $('.slide-item').length;
        var index = $('body').attr('class');
        index = +index.replace('slide-', '');

        if (isScrollable) return;

        isScrollable = true;

        if (delta > 0) {
            if (index !== slidesLength) {
                setActiveSlide(index + 1)
            }
        } else if (delta < 0) {
            if (index !== 1) {
                setActiveSlide(index - 1)
            }
        }

        setTimeout(function() {
            isScrollable = false;
        }, 1000)

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }

    document.body.addEventListener("mousewheel", onWheel);
    document.body.addEventListener("DOMMouseScroll", onWheel);
    document.body.addEventListener("MozMousePixelScroll", onWheel);
}

$(function() {
    scrollListener();
})