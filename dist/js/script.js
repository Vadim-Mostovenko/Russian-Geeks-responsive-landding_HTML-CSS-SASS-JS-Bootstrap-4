/* birtix */

(function(w,d,u){
    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn-ru.bitrix24.ru/b13408356/crm/site_button/loader_1_aucz4w.js');

/* wow */

new WOW().init();

/* quiz */

(function(w, d, s, o){
    var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
        if (document.readyState !== 'loading') Marquiz.init(o);
        else document.addEventListener("DOMContentLoaded", function() {
            Marquiz.init(o);
        });
    };
    d.head.insertBefore(j, d.head.firstElementChild);
  })(window, document, 'script', {
      host: '//quiz.marquiz.ru',
      id: '603a383d46c60b00440c0711',
      autoOpen: false,
      autoOpenFreq: 'once',
      openOnExit: false,
      disableOnMobile: false
    }
  );
  
(function(t, p){
    window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {
        Marquiz.add([t, p])
    })
})('Pop', {
    id: '603a048845f8ea0044060b62',
    title: 'Пройти тест',
    text: 'Пройти тест',
    delay: 11,
    textColor: '#ffffff',
    bgColor: '#f1a431',
    bonusCount: 2,
    bonusText: 'Вам доступны бонусы и скидка',
    type: 'full',
    position: 'position_top',
    shadow: 'rgba(55, 41, 126, 0)',
    blicked: true,
    pulse: 'rgba(55, 41, 126, 0.4)',
    svgColor: '#fff',
    closeColor: '#fff'}
)