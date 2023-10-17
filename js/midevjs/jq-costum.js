// document.addEventListener("DOMContentLoaded",()=>{
//     console.log('loaded now')
//     $('body').removeClass('d-none')
// })
// if(Modernizr.touch){
//     console.log('it is touch')
// }else {
//     console.log('it is not touch')
// }
$(document).ready(function () {
    moederModal();
    setTimeout(() => {
        initTooltipBuildings()
    }, 1000)
    offCanvasShowHide(); // event listener for offCanvas when show and hide
    if (!window.location.hash) { // this for keeping the page on top if there is no # in url
        $('html, body').animate({}, 300)
    }
    checkCookie() // check cookies if zoomIn history is true or false , if true it will excute showContentCloseIntroModal() function
    toggleMenu(); // this for menu list icon event listener to hide the btn group of this menu
    initObjcetsModal() // this for init modals of object and the data of each modal object,also when clicking on object the right modal with data will apear
    mobWindowSize() // on page load this will check if the screen is less than 767 and the width is lesser than the height then mobileLandscape icon witll appear
    $(window).on('resize',() => {
        tooptipLabelsSwitch();
        mobWindowSize() // same as above but when window resize
        // tooptipLabelsSwitch();
    })

    $(function () {
        $('.tlt').textillate({
            autoStart: true,
            // delayScale: 4,
            loop: true,
            type: 'char',
            in: {
                effect: 'flipInY',
                squence: true,
                delay: 20,
                // callback: function (){
                //     alert('hello')
                // }
            },
            out: {
                effect: 'flipOutY',
                squence: true,
                // delay:50
            }
        });
    }) // this for animating text
    $(function () {
        // $('body').removeClass('d-none')

    }); // end ready

    // showHideObjects()

    // https://jsfiddle.net/eFjnU/


    // $('.highLightMap').maphilight({
    //     fill: true,
    //     fillColor: 'FFFFFF',
    //     fillOpacity: 0.1,
    //     stroke: true,
    //     strokeColor: 'FFFFFF',
    //     alwaysOn: true,
    //     strokeWidth: 2,
    //     fade: true,
    //     strokeOpacity: 0.5,
    //     shadow: true,
    //     shadowColor: 'FFFFFF',
    //     shadowPosition: 'inside'
    // });
    $("#kitchendoor").on('click', function () {
        $(".displayNone").css("display", "none");
        $("#goToBuilding").css("display", "none");
        $("#goToOntvangasthall1").css("display", "block")
        $(".card-block").css("display", "block");
    })

    $("#goToOntvangasthall").on('click', function () {
        $(".displayNone").css("display", "flex")
    })
    $("#goToOntvangasthall1").on('click', function () {
        $(".displayNone").css("display", "flex")
        $("#goToOntvangasthall1").css("display", "none")
        $(".card-block").css("display", "none");
    })

    // $('map').imageMapResize();

    // $(window).resize(function () {
    //     location.reload();
    // });

    $("#clickme").on("click", function () {
        $("#book").animate({
            opacity: 0.25,
            height: "toggle"
        }, 300, function () {
            // Animation complete.
        });
    });


});

function checkCookie() {
    let cTest = getCookieValue('HistoryZoom')
    if (cTest !== 'true') {
        setTimeout(() => {
        }, 1000)
        $('#startZoomIn').removeClass('d-none');
    } else if (cTest === 'true') {
        showContentCloseIntroModal();
    }
}

function showContentCloseIntroModal() {
    setCookie('HistoryZoom', 'true', 20);
    $('#startZoomIn').css('animation-name', 'zoomOut')
    $('#showContent').removeClass('d-none')
    showHideObjects()
    setTimeout(() => {
        $('#startZoomIn').addClass('d-none')
        // initTooltipBuildings()
        // if ($(window).width() > 767){
        //     tooltipBuildingsShow();
        // }
    }, 1000)
    if (document.getElementById('page-info')) {
        let modalCardInfo = new bootstrap.Modal('#page-info')
        // modalCardInfo.show();
    }
    if (document.getElementById('reg83')) {
        let reg83Modal = new bootstrap.Modal('#reg83')
        // modalCardInfo.show();
    }
}

