/*  BLOG NEWS GENERATOR */

var news = [

{ dTitle: "SAGSE - Buenos Aires", dNews: "The fair dedicated to gaming and amusement which takes place in Panama now also comes to Buenos Aires! A veritable temple of fun and luck, the SAGSE gaming and amusement fair brings together a great crowd within the worlds of the casino, of board games, card gamesand many others. Conferences, and exchanges will be on the programme, as well as opportunities to meet people and make contacts, among the many professionals from all over the world who will be in attendance.", dDate: "15 NOV 2016", dImg: "sagse-fair.jpg" },

{ dTitle: "ICE Totally Gaming - London", dNews: "ICE Totally Gaming represents the entire gaming industry covering landbased and online channels across all sectors. ICE is a meeting place, market place, educational and debating forum, networking and social hub for the gaming industry involving the demand and supply side, regulators, third parties, opinion formers and industry leaders.", dDate: "07 FEB 2017", dImg: "ice-img.jpg" },

{ dTitle: "FADJA - Bogotà", dNews: "The unions of the gaming industry in Colombia: ASOJUEGOS, ASOPOSTAL, FECOLJUEGOS and COFIAZAR, once again approve of the show with all of its affiliates.", dDate: "26 APR 2017", dImg: "fadja-img.jpg" },

{ dTitle: "PGS - Lima", dNews: "LatinAmerican Gaming Show is a 2 day event being held from 21st June to 22nd June 2017 at the Jockey Exhibition Centre in Lima, Peru. This event showcases products like Slot machines manufactures, live gaming manufacturers, architects, designers technology, cctv, security, carpeting spare parts etc. In the Security & Defense, Toys & Games industries etc. in the Security & Defense, Toys & Games industries.", dDate: "21 JUN 2017", dImg: "pgs-img.jpg" },

{ dTitle: "Global Gaming Expo - Las Vegas", dNews: "What is Global Gaming Expo (G2E)?</br>Global Gaming Expo (G2E) is the international gaming trade show and conference “by the industry and for the industry.” G2E is the best place for anyone working in gaming to see the latest products, learn the trends, and network with the Who’s Who. It offers a 360-degree view of the industry from slots and table games to igaming and food, beverage, and hospitality.", dDate: "03 OCT 2017", dImg: "g2e-img.jpg" },

{ dTitle: "Excellence in iGaming - Berlin", dNews: "EiG (European iGaming Congress and Expo) takes place in Berlin, Germany from 30.10 to 01.11.17.", dDate: "30 OCT 2017", dImg: "eig-img.jpg" },

{ dTitle: "Quinel - Certification", dNews: "Innovation means nothing without credibility, and at ARMANAGEMENT, we know that. Our gaming platforms will be certified by Quinel, one of the leading international laboratories in the gaming industry, taking our products one step further. Now we are able to take our operations to Colombia.", dDate: "03 NOV 2017", dImg: "quinelCert.jpg" },

{ dTitle: "SAGSE LATAM - Buenos Aires", dNews: "The fair dedicated to gaming and amusement which takes place in Panama now also comes to Buenos Aires! A veritable temple of fun and luck, the SAGSE gaming and amusement fair brings together a great crowd within the worlds of the casino, of board games, card gamesand many others. Conferences, and exchanges will be on the programme, as well as opportunities to meet people and make contacts, among the many professionals from all over the world who will be in attendance.", dDate: "07 NOV 2017", dImg: "sagse2017-img.jpg" },

{ dTitle: "Online Gaming Show - Cartagena de Indias", dNews: "THE CARTAGENA DE INDIAS ONLINE GAMING SHOW, OGS, will showcase equipment and games of the best brands and will demonstrate the latest products and services in the sector, solutions for the online market, methods of payment, operation, etc. Cartagena de Indias is strategically located between Central America and South America, which will allow the call and assistance of entrepreneurs from the entire Caribbean and Andean region, who will be able to know first hand, the most complete commercial offer of Online Games and the potential of investment and operation that present the new markets and the new regulation.", dDate: "22 NOV 2017", dImg: "online-gaming-img.jpg" },

{ dTitle: " Malta iGaming Summit - Attard - STAND S 86", dNews: "The third edition of SiGMA took place in November 2016, cementing itself as the largest igaming show in Malta. Twice the delegates, twice the exhibitors, twice the conferences – this pretty much sums up the response we received since SiGMA took off in 2014. Some might still ask, “But why Malta?” Malta is host to some 300 gaming companies, 450 licenses and a strong workforce of 10,000. The idea of creating a platform to showcase the industry had been brewing in many minds.", dDate: "22 NOV 2017", dImg: "sigma-img.jpg" },

{ dTitle: "ICE Totally Gaming - London", dNews: "It is a brave new world and the award winning show ICE Totally Gaming returns on the 6-8 February 2018 to London ExCeL. ICE 2017, delivered a record audited total attendance of 28,487, further increasing the reputation of ICE as the most international business event anywhere in gaming.", dDate: "06 FEB 2018", dImg: "ice-img.jpg" },

{ dTitle: "FADJA - Bogotà", dNews: "The unions of the gaming industry in Colombia: ASOJUEGOS, ASOPOSTAL, FECOLJUEGOS and COFIAZAR, once again approve of the show with all of its affiliates.", dDate: "05 APR 2018", dImg: "fadja.jpg" },


             ];


