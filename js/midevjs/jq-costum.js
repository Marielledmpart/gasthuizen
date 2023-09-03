// import '../../js/bootstrap.min'
// import * as bootstrap from '../../js/bootstrap.min'
// window.bootstrap = bootstrap;
// let dogModalJq = new bootstrap.modal('dogModal');
// $('#dog').onclick(function (){
//     dogModalJq.show();
// })
$(document).ready(function () {
    submitObject()
    $('#loadElement').removeClass('d-none')
    window.onload = function () {
        console.log('loaded')
        $('#spinLoad').addClass('d-none')
        $('#loadElement').removeClass('d-none')
    }

    tooptipPopoverSwitch()
    $(window).resize(() => {
        tooptipPopoverSwitch()
    })

    // showContent();
    if (document.getElementById('page-info') && $('#page-info').hasClass('showOnPageLoad')) {
        let modalCardInfo = new bootstrap.Modal('#page-info')
        modalCardInfo.show();
    }
    showHideObjects()
    initObjcet()
    $("[data-tt=tooltip]").tooltip();
    $("#card-info1").fadeIn(3000);


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

    // this function will check cards in each page and load contents

    function loadCardContent() {

    }

    // function for card content , it will replace content based on cardArr
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

function showContent() {
    $('#startZoomIn').css('animation-name', '')
    $('#startZoomIn').css('animation-name', 'zoomOut')
    setTimeout(() => {
        $('#startZoomIn').addClass('d-none')
        if (document.getElementById('page-info')) {
            let modalCardInfo = new bootstrap.Modal('#page-info')
            modalCardInfo.show();
        }
    }, 2000)
    $('#showContent').removeClass('d-none')
}

function showHideObjects() {
    let cardRowsInfo = $('.info-card-element');
    cardRowsInfo.on('hide.bs.modal', () => {
        $('#discoverBuilding').removeClass('hide-on-load')
        setTimeout(() => {
            $(".ontvangsthal").removeClass('hide-on-load')
        }, 2000)
        $(".ontvangsthal").fadeIn('slow');
    })
    cardRowsInfo.on('shown.bs.modal', () => {
        $('#discoverBuilding').addClass('hide-on-load')
        $(".ontvangsthal").fadeOut('slow');
    })
}
function initObjcet() {
    let modalDataArray;
    fetch('./modalData.json')
        .then((response) => response.json())
        .then((json) => {
            modalDataArray = json
        });
    $('.objectModal').each((i, element) => {
        let elementID = element.id
        console.log(element.id)
        $(`#${elementID}`).on('click', () => {
            $('#formObjectId').val(elementID)
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
                    if (elementData.textFooter.length >= 1) {
                        elementData.textFooter.forEach((footer, i) => {
                            $('#modalFooterUl').append(`<li>${footer}</li>`)
                        })
                    } else {
                        console.log('empty')
                    }
                    let objectModalModal = new bootstrap.Modal('#formObjectModal')
                    objectModalModal.show();
                }
            })

        })
    })
}
function submitObject() {
    $('#objectDataForm').submit(function (e) {
        e.preventDefault();
        const data = {
            objectId: $('#formObjectId').val(),
            title: $('#formObjectTitle').val(),
            imagePath: $('#formObjectImage').val(),
            textBody: $('#formObjectText').val()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/objects',
            data: JSON.stringify(data),
            contentType: 'application/json',
        })
            .done((data) => {
                $('#objectDataForm')[0].reset();
                console.log({data});
            })
            .fail((err) => {
                console.error(err);
            })
            .always(() => {
                console.log('always called');
            });
    });
}
function tooptipPopoverSwitch() {
    if ($(window).width() <= 767) {
        $("[data-bs-toggle='tooltip']").tooltip('dispose')
        $('#tooltipNg').removeClass('nnami');
        $('#lb-info-row').removeClass('d-none');
        // $('#backToHall').tooltip('dispose');
        console.log($(window).width())
        // $('#backToHall').popover({
        //     placement: 'auto',
        //     html: true,
        //     title: 'User Info <a href="#" class="close" data-bs-dismiss="alert">&times;</a>',
        //     content: 'hello',
        //     container: 'body',
        // });
        // $('#backToHall').popover('show')
        // $(document).on("click", ".popover .close", function () {
        //     $('#backToHall').popover('hide')
        // });
    } else {
        initTooltip()
        $('#tooltipNg').addClass('nnami');
        // $('#lb-info-row').addClass('d-none');
        // $('#backToHall').popover('dispose');
        // console.log($(window).width())
        // // $('#backToHall').addClass('animated swing')
        // $('#backToHall').tooltip({
        //     placement:'right',
        //     title:'back to hall',
        //     animation:true,
        // });
        // $('#backToHall').attr('data-bs-animation', 'animated rollIn')
        // let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
        // tooltipelements.forEach((el) => {
        //     new bootstrap.Tooltip(el);
        // });
    }
}

function initTooltip() {
    let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
    tooltipelements.forEach((el) => {
        new bootstrap.Tooltip(el);
    });
}

function blinkVoetnoten(eId) {
    let targetId = $(`#${eId}`).attr('href')
    targetId = targetId.substring(1)
    elParent = $(`#${targetId}:parent`).parent()
    elParent.addClass('blink')
    setTimeout(() => {
        elParent.removeClass('blink')
    }, 6000)
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

document.addEventListener('mousemove', function (e) {
    // console.log(e.pageX);
    // console.log(e.pageY);
    document.getElementById("myTooltip").style.left = (e.pageX + 5) + "px";
    document.getElementById("myTooltip").style.top = (e.pageY + 5) + "px";

});
document.addEventListener('click', function (e) {
    var xCord = e.pageX;
    var yCord = e.pageY
    console.log('h', yCord)
    var y1Cord = yCord - 226;
    var cor = xCord + ',' + y1Cord + ',' + '1'
    var img1x = $('#img1').pageX;
    var xPercent = xCord / $(document).width() * 100;
    var yPercent = yCord / $(document).height() * 100;
    console.log('left', e.pageX, xPercent + '%');
    console.log('top', e.pageY, yPercent + '%');
    console.log('width: ' + xCord)
    console.log('height: ' + y1Cord)
    navigator.clipboard.writeText(xCord + ',' + y1Cord)
    jQuery('<area/>', {
        coords: cor,
        shape: "circle",
    }).appendTo('#workmap');
    $('.highLightMap').maphilight({
        fill: true,
        fillColor: 'FFFFFF',
        fillOpacity: 0.1,
        stroke: true,
        strokeColor: 'FFFFFF',
        alwaysOn: true,
        strokeWidth: 2,
        fade: true,
        strokeOpacity: 0.5,
        shadow: true,
        shadowColor: 'FFFFFF',
        shadowPosition: 'inside'
    });
})

function goToPage(pageHtml) {
    location.href = pageHtml;
}