function showHideObjects() {
    let cardRowsInfo = $('.info-card-element');
    $('#discoverBuilding').removeClass('hide-on-load')
    tooptipLabelsSwitch();
    setTimeout(() => {
        $(".ontvangsthal").removeClass('hide-on-load')
    },)
    $(".ontvangsthal").fadeIn('slow');
    cardRowsInfo.on('hide.bs.modal', () => {
        $('#discoverBuilding').removeClass('hide-on-load')
        tooptipLabelsSwitch();
        setTimeout(() => {
            $(".ontvangsthal").removeClass('hide-on-load')
        },)
        $(".ontvangsthal").fadeIn('slow');
    })
    cardRowsInfo.on('shown.bs.modal', () => {
        $('.tooltips-lablesIndex').addClass('d-none')
        toolTipBuildingsHide()
        $('#discoverBuilding').addClass('hide-on-load')
        $(".ontvangsthal").fadeOut('slow');
    })
}

function tooptipLabelsSwitch() {
    // TODO adjust the if statement to have if ontouchstart and inside it the conditionar window width
    if ("ontouchstart" in window || ($(window).width() <= 767) && $(window).width() < $(window).height()) {
        distroyNormalTooltip();
        // toolTipBuildingsHide()
        distroyTooltipBuildings()
        $('.tooltips-lablesIndex').removeClass('d-none')
        $('.tooltips-lables').addClass('d-none')
    }
    else if ($(window).width() <= 767 && $(window).width() >= $(window).height()) {
        distroyNormalTooltip()
        // toolTipBuildingsHide()
        distroyTooltipBuildings();
        $('.mobile-landscape').addClass('d-none')
        $('.tooltips-lablesIndex').removeClass('d-none')
        $('.tooltips-lables').addClass('d-none')
    }
    else {
        initNormalTooltips()
        setTimeout(() => {
            initTooltipBuildings()
            tooltipBuildingsShow()
        }, 1100)
        $('.tooltips-lablesIndex').addClass('d-none')
        $('.tooltips-lables').addClass('d-none')
        $('.mobile-landscape').addClass('d-none')
    }
}

function distroyNormalTooltip() {
    let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
    tooltipelements.forEach((el) => {
        $(el).tooltip().tooltip('dispose')
    });
}

function initNormalTooltips() {
    let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
    tooltipelements.forEach((el) => {
        $(el).tooltip({})
    });
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const getCookieValue = (name) => {
    let zoomIntrueOrFalse = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    // console.log(zoomIntrueOrFalse)
    return zoomIntrueOrFalse
}


function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            historyZoom = c.substring(nameEQ.length, c.length);
            // console.log(historyZoom)
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function websiteIntroductionModal() {
    if (document.getElementById('web-intro')) {
        let webModal = document.getElementById('web-intro')
        let modalWebsiteIntroductionModal = new bootstrap.Modal('#web-intro')
        modalWebsiteIntroductionModal.show();
        webModal.addEventListener('hidden.bs.modal', () => {
            showContentCloseIntroModal();
        })
    }
}


function Scrolldown() {
    window.location.hash = '#aboutDiv';
    console.log('window load')
}

function goToPage(pageHtml, locationDiv) {
    location.href = pageHtml;
    setTimeout(() => {
        window.load = Scrolldown();
    }, 10000)

}

function offCanvasShowHide() {
    const offCanvasAbout = document.getElementById('aboutDiv');
    if (offCanvasAbout) {
        offCanvasAbout.addEventListener('show.bs.offcanvas', () => {
            $('.tooltips-lablesIndex').addClass('d-none')
            toolTipBuildingsHide();
        })
        offCanvasAbout.addEventListener('hidden.bs.offcanvas', () => {
            if ("ontouchstart" in window || ($(window).width() <= 767) && $(window).width() < $(window).height()) {
                $('.tooltips-lablesIndex').removeClass('d-none')
            }
            else if ($(window).width() <= 767 && $(window).width() >= $(window).height()) {
                $('.tooltips-lablesIndex').removeClass('d-none')
            }
            else {
                tooltipBuildingsShow();
            }


        })
    }

}
function distroyTooltipBuildings() {
    let tooltipelementOn = document.querySelectorAll("[data-bs-toggle='tooltipOn']");
    tooltipelementOn.forEach((el) => {
        $(el).tooltip().tooltip('dispose')
    });
}
function initTooltipBuildings() {
    let tooltipElementOn = document.querySelectorAll("[data-bs-toggle='tooltipOn']");
    tooltipElementOn.forEach((el) => {
        elT = new bootstrap.Tooltip(el, {
            trigger: 'manual'
        })
    })
}

function toolTipBuildingsHide() {
    let tooltipElementOn = document.querySelectorAll("[data-bs-toggle='tooltipOn']");
    tooltipElementOn.forEach((el) => {
        if (bootstrap.Tooltip.getInstance(el)) {
            bootstrap.Tooltip.getInstance(el).hide()
        }
    })
}

function tooltipBuildingsShow() {
    let tooltipElementOn = document.querySelectorAll("[data-bs-toggle='tooltipOn']");
    tooltipElementOn.forEach((el) => {
        if (bootstrap.Tooltip.getInstance(el)) {
            bootstrap.Tooltip.getInstance(el).show()
        }

    })
}

function mobileLandscape() {
    $('#startZoomInMobile').removeClass('d-none')
    $('#startZoomInMobile').addClass('icon-mobile-rotate')
    setTimeout(() => {
        $('#startZoomInMobile').addClass('d-none')
    }, 12000)
}

function mobWindowSize() {
    let screenWidth = $(window).width();
    let screenHeight = $(window).height();
    if (screenWidth <= 767 && screenWidth <= screenHeight) {

        $('#startZoomInMobile').removeClass('d-none')
        $('#startZoomInMobile').addClass('icon-mobile-rotate')
        setTimeout(() => {
            $('#startZoomInMobile').addClass('d-none')
        }, 12000)
    } else {
        $('#startZoomInMobile').addClass('d-none')
    }
}


function drawPoly() {
    let polystr = ''
    $('map area').each((i, e) => {
        let coordsAtt = $(e).attr('coords')
        coordsAtt = coordsAtt.slice(0, -1);
        polystr += coordsAtt
    })
    jQuery('<area/>', {
        coords: polystr,
        shape: "poly",
    }).appendTo('#workmap');
    // console.log('poly', polystr)
}

function toggleMenu() {
    $("#toggleMenu,#btnGroup").on('click', function () {
        $('#btnGroup').animate({
            width: 'toggle'
        })
    })
    $(document).mouseup(function (e) {
        var container = $('#btnGroup');
        var buttonI = $('#toggleMenu')
        var iButton = $('#iButton')

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && !buttonI.is(e.target) && !iButton.is(e.target)) {
            container.hide(500);
        }
    });
}

