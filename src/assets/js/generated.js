function generatedJs() {
    $(".privacy-banner").css("display", "none");
    localStorage.bannerClosed = "true";
    //setCurrentMenu();
    try {
        tabs();
    } catch (ex) {}
    try {
        initSlider();
    } catch (exs) {}
};

function scrollMenu() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
          $("header").addClass("menu-sticky");
        } else {
          $("header").removeClass("menu-sticky");
        }
    });
}

function scrollToTop() {
    $("#back-to-top").fadeOut();
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 250) {
        $("#back-to-top").fadeIn(1400);
      } else {
        $("#back-to-top").fadeOut(400);
      }
    });
}

function setCurrentMenu() {
    var current = location.pathname.split("/")[1];
    console.log(current);
    if (current !== undefined && current !== null && current !== "") {
        if (current === "portfoliodetails.php") {
            current = "portfolio.php";
        }

        $(".nav-item").each(function () {
            var $this = $(this).find(".nav-link");
            if($this.attr("href").indexOf(current) !== -1) {
                $this.addClass("exact-active active");
            }
        });
    } else {
        $($(".nav-item")[0]).find(".nav-link").addClass("exact-active active");
    }
}

function initSlider() {
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
    });
    $(".slider-nav").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
}

function cookieAcceptance() {
    if (!localStorage.bannerClosed) {
        $(".privacy-banner").css("display", "inherit");
    } else {
        $(".privacy-banner").css("display", "none");
    }
    if (navigator.userAgent.match(/Opera|OPR\//)) {
        $(".privacy-banner").css("display", "inherit");
    }
}

function tabs() {
    let homepageIntervalObj;
    try {
        let HM = {
            jqs_slideList: ".slideList",
            jqs_tabList: ".slides .carouselLinks",
            init: function() {
                let aSliders = $(this.jqs_slideList);
                if (aSliders.length > 0) {
                    this.slideShow(aSliders);
                }
            },
            slideShow: function(eSlideListParam) {
                let slideList = eSlideListParam,
                slides = slideList.find("li"),
                tabList = slideList.siblings(".carouselLinks"),
                tabs = tabList.find(".object-new"),
                speed = 600;
                tabs.on("click", "a", function(e) {
                    $(this).trigger("slides.swap");
                    e.preventDefault();
                });

                homepageIntervalObj = setInterval(function() {
                    try {
                        let current = parseInt($("li.selected a").data("links-to").split("_")[1], 10);
                        let idx = current - 1;
                        let max = $(".carouselLinks li a").length;
                        idx = current < max ? idx + 1 : 0;
                        $(".object-new a:eq(" + idx + ")").trigger("click");
                    } catch (ex) {}
                }, 3000);
                
                tabs.find("a").bind("slides.swap", function() {
                    let self = $(this),
                    selfIndex = self.parent().index(),
                    targetSlide = slides.eq(selfIndex);
                    slides.filter(".active").stop(true, false).fadeOut(speed, function() {
                        $(this).removeClass("active");
                    });
                    targetSlide.stop(true, false).fadeIn(speed).addClass("active");

                    tabs.removeClass("selected");
                    self.parent().addClass("selected");
                });
            }
        };
        HM.init();
    } catch (exc) {}
  }