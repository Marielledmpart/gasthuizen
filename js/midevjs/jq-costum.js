// document.addEventListener("DOMContentLoaded",()=>{
//     console.log('loaded now')
//     $('body').removeClass('d-none')
// })
// if(Modernizr.touch){
//     console.log('it is touch')
// }else {
//     console.log('it is not touch')
// }
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

function checkCookie() {
    let cTest = getCookieValue('HistoryZoom')
    if (cTest !== 'true') {
        setTimeout(() => {
        }, 1000)
        $('#startZoomIn').removeClass('d-none');
    } else if (cTest === 'true') {
        // $('#discoverBuilding').addClass('d-none')
        showContentCloseIntroModal();

    }
    // console.log(cTest)
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

function showContentCloseIntroModal() {
    $('#startZoomIn').removeClass('zoomIn');
    $('#startZoomIn').addClass('zoomOut');
    // setCookie('HistoryZoom', 'true', 20);
    showContent()
    showHideObjects()
    setTimeout(() => {
        $('#startZoomIn').addClass('d-none')
        toolTipAlwaysShow()
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

function showContent() {
    $('#startZoomIn').css('animation-name', '')
    $('#startZoomIn').css('animation-name', 'zoomOut')
    // localStorage.setItem("startZoomInValue", "true");
    // setCookie('HistoryZoom','true', 20);
    setTimeout(() => {
        // websiteIntroductionModal()

    }, 1000)
    $('#showContent').removeClass('d-none')
}
function Scrolldown() {
    window.location.hash = '#aboutDiv';
    console.log('window load')
}
function goToPage(pageHtml, locationDiv) {
    location.href = pageHtml;
    setTimeout(() => {
        window.load = Scrolldown();
    },10000)

}
$(document).ready(function () {
    if (!window.location.hash){
        $('html, body').animate({
        }, 300)
    }
    checkCookie()
    $('.tooltips-lables').addClass('d-none')
    toggleMenu();
    $(window).resize(() => {
        tooptipLabelsSwitch()
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
    })
    $(function () {
        // $('body').removeClass('d-none')

    }); // end ready
    // if (document.getElementById('page-info') && $('#page-info').hasClass('showOnPageLoad')) {
    //     let modalCardInfo = new bootstrap.Modal('#page-info')
    //     modalCardInfo.show();
    // }
    // let pageModal = document.getElementById('page-info')
    // pageModal.addEventListener('hidden.bs.modal', () => {
    //     showContent()
    // })

    // showHideObjects()
    initObjcet()


    // https://jsfiddle.net/eFjnU/
    function goToBuildingCycle() {
        $("#goToBuilding").fadeIn(3000)
            .delay(1000)
            .fadeOut(3000, goToBuildingCycle);
    };
    // goToBuildingCycle();
    $(".tooltip-class").hover(function () {
        $(this).attr("tooltip-data", $(this).attr("title"));
        $(this).removeAttr("title");
    }, function () {
        $(this).attr("title", $(this).attr("tooltip-data"));
        $(this).removeAttr("tooltip-data");
    });
    $("#icon-next").on("click", function () {
        var textClass = $("#img-card").attr("class");
        $("#card-rows").fadeOut(2000).fadeIn(2000)
        setTimeout(function () {
            cardArr.forEach((p, i) => {
                var pageClass = textClass.search(p.page);
                if (pageClass !== -1) {
                    p.content.forEach((e, i) => {
                        var textResult = textClass.search(e.class);
                        if (textResult !== -1) {
                            if (e.class === p.content[i].class) {
                                $("#img-card").removeClass(p.content[i].class);
                                $("#img-card").addClass(p.content[i + 1].class);
                                $("#img-card").attr('alt', p.content[i + 1].alt);
                                $("#img-card").attr('src', p.content[i + 1].src);
                                $("#text-card").text(p.content[i + 1].text);
                                $("#card-title").text(p.content[i + 1].title);
                                $("#icon-previous").show();
                                if (p.content.length === i + 2) {
                                    $("#icon-next").hide();
                                }
                            }
                        }
                    });
                }
            })
        }, 2000)
    });
    $("#icon-previous").on("click", function () {
        var textClass = $("#img-card").attr("class");
        $("#card-rows").fadeOut(2000).fadeIn(2000)
        setTimeout(function () {
            cardArr.forEach((p, i) => {
                var pageClass = textClass.search(p.page);
                if (pageClass !== -1) {
                    p.content.forEach((e, i) => {
                        var textResult = textClass.search(e.class);
                        if (textResult !== -1) {
                            if (e.class === p.content[i].class) {
                                $("#img-card").removeClass(p.content[i].class);
                                $("#img-card").addClass(p.content[i - 1].class);
                                $("#img-card").attr('src', p.content[i - 1].src);
                                $("#img-card").attr('alt', p.content[i - 1].alt);
                                $("#text-card").html(p.content[i - 1].text);
                                $("#card-title").text(p.content[i - 1].title)
                                if (i === 1) {
                                    $("#icon-previous").hide();
                                }
                                $("#icon-next").show();
                            }
                        }
                    });
                }
            })
        }, 2000)

    });


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

function mobileLandscape() {
    $('#startZoomInMobile').removeClass('d-none')
    $('#startZoomInMobile').addClass('icon-mobile-rotate')
    setTimeout(() => {
        $('#startZoomInMobile').addClass('d-none')
    }, 12000)
}

function toolTipAlwaysShow() {
    let tooltipElementOn = document.querySelectorAll('.toolTipOn');
    tooltipElementOn.forEach((el) => {
        elT = new bootstrap.Tooltip(el, {
            trigger: 'manual'
        })
        elT.show()
    })
}

function toolTipAlwaysShowAfterModalHide() {
    let tooltipElementOn = document.querySelectorAll('.toolTipOn');
    tooltipElementOn.forEach((el) => {
        bootstrap.Tooltip.getInstance(el).show()
    })
}

function toolTipAlwaysHide() {
    let tooltipElementOn = document.querySelectorAll('.toolTipOn');
    tooltipElementOn.forEach((el) => {
        bootstrap.Tooltip.getInstance(el).hide()
    })
}

function initTooltipsDisplayLabels() {
    let tooltipelements = document.querySelectorAll('.toopTipNormail');
    tooltipelements.forEach((el) => {
        $(el).tooltip({})
    });
    $('.tooltips-lables').addClass('d-none')
    $('.tooltips-lablesIndex').addClass('d-none')
}

function distroyTooltipsShowLabels() {
    let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
    tooltipelements.forEach((el) => {
        $(el).tooltip().tooltip('dispose')
    });
    $('.tooltips-lablesIndex').removeClass('d-none')
    // $('#kapelPoly').tooltip().tooltip('show')
}

function tooptipLabelsSwitch() {

    // TODO adjust the if statement to have if ontouchstart and inside it the conditionar window width
    if ("ontouchstart" in window || ($(window).width() <= 767) && $(window).width() < $(window).height()) {
        mobileLandscape()
        // $('.svgResponsive').attr('viewBox', '0 0 1519 854')
        distroyTooltipsShowLabels()
        // $('.mobile-landscape').removeClass('d-none')
    }
        // else if ($(window).width() <= 767 && $(window).width() < $(window).height()) {
        //     console.log('width is smaller thank height')
        //     mobileLandscape()
        //     // $('.svgResponsive').attr('viewBox', '0 0 1519 854')
        //     distroyTooltipsShowLabels()
        //     $('.mobile-landscape').removeClass('d-none')
    // }
    else if ($(window).width() <= 767 && $(window).width() >= $(window).height()) {
        // mobileLandscape()
        distroyTooltipsShowLabels()
        // $('.svgResponsive').attr('viewBox', '0 0 1519 854')
        $('.mobile-landscape').addClass('d-none')
    } else {
        initTooltipsDisplayLabels()

        // $('.svgResponsive').attr('viewBox', '0 0 1538 854')
        $('.mobile-landscape').addClass('d-none')
        $('.tooltips-lablesIndex').addClass('d-none')
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
    $("#toggleMenu").on('click', function () {
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


function showHideObjects() {
    let cardRowsInfo = $('.info-card-element');
    $('#discoverBuilding').removeClass('hide-on-load')
    $('#phone1').removeClass('hide-on-load')
    $('#phone11').removeClass('hide-on-load')
    tooptipLabelsSwitch();
    setTimeout(() => {
        $(".ontvangsthal").removeClass('hide-on-load')
    },)
    $(".ontvangsthal").fadeIn('slow');
    cardRowsInfo.on('hide.bs.modal', () => {
        toolTipAlwaysShowAfterModalHide()
        $('#discoverBuilding').removeClass('hide-on-load')
        $('#phone1').removeClass('hide-on-load')
        $('#phone11').removeClass('hide-on-load')
        tooptipLabelsSwitch();
        setTimeout(() => {
            $(".ontvangsthal").removeClass('hide-on-load')
        },)
        $(".ontvangsthal").fadeIn('slow');
    })
    cardRowsInfo.on('shown.bs.modal', () => {
        toolTipAlwaysHide()
        $('#discoverBuilding').addClass('hide-on-load')
        $(".ontvangsthal").fadeOut('slow');
    })
}

function initObjcet() {
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
                        $('#modalImage').removeClass('d-none')
                        $('#modalImage').attr('src', elementData.image)
                    } else {
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