function postManCode() {
    var settings = {
        "url": "https://eu-central-1.aws.data.mongodb-api.com/app/data-gfhas/endpoint/nami",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "Accept": "application/json",
            "api-key": "qbKJu1KHpdxtGI9jMx7zClVHtSwj4tzjfZ6ew0PnROI5drfhNBlbVYq9DhOUTT1h"
        },
        "data": JSON.stringify({
            "collection": "objectdatas",
            "database": "test",
            "dataSource": "Cluster-history",
            "projection": {
                "_id": "64f4b62a2e813d40e0927f74"
            }
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function getData() {
    var settings = {
        "url": "http://217.121.204.3:9090/objects",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

// this function is for going to about and contact div's and disabling the web-intro and page-info modals

function goToAboutContact(pageHtml) {
    location.href = pageHtml;
    $('#web-intro').load('../index.html', () => {
        $('#web-intro').remove()
    })
    setTimeout(() => {
        let webModal = new bootstrap.Modal('#web-intro')
        webModal.hide()
    }, 1000)
}
function moederModal(){
    $('#caring-laidy1').on('click',()=>{
        let modalMoeder = new bootstrap.Modal('#moeder')
        modalMoeder.show()
    })
}
function initObjcetsModal() {
    let modalDataArray;
    if (!$('body').hasClass('noJson')) {
        fetch('./modalData.json')
            .then((response) => response.json())
            .then((json) => {
                modalDataArray = json
            });
    }
    $('.objectModal').each((i, element) => {
        let elementID = element.id
        $(`#${elementID}`).on('click', () => {
            $('.polygon1').removeClass('polygon-animate')
            $('#modalFooterUl').empty();
            modalDataArray.forEach((elementData, i) => {
                if (elementData.id === elementID) {
                    $('#modalLabel').html(elementData.title)
                    $('#modalBody').html(elementData.textBody)
                    if (elementData.image !== 'none') {
                        $('#modalImage').addClass('col-12')
                        $('.noImage').addClass(['col-xl-4','col-lg-4', 'col-md-5', 'col-sm-12'])
                        $('.addCol12').removeClass(['col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12'])
                        $('.addCol12').addClass(['col-xl-8', 'col-lg-8', 'col-md-7', 'col-sm-12'])
                        $('#modalImage').removeClass('d-none')
                        $('#modalImage').attr('src', elementData.image)
                    } else {
                        $('#modalImage').removeClass('col-12')
                        $('.noImage').removeClass(['col-xl-4','col-lg-4', 'col-md-5', 'col-sm-12'])
                        $('.addCol12').addClass(['col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12'])
                        $('#modalImage').addClass('d-none')
                    }
                    // let footerList = $('#modalFooter').append('<ul></ul>').find('ul')
                    elementData.textFooter.forEach((footer, i) => {
                        $('#modalFooterUl').append(`<li>${footer}</li>`)
                    })
                    let objectModalModal = new bootstrap.Modal('#objectModal')
                    objectModalModal.show();
                }
            })

        })
    })
}


$("#btn-collapse").on('click', function () {
    if ($("#icon-collapse").hasClass('bi-chevron-down')) {
        $("#icon-collapse").removeClass('bi-chevron-down');
        $("#icon-collapse").addClass('bi-chevron-up');
    } else if ($("#icon-collapse").hasClass('bi-chevron-up')) {
        $("#icon-collapse").removeClass('bi-chevron-up');
        $("#icon-collapse").addClass('bi-chevron-down');
    }
})

function myFunc(el) {
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.display = 'block';
    var elId = el.id;
    var el1 = document.getElementById("pol1Title");
    var el2 = document.getElementById("pol2Title");
    var el3 = document.getElementById("pol3Title");
    var el4 = document.getElementById("map-a-tag");
    var el5 = document.getElementById("goInToBuilding");
    var el6 = document.getElementById("infoOnt");
    var el7 = document.getElementById("munkTitle");
    var el8 = document.getElementById("dogTitle");
    var el9 = document.getElementById("up-staires");
    var el10 = document.getElementById("patient-room");
    var el11 = document.getElementById("into-kitchen");
    var titleText;
    if (elId === "pol1") {
        tooltip.innerHTML = el1.title;
    }
    if (elId === "pol2") {
        tooltip.innerHTML = el2.title;
    }
    if (elId === "pol3") {
        tooltip.innerHTML = el3.title;
    }
    if (elId === "goToMap") {
        tooltip.innerHTML = el4.title;
    }
    if (elId === "buildingDoor" && $("#buildingDoor").hasClass('goInToBuilding')) {
        tooltip.innerHTML = el5.title;
    } else if (elId === "buildingDoor" && $("#buildingDoor").hasClass('infoOnt')) {
        tooltip.innerHTML = el6.title;
    }
    if (elId === "munk") {
        tooltip.innerHTML = el7.title;
    }
    if (elId === "dog") {
        tooltip.innerHTML = el8.title;
    }
    if (elId === "upStaires") {
        tooltip.innerHTML = el9.title;
    }
    if (elId === "patientRoom") {
        tooltip.innerHTML = el10.title;
    }
    if (elId === "inKitchen") {
        tooltip.innerHTML = el11.title;
    }
}

function myFuncHide(el) {
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.display = 'none';
    tooltip.innerHTML = '';
}

// document.addEventListener('mousemove', function (e) {
//     // console.log(e.pageX);
//     // console.log(e.pageY);
//     document.getElementById("myTooltip").style.left = (e.pageX + 5) + "px";
//     document.getElementById("myTooltip").style.top = (e.pageY + 5) + "px";
//
// });
// document.addEventListener('click', function (e) {
//     var xCord = e.pageX;
//     var yCord = e.pageY
//     console.log('h',yCord)
//     var y1Cord = yCord - 105;
//     var cor = xCord + ',' + y1Cord + ',' + '1'
//     var img1x = $('#img1').pageX;
//     var xPercent = xCord / $(document).width() * 100;
//     var yPercent = yCord / $(document).height() * 100;
//     console.log('left', e.pageX, xPercent + '%');
//     console.log('top', e.pageY, yPercent + '%');
//     console.log('width: ' + xCord)
//     console.log('height: ' + y1Cord )
//     navigator.clipboard.writeText(xCord + ',' + y1Cord)
//     jQuery('<area/>', {
//         coords : cor,
//         shape:"circle",
//     }).appendTo('#workmap');
//     $('.highLightMap').maphilight({
//         fill: true,
//         fillColor: 'FFFFFF',
//         fillOpacity: 0.1,
//         stroke: true,
//         strokeColor: 'FFFFFF',
//         alwaysOn: true,
//         strokeWidth: 2,
//         fade: true,
//         strokeOpacity: 0.5,
//         shadow: true,
//         shadowColor: 'FFFFFF',
//         shadowPosition: 'inside'
//     });
// })