var newsLen = news.length - 1;

        (function() {

        for (var i = newsLen; i >= 0; i--) {
            $("#blog-outer").append("\
            <div class='donation-item'>\
            <img src='' class='full-img' />\
            <div class='row no-gutter equal-height'>\
              <div class='col-md-2 col-sm-12 blog-date'>\
                  <div>\
                    <h6><span>" + news[i].dDate + "</span></h6>\
                  </div>\
              </div>\
                <div class='col-md-5 col-sm-12 blog-img'>\
                    <div class='img-wrap'><img src='images/soccer/" + news[i].dImg + "' alt='donation-item'></div>\
                </div>\
                <div class='col-md-5 col-sm-12 position-relative info-outer'>\
                    <div class='info'>\
                        <div class='wrap'>\
                            <div class='title'>" + news[i].dTitle + "</div>\
                            <p> " + news[i].dNews + "</p>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            </div>\
            ");
        }

        $("#home-news").append("<div class='home-news-date'>" + news[newsLen].dDate + " </div><div class='home-news'>" + news[newsLen].dNews.substring(0,80) + "..." + " </div><a href='blog.html'>Read more..</a>");
        $("#home-news2").append("<div class='home-news-date'>" + news[newsLen-1].dDate + " </div><div class='home-news'>" + news[newsLen-1].dNews.substring(0,80) + "..." + " </div><a href='blog.html'>Read more..</a>");
        $("#home-news3").append("<div class='home-news-date'>" + news[newsLen-2].dDate + " </div><div class='home-news'>" + news[newsLen-2].dNews.substring(0,80) + "..." + " </div><a href='blog.html'>Read more..</a>");

        })();


/*  BLOG NEWS SHOW FULL IMAGE */

        (function(){

          $( ".img-wrap > img" ).hover(
            function() {
              $(this).addClass('no-mouse-event');
              var imgSrc = $(this).attr('src');
              $(this).parent().parent().parent().siblings(".full-img").attr('src', imgSrc ).siblings().children().not(".blog-date").css({"opacity":"0.07"});
            });

        })();

         (function() {
          $(".donation-item").mouseleave(function(){
            setTimeout(function() {
                $( ".img-wrap > img").removeClass('no-mouse-event');
            }, 500);
            $(this).children('.full-img').attr('src', '' ).siblings().children().css({"opacity":"1","visibility":"visible"});

})
}) ();


/* Contact modal */

$( ".contact-button, #contact-close" ).on('click', function(e){
   e.preventDefault();
  $( "#form-modal" ).fadeToggle( "medium");
});
