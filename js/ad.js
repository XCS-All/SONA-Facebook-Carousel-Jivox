const hotspot = document.querySelector('.hotspot');
const header = document.querySelector('.hotspot__head');
const caption = document.querySelector('.hotspot__caption');
const actions = document.querySelector('.hotspot__actions');
const slideHotspots = document.querySelectorAll('.hotspot__item');

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    arrows: true,
    prevArrow: '<div class="arrow arrow-left"><i class="prev"></i></div>',
    nextArrow: '<div class="arrow arrow-right"><i class="next"></i></div>',
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
});


for (var i = 0; i < slideHotspots.length; i++) {
    slideHotspots[i].addEventListener('click', function() {
        var label = this.dataset.label;
        var url = this.dataset.url;

        console.log('recordEventByName', label);
        console.log('openClickThrough', url);

        jvxAd.recordEventByName(label, 1);
        jvxAd.openClickThrough(url);
    });
}

function addConversionPixel(type, url) {
    if(type == 'image') {
        var pixel = document.createElement('img');
        pixel.src = url;
        pixel.width  = 1;
        pixel.height  = 1;
        pixel.style.display = 'none';
    }
    if(type == 'script') {
        var pixel = document.createElement('script');
        pixel.src = url;
    }

    document.body.appendChild(pixel);
}

hotspot.addEventListener('click', function() {
    console.log('openClickThrough');
    jvxAd.openClickThrough();
});