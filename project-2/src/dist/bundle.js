(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const apps = require("../data/apps");

const getAll = ({ Id, appName, domain, mimeType, published } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(apps);

    if (Id) {
      result = result.filter((item) => item.Id === Number(Id));
    }

    if (appName) {
      result = result.filter((item) => item.appName.toLowerCase().includes(appName.toLowerCase().trim()));
    }

    if (domain) {
      //multiple domain selected then perform filter on it
      result = domain.flatMap((domainItem) => result.filter(({ domain }) => domain.includes(domainItem) ? domain : ``));

      //sorts retrieve result by its Id
      result = result.sort((firstRow, secondRow) => firstRow.Id - secondRow.Id);
    }

    if (mimeType) {
      result = result.filter((item) => item.mimeType === mimeType);
    }

    if (published && published != `all`) {
      result = result.filter((item) => item.published.includes(published));
    }

    resolve({ code: 200, data: result });
  });

const getById = (Id) =>
  new Promise((resolve) => {
    const app = apps.find((app) => app.Id === Number(Id));

    if (app) {
      resolve({ code: 200, data: app });
    } else {
      resolve({
        code: 404,
        data: { message: `No app found for id ${Id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

},{"../data/apps":2}],2:[function(require,module,exports){
module.exports=[{"Id":1,"appName":"Swanirm","domain":"so-net.ca","mimeType":"video/quicktime","published":"No"},
    {"Id":2,"appName":"Konklux","domain":"auda.org","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":3,"appName":"Zamit","domain":"imdb.com","mimeType":"video/x-msvideo","published":"Yes"},
    {"Id":4,"appName":"Fixflex","domain":"barnesandnoble.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":5,"appName":"Flexidy","domain":"seattletimes.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":6,"appName":"Voltsillam","domain":"princeton.edu","mimeType":"image/gif","published":"No"},
    {"Id":7,"appName":"Lotstring","domain":"ox.ca","mimeType":"audio/mpeg3","published":"No"},
    {"Id":8,"appName":"Keylex","domain":"nymag.com","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":9,"appName":"Sonair","domain":"indiegogo.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":10,"appName":"Mat Lam Tam","domain":"homestead.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":11,"appName":"Tres-Zap","domain":"cmu.edu","mimeType":"image/png","published":"No"},
    {"Id":12,"appName":"Lotstring","domain":"weibo.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":13,"appName":"Fixflex","domain":"samsung.com","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":14,"appName":"Transcof","domain":"usda.gov","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":15,"appName":"Sub-Ex","domain":"uol.com","mimeType":"image/gif","published":"Yes"},
    {"Id":16,"appName":"Voltsillam","domain":"jalbum.net","mimeType":"audio/mpeg3","published":"No"},
    {"Id":17,"appName":"Stringtough","domain":"diigo.com","mimeType":"video/mpeg","published":"No"},
    {"Id":18,"appName":"Opela","domain":"ucla.edu","mimeType":"image/jpeg","published":"No"},
    {"Id":19,"appName":"Veribet","domain":"globo.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":20,"appName":"Rank","domain":"princeton.edu","mimeType":"audio/x-mpeg-3","published":"No"},
    {"Id":21,"appName":"Sonsing","domain":"walmart.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":22,"appName":"Trippledex","domain":"meetup.com","mimeType":"image/png","published":"Yes"},
    {"Id":23,"appName":"Wrapsafe","domain":"squarespace.com","mimeType":"video/avi","published":"No"},
    {"Id":24,"appName":"Home Ing","domain":"icio.us","mimeType":"video/mpeg","published":"Yes"},
    {"Id":25,"appName":"Tampflex","domain":"icq.com","mimeType":"image/png","published":"No"},
    {"Id":26,"appName":"Overhold","domain":"sourceforge.net","mimeType":"video/avi","published":"Yes"},
    {"Id":27,"appName":"Aerified","domain":"icio.us","mimeType":"video/mpeg","published":"No"},
    {"Id":28,"appName":"Asoka","domain":"pinterest.com","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":29,"appName":"Flowdesk","domain":"biglobe.us","mimeType":"image/png","published":"Yes"},
    {"Id":30,"appName":"Opela","domain":"vistaprint.com","mimeType":"application/pdf","published":"No"},
    {"Id":31,"appName":"Wrapsafe","domain":"ask.com","mimeType":"image/x-tiff","published":"No"},
    {"Id":32,"appName":"Flexidy","domain":"statcounter.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":33,"appName":"Stringtough","domain":"nsw.gov","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":34,"appName":"Zoolab","domain":"noaa.gov","mimeType":"application/excel","published":"No"},
    {"Id":35,"appName":"Fixflex","domain":"vkontakte.us","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":36,"appName":"Zathin","domain":"cocolog-nifty.com","mimeType":"image/tiff","published":"No"},
    {"Id":37,"appName":"Veribet","domain":"arstechnica.com","mimeType":"video/msvideo","published":"Yes"},
    {"Id":38,"appName":"Konklux","domain":"imageshack.us","mimeType":"image/gif","published":"No"},
    {"Id":39,"appName":"Gembucket","domain":"ibm.com","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":40,"appName":"Andalax","domain":"mayoclinic.com","mimeType":"image/gif","published":"Yes"},
    {"Id":41,"appName":"Voltsillam","domain":"aol.com","mimeType":"text/plain","published":"No"},
    {"Id":42,"appName":"Treeflex","domain":"xrea.com","mimeType":"video/quicktime","published":"Yes"},
    {"Id":43,"appName":"Tin","domain":"hostgator.com","mimeType":"video/mpeg","published":"No"},
    {"Id":44,"appName":"Tin","domain":"indiatimes.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":45,"appName":"Cardguard","domain":"a8.net","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":46,"appName":"Bamity","domain":"topsy.com","mimeType":"text/plain","published":"No"},
    {"Id":47,"appName":"Opela","domain":"wix.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":48,"appName":"Bamity","domain":"apple.com","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":49,"appName":"Flowdesk","domain":"squarespace.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":50,"appName":"Voyatouch","domain":"w3.org","mimeType":"application/excel","published":"No"},
    {"Id":51,"appName":"Prodder","domain":"time.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":52,"appName":"Konklux","domain":"merriam-webster.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":53,"appName":"Ventosanzap","domain":"tmall.com","mimeType":"application/excel","published":"No"},
    {"Id":54,"appName":"Ronstring","domain":"miitbeian.gov","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":55,"appName":"Asoka","domain":"rambler.us","mimeType":"application/msword","published":"No"},
    {"Id":56,"appName":"Quo Lux","domain":"yahoo.ca","mimeType":"video/quicktime","published":"Yes"},
    {"Id":57,"appName":"Sonair","domain":"statcounter.com","mimeType":"video/msvideo","published":"No"},
    {"Id":58,"appName":"Keylex","domain":"indiatimes.com","mimeType":"application/pdf","published":"Yes"},
    {"Id":59,"appName":"Cardguard","domain":"globo.com","mimeType":"image/jpeg","published":"No"},
    {"Id":60,"appName":"Vagram","domain":"google.us","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":61,"appName":"Daltfresh","domain":"elpais.com","mimeType":"application/x-msexcel","published":"No"},
    {"Id":62,"appName":"Redhold","domain":"csmonitor.com","mimeType":"video/x-msvideo","published":"Yes"},
    {"Id":63,"appName":"Holdlamis","domain":"g.ca","mimeType":"video/x-msvideo","published":"Yes"},
    {"Id":64,"appName":"Bamity","domain":"qq.com","mimeType":"image/x-tiff","published":"No"},
    {"Id":65,"appName":"Rank","domain":"npr.org","mimeType":"image/gif","published":"No"},
    {"Id":66,"appName":"Wrapsafe","domain":"paginegialle.ca","mimeType":"video/x-msvideo","published":"No"},
    {"Id":67,"appName":"Stronghold","domain":"washingtonpost.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":68,"appName":"Toughjoyfax","domain":"yale.edu","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":69,"appName":"Ventosanzap","domain":"bloglines.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":70,"appName":"Bitchip","domain":"drupal.org","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":71,"appName":"Bigtax","domain":"va.gov","mimeType":"video/avi","published":"Yes"},
    {"Id":72,"appName":"Sonsing","domain":"bing.com","mimeType":"application/msword","published":"No"},
    {"Id":73,"appName":"Bigtax","domain":"apple.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":74,"appName":"Quo Lux","domain":"domainmarket.com","mimeType":"video/quicktime","published":"No"},
    {"Id":75,"appName":"Otcom","domain":"tmall.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":76,"appName":"Konklux","domain":"msu.edu","mimeType":"application/excel","published":"No"},
    {"Id":77,"appName":"Bitchip","domain":"themeforest.net","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":78,"appName":"Bitwolf","domain":"tinyurl.com","mimeType":"application/pdf","published":"Yes"},
    {"Id":79,"appName":"Aerified","domain":"prweb.com","mimeType":"image/gif","published":"Yes"},
    {"Id":80,"appName":"Vagram","domain":"nature.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":81,"appName":"Home Ing","domain":"miitbeian.gov","mimeType":"image/png","published":"Yes"},
    {"Id":82,"appName":"Rank","domain":"jalbum.net","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":83,"appName":"Tin","domain":"a8.net","mimeType":"application/x-excel","published":"Yes"},
    {"Id":84,"appName":"Subin","domain":"stumbleupon.com","mimeType":"video/quicktime","published":"No"},
    {"Id":85,"appName":"Tin","domain":"theguardian.com","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":86,"appName":"Zathin","domain":"state.us","mimeType":"video/msvideo","published":"Yes"},
    {"Id":87,"appName":"Veribet","domain":"buzzfeed.com","mimeType":"application/msword","published":"Yes"},
    {"Id":88,"appName":"Tin","domain":"yahoo.ca","mimeType":"audio/x-mpeg-3","published":"No"},
    {"Id":89,"appName":"Kanlam","domain":"blogs.com","mimeType":"application/powerpoint","published":"No"},
    {"Id":90,"appName":"Bitwolf","domain":"technorati.com","mimeType":"video/quicktime","published":"Yes"},
    {"Id":91,"appName":"Fix San","domain":"techcrunch.com","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":92,"appName":"Zoolab","domain":"google.us","mimeType":"video/avi","published":"No"},
    {"Id":93,"appName":"Y-Solowarm","domain":"bigcartel.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":94,"appName":"It","domain":"rakuten.ca","mimeType":"image/gif","published":"No"},
    {"Id":95,"appName":"Zamit","domain":"multiply.com","mimeType":"image/jpeg","published":"No"},
    {"Id":96,"appName":"Opela","domain":"1und1.us","mimeType":"application/msword","published":"Yes"},
    {"Id":97,"appName":"Prodder","domain":"chronoengine.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":98,"appName":"Fix San","domain":"weibo.com","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":99,"appName":"Solarbreeze","domain":"google.us","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":100,"appName":"Temp","domain":"hubpages.com","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":101,"appName":"Fix San","domain":"tmall.com","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":102,"appName":"Temp","domain":"blogspot.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":103,"appName":"Aerified","domain":"stanford.edu","mimeType":"application/x-msexcel","published":"No"},
    {"Id":104,"appName":"Y-Solowarm","domain":"wp.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":105,"appName":"Bitchip","domain":"irs.gov","mimeType":"video/avi","published":"No"},
    {"Id":106,"appName":"Otcom","domain":"yale.edu","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":107,"appName":"Viva","domain":"flavors.us","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":108,"appName":"Lotstring","domain":"walmart.com","mimeType":"image/gif","published":"Yes"},
    {"Id":109,"appName":"Mat Lam Tam","domain":"yandex.us","mimeType":"image/gif","published":"Yes"},
    {"Id":110,"appName":"Pannier","domain":"studiopress.com","mimeType":"image/png","published":"No"},
    {"Id":111,"appName":"Vagram","domain":"techcrunch.com","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":112,"appName":"Konklab","domain":"artisteer.com","mimeType":"application/x-troff-msvideo","published":"Yes"},
    {"Id":113,"appName":"Bamity","domain":"exblog.ca","mimeType":"application/excel","published":"Yes"},
    {"Id":114,"appName":"Y-Solowarm","domain":"shop-pro.ca","mimeType":"video/quicktime","published":"Yes"},
    {"Id":115,"appName":"Fix San","domain":"lycos.com","mimeType":"application/x-excel","published":"No"},
    {"Id":116,"appName":"Sonair","domain":"webmd.com","mimeType":"application/msword","published":"Yes"},
    {"Id":117,"appName":"Zamit","domain":"bloglovin.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":118,"appName":"Tampflex","domain":"opensource.org","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":119,"appName":"Job","domain":"comsenz.com","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":120,"appName":"Asoka","domain":"pagesperso-orange.ca","mimeType":"application/x-msexcel","published":"No"},
    {"Id":121,"appName":"Y-Solowarm","domain":"cbslocal.com","mimeType":"application/x-msexcel","published":"No"},
    {"Id":122,"appName":"Quo Lux","domain":"wikimedia.org","mimeType":"video/quicktime","published":"Yes"},
    {"Id":123,"appName":"Subin","domain":"icio.us","mimeType":"video/quicktime","published":"Yes"},
    {"Id":124,"appName":"Tempsoft","domain":"npr.org","mimeType":"audio/mpeg3","published":"No"},
    {"Id":125,"appName":"Bytecard","domain":"berkeley.edu","mimeType":"video/avi","published":"No"},
    {"Id":126,"appName":"Holdlamis","domain":"hud.gov","mimeType":"text/plain","published":"Yes"},
    {"Id":127,"appName":"Bitwolf","domain":"reference.com","mimeType":"image/gif","published":"Yes"},
    {"Id":128,"appName":"Bigtax","domain":"ustream.us","mimeType":"video/msvideo","published":"No"},
    {"Id":129,"appName":"Zaam-Dox","domain":"skype.com","mimeType":"application/msword","published":"Yes"},
    {"Id":130,"appName":"Opela","domain":"google.net","mimeType":"text/plain","published":"Yes"},
    {"Id":131,"appName":"Sonsing","domain":"mayoclinic.com","mimeType":"application/excel","published":"No"},
    {"Id":132,"appName":"Daltfresh","domain":"ca.gov","mimeType":"text/plain","published":"Yes"},
    {"Id":133,"appName":"Namfix","domain":"mapy.ca","mimeType":"image/tiff","published":"No"},
    {"Id":134,"appName":"Domainer","domain":"joomla.org","mimeType":"image/x-tiff","published":"No"},
    {"Id":135,"appName":"Stronghold","domain":"amazonaws.com","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":136,"appName":"Span","domain":"cnn.com","mimeType":"application/excel","published":"No"},
    {"Id":137,"appName":"Konklux","domain":"yolasite.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":138,"appName":"Solarbreeze","domain":"wunderground.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":139,"appName":"Mat Lam Tam","domain":"pcworld.com","mimeType":"application/x-excel","published":"No"},
    {"Id":140,"appName":"Subin","domain":"google.ca","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":141,"appName":"Veribet","domain":"pcworld.com","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":142,"appName":"Bigtax","domain":"paginegialle.net","mimeType":"text/plain","published":"No"},
    {"Id":143,"appName":"Tresom","domain":"wordpress.org","mimeType":"application/msword","published":"Yes"},
    {"Id":144,"appName":"Ventosanzap","domain":"freewebs.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":145,"appName":"Bamity","domain":"netscape.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":146,"appName":"Treeflex","domain":"pcworld.com","mimeType":"video/mpeg","published":"No"},
    {"Id":147,"appName":"Temp","domain":"va.gov","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":148,"appName":"Greenlam","domain":"behance.net","mimeType":"text/plain","published":"Yes"},
    {"Id":149,"appName":"Wrapsafe","domain":"who.net","mimeType":"video/quicktime","published":"No"},
    {"Id":150,"appName":"Hatity","domain":"fda.gov","mimeType":"image/tiff","published":"Yes"},
    {"Id":151,"appName":"Voltsillam","domain":"wiley.com","mimeType":"application/msword","published":"No"},
    {"Id":152,"appName":"Stronghold","domain":"msu.edu","mimeType":"text/plain","published":"No"},
    {"Id":153,"appName":"Stringtough","domain":"ocn.us","mimeType":"image/tiff","published":"Yes"},
    {"Id":154,"appName":"Sonair","domain":"blog.com","mimeType":"image/jpeg","published":"No"},
    {"Id":155,"appName":"Alpha","domain":"economist.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":156,"appName":"Redhold","domain":"theguardian.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":157,"appName":"Matsoft","domain":"salon.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":158,"appName":"Keylex","domain":"hugedomains.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":159,"appName":"Gembucket","domain":"patch.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":160,"appName":"Voyatouch","domain":"google.com","mimeType":"video/quicktime","published":"No"},
    {"Id":161,"appName":"Zoolab","domain":"springer.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":162,"appName":"Aerified","domain":"blogtalkradio.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":163,"appName":"Duobam","domain":"mac.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":164,"appName":"Fixflex","domain":"plala.us","mimeType":"application/excel","published":"Yes"},
    {"Id":165,"appName":"Opela","domain":"aol.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":166,"appName":"Fintone","domain":"rediff.com","mimeType":"image/jpeg","published":"Yes"},
    {"Id":167,"appName":"Ventosanzap","domain":"livejournal.com","mimeType":"image/jpeg","published":"Yes"},
    {"Id":168,"appName":"Treeflex","domain":"biglobe.us","mimeType":"application/pdf","published":"Yes"},
    {"Id":169,"appName":"Otcom","domain":"com.com","mimeType":"image/gif","published":"No"},
    {"Id":170,"appName":"Flowdesk","domain":"sfgate.com","mimeType":"image/gif","published":"No"},
    {"Id":171,"appName":"Latlux","domain":"forbes.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":172,"appName":"Stringtough","domain":"123-reg.ca","mimeType":"application/excel","published":"No"},
    {"Id":173,"appName":"Fix San","domain":"tiny.ca","mimeType":"application/x-msexcel","published":"No"},
    {"Id":174,"appName":"Ronstring","domain":"europa.edu","mimeType":"image/gif","published":"No"},
    {"Id":175,"appName":"Solarbreeze","domain":"reddit.com","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":176,"appName":"Zoolab","domain":"unicef.org","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":177,"appName":"Span","domain":"digg.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":178,"appName":"Regrant","domain":"scientificamerican.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":179,"appName":"Tin","domain":"webnode.com","mimeType":"image/x-tiff","published":"Yes"},
    {"Id":180,"appName":"Temp","domain":"freewebs.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":181,"appName":"Daltfresh","domain":"mlb.com","mimeType":"image/png","published":"No"},
    {"Id":182,"appName":"Tresom","domain":"hatena.us","mimeType":"image/tiff","published":"No"},
    {"Id":183,"appName":"Holdlamis","domain":"archive.org","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":184,"appName":"Tresom","domain":"yahoo.ca","mimeType":"text/plain","published":"Yes"},
    {"Id":185,"appName":"Subin","domain":"myspace.com","mimeType":"text/plain","published":"Yes"},
    {"Id":186,"appName":"Viva","domain":"dedecms.com","mimeType":"application/powerpoint","published":"No"},
    {"Id":187,"appName":"Temp","domain":"hp.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":188,"appName":"Kanlam","domain":"gmpg.org","mimeType":"video/mpeg","published":"Yes"},
    {"Id":189,"appName":"Cardify","domain":"samsung.com","mimeType":"video/avi","published":"No"},
    {"Id":190,"appName":"Tres-Zap","domain":"slate.com","mimeType":"application/msword","published":"Yes"},
    {"Id":191,"appName":"Overhold","domain":"youtube.com","mimeType":"image/gif","published":"Yes"},
    {"Id":192,"appName":"Trippledex","domain":"skype.com","mimeType":"image/png","published":"Yes"},
    {"Id":193,"appName":"Rank","domain":"mac.com","mimeType":"video/mpeg","published":"No"},
    {"Id":194,"appName":"Zoolab","domain":"usatoday.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":195,"appName":"Greenlam","domain":"cbslocal.com","mimeType":"image/png","published":"No"},
    {"Id":196,"appName":"Toughjoyfax","domain":"senate.gov","mimeType":"text/plain","published":"Yes"},
    {"Id":197,"appName":"Mat Lam Tam","domain":"ed.gov","mimeType":"text/plain","published":"Yes"},
    {"Id":198,"appName":"Flexidy","domain":"parallels.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":199,"appName":"Fixflex","domain":"unc.edu","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":200,"appName":"Zontrax","domain":"disqus.com","mimeType":"application/powerpoint","published":"No"},
    {"Id":201,"appName":"Otcom","domain":"printfriendly.com","mimeType":"application/powerpoint","published":"No"},
    {"Id":202,"appName":"Tin","domain":"ted.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":203,"appName":"Keylex","domain":"ask.com","mimeType":"application/excel","published":"No"},
    {"Id":204,"appName":"Fix San","domain":"blogspot.com","mimeType":"image/png","published":"No"},
    {"Id":205,"appName":"Y-find","domain":"tinypic.com","mimeType":"video/quicktime","published":"Yes"},
    {"Id":206,"appName":"Voltsillam","domain":"ebay.ca","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":207,"appName":"Matsoft","domain":"google.ca","mimeType":"application/x-excel","published":"Yes"},
    {"Id":208,"appName":"Asoka","domain":"bluehost.com","mimeType":"video/msvideo","published":"Yes"},
    {"Id":209,"appName":"Regrant","domain":"arizona.edu","mimeType":"video/avi","published":"Yes"},
    {"Id":210,"appName":"Home Ing","domain":"over-blog.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":211,"appName":"Daltfresh","domain":"howstuffworks.com","mimeType":"image/gif","published":"Yes"},
    {"Id":212,"appName":"Keylex","domain":"clickbank.net","mimeType":"text/plain","published":"No"},
    {"Id":213,"appName":"Lotlux","domain":"who.us","mimeType":"video/msvideo","published":"Yes"},
    {"Id":214,"appName":"Quo Lux","domain":"nifty.com","mimeType":"video/msvideo","published":"No"},
    {"Id":215,"appName":"Tempsoft","domain":"nifty.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":216,"appName":"Solarbreeze","domain":"cisco.com","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":217,"appName":"Duobam","domain":"webeden.ca","mimeType":"video/mpeg","published":"No"},
    {"Id":218,"appName":"Treeflex","domain":"yahoo.ca","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":219,"appName":"Konklux","domain":"google.us","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":220,"appName":"Zathin","domain":"dailymail.ca","mimeType":"application/x-msexcel","published":"No"},
    {"Id":221,"appName":"Biodex","domain":"gizmodo.com","mimeType":"video/quicktime","published":"No"},
    {"Id":222,"appName":"Rank","domain":"naver.com","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":223,"appName":"Stronghold","domain":"woothemes.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":224,"appName":"Transcof","domain":"fema.gov","mimeType":"image/gif","published":"Yes"},
    {"Id":225,"appName":"Keylex","domain":"blogs.com","mimeType":"audio/mpeg3","published":"No"},
    {"Id":226,"appName":"Toughjoyfax","domain":"sina.com","mimeType":"application/powerpoint","published":"No"},
    {"Id":227,"appName":"Domainer","domain":"hexun.com","mimeType":"text/plain","published":"Yes"},
    {"Id":228,"appName":"Zaam-Dox","domain":"slideshare.net","mimeType":"application/excel","published":"Yes"},
    {"Id":229,"appName":"Pannier","domain":"canalblog.com","mimeType":"image/pjpeg","published":"No"},
    {"Id":230,"appName":"Sonair","domain":"jugem.us","mimeType":"audio/mpeg3","published":"No"},
    {"Id":231,"appName":"Subin","domain":"bloglines.com","mimeType":"image/gif","published":"No"},
    {"Id":232,"appName":"Daltfresh","domain":"jugem.us","mimeType":"image/x-tiff","published":"No"},
    {"Id":233,"appName":"Subin","domain":"jiathis.com","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":234,"appName":"Cookley","domain":"biblegateway.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":235,"appName":"Bamity","domain":"macromedia.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":236,"appName":"Viva","domain":"elpais.com","mimeType":"image/pjpeg","published":"No"},
    {"Id":237,"appName":"Sonair","domain":"dagondesign.com","mimeType":"text/plain","published":"No"},
    {"Id":238,"appName":"Daltfresh","domain":"arizona.edu","mimeType":"application/powerpoint","published":"No"},
    {"Id":239,"appName":"Keylex","domain":"deviantart.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":240,"appName":"Sonsing","domain":"xinhuanet.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":241,"appName":"Opela","domain":"plala.ca","mimeType":"image/gif","published":"No"},
    {"Id":242,"appName":"Lotlux","domain":"yandex.us","mimeType":"video/quicktime","published":"Yes"},
    {"Id":243,"appName":"Flowdesk","domain":"unc.edu","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":244,"appName":"Fixflex","domain":"spiegel.ca","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":245,"appName":"Mat Lam Tam","domain":"51.us","mimeType":"image/jpeg","published":"Yes"},
    {"Id":246,"appName":"Solarbreeze","domain":"sbwire.com","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":247,"appName":"Daltfresh","domain":"spotify.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":248,"appName":"Greenlam","domain":"techcrunch.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":249,"appName":"Mat Lam Tam","domain":"shop-pro.ca","mimeType":"application/x-excel","published":"Yes"},
    {"Id":250,"appName":"Otcom","domain":"latimes.com","mimeType":"image/jpeg","published":"Yes"},
    {"Id":251,"appName":"Toughjoyfax","domain":"amazon.com","mimeType":"application/vnd.ms-powerpoint","published":"Yes"},
    {"Id":252,"appName":"It","domain":"amazon.ca","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":253,"appName":"Solarbreeze","domain":"comcast.net","mimeType":"text/plain","published":"No"},
    {"Id":254,"appName":"Transcof","domain":"google.ca","mimeType":"image/jpeg","published":"Yes"},
    {"Id":255,"appName":"Latlux","domain":"ask.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":256,"appName":"Zoolab","domain":"live.com","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":257,"appName":"Quo Lux","domain":"webs.com","mimeType":"video/x-msvideo","published":"Yes"},
    {"Id":258,"appName":"Zontrax","domain":"about.us","mimeType":"image/pjpeg","published":"No"},
    {"Id":259,"appName":"Hatity","domain":"umn.edu","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":260,"appName":"Matsoft","domain":"uiuc.edu","mimeType":"application/powerpoint","published":"No"},
    {"Id":261,"appName":"Flexidy","domain":"telegraph.ca","mimeType":"video/avi","published":"Yes"},
    {"Id":262,"appName":"Viva","domain":"people.com","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":263,"appName":"Y-Solowarm","domain":"indiegogo.com","mimeType":"video/msvideo","published":"No"},
    {"Id":264,"appName":"Vagram","domain":"printfriendly.com","mimeType":"application/vnd.ms-powerpoint","published":"Yes"},
    {"Id":265,"appName":"Tin","domain":"seesaa.net","mimeType":"text/plain","published":"No"},
    {"Id":266,"appName":"Lotlux","domain":"dot.gov","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":267,"appName":"It","domain":"businessweek.com","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":268,"appName":"Greenlam","domain":"howstuffworks.com","mimeType":"image/png","published":"Yes"},
    {"Id":269,"appName":"Voltsillam","domain":"sitemeter.com","mimeType":"image/pjpeg","published":"No"},
    {"Id":270,"appName":"Greenlam","domain":"clickbank.net","mimeType":"application/x-msexcel","published":"No"},
    {"Id":271,"appName":"It","domain":"bloomberg.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":272,"appName":"Regrant","domain":"fc2.com","mimeType":"application/pdf","published":"Yes"},
    {"Id":273,"appName":"Alphazap","domain":"w3.org","mimeType":"video/msvideo","published":"Yes"},
    {"Id":274,"appName":"Home Ing","domain":"freewebs.com","mimeType":"application/excel","published":"No"},
    {"Id":275,"appName":"Trippledex","domain":"ucsd.edu","mimeType":"video/quicktime","published":"Yes"},
    {"Id":276,"appName":"Toughjoyfax","domain":"4shared.com","mimeType":"image/gif","published":"No"},
    {"Id":277,"appName":"Voyatouch","domain":"so-net.ca","mimeType":"video/x-msvideo","published":"No"},
    {"Id":278,"appName":"Stim","domain":"google.ca","mimeType":"audio/mpeg3","published":"No"},
    {"Id":279,"appName":"Aerified","domain":"cbc.ca","mimeType":"image/tiff","published":"No"},
    {"Id":280,"appName":"Span","domain":"noaa.gov","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":281,"appName":"Wrapsafe","domain":"devhub.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":282,"appName":"Gembucket","domain":"flickr.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":283,"appName":"Viva","domain":"squidoo.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":284,"appName":"Konklux","domain":"issuu.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":285,"appName":"Hatity","domain":"zdnet.com","mimeType":"image/gif","published":"No"},
    {"Id":286,"appName":"Daltfresh","domain":"globo.com","mimeType":"image/tiff","published":"No"},
    {"Id":287,"appName":"Holdlamis","domain":"google.com","mimeType":"image/x-tiff","published":"Yes"},
    {"Id":288,"appName":"Tampflex","domain":"joomla.org","mimeType":"application/vnd.ms-powerpoint","published":"Yes"},
    {"Id":289,"appName":"Biodex","domain":"blinklist.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":290,"appName":"Greenlam","domain":"google.com","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":291,"appName":"Overhold","domain":"statcounter.com","mimeType":"video/avi","published":"No"},
    {"Id":292,"appName":"Overhold","domain":"google.com","mimeType":"video/msvideo","published":"No"},
    {"Id":293,"appName":"Alpha","domain":"msu.edu","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":294,"appName":"Namfix","domain":"webeden.us","mimeType":"application/pdf","published":"Yes"},
    {"Id":295,"appName":"Rank","domain":"wikipedia.org","mimeType":"application/x-troff-msvideo","published":"Yes"},
    {"Id":296,"appName":"Fixflex","domain":"t-online.ca","mimeType":"application/x-msexcel","published":"No"},
    {"Id":297,"appName":"Transcof","domain":"ucoz.us","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":298,"appName":"Bigtax","domain":"wp.com","mimeType":"application/msword","published":"Yes"},
    {"Id":299,"appName":"Wrapsafe","domain":"1688.com","mimeType":"application/pdf","published":"No"},
    {"Id":300,"appName":"Biodex","domain":"foxnews.com","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":301,"appName":"Tresom","domain":"domainmarket.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":302,"appName":"Wrapsafe","domain":"nytimes.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":303,"appName":"Quo Lux","domain":"list-manage.com","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":304,"appName":"Domainer","domain":"army.us","mimeType":"image/png","published":"No"},
    {"Id":305,"appName":"Latlux","domain":"virginia.edu","mimeType":"video/x-mpeg","published":"No"},
    {"Id":306,"appName":"Vagram","domain":"list-manage.com","mimeType":"application/x-troff-msvideo","published":"Yes"},
    {"Id":307,"appName":"Wrapsafe","domain":"webnode.com","mimeType":"application/x-excel","published":"No"},
    {"Id":308,"appName":"Tampflex","domain":"huffingtonpost.com","mimeType":"application/vnd.ms-powerpoint","published":"Yes"},
    {"Id":309,"appName":"Tempsoft","domain":"psu.edu","mimeType":"image/pjpeg","published":"No"},
    {"Id":310,"appName":"Transcof","domain":"wp.com","mimeType":"image/png","published":"Yes"},
    {"Id":311,"appName":"Alpha","domain":"rambler.us","mimeType":"video/quicktime","published":"No"},
    {"Id":312,"appName":"Zamit","domain":"shop-pro.us","mimeType":"application/x-excel","published":"No"},
    {"Id":313,"appName":"Pannier","domain":"uiuc.edu","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":314,"appName":"Home Ing","domain":"sitemeter.com","mimeType":"application/vnd.ms-powerpoint","published":"Yes"},
    {"Id":315,"appName":"Pannier","domain":"123-reg.ca","mimeType":"video/avi","published":"Yes"},
    {"Id":316,"appName":"Vagram","domain":"cpanel.net","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":317,"appName":"Bitchip","domain":"dmoz.org","mimeType":"application/excel","published":"No"},
    {"Id":318,"appName":"Mat Lam Tam","domain":"taobao.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":319,"appName":"Sonair","domain":"list-manage.com","mimeType":"text/plain","published":"No"},
    {"Id":320,"appName":"Tin","domain":"moonfruit.com","mimeType":"image/jpeg","published":"Yes"},
    {"Id":321,"appName":"Pannier","domain":"mac.com","mimeType":"audio/x-mpeg-3","published":"No"},
    {"Id":322,"appName":"Solarbreeze","domain":"biglobe.ca","mimeType":"image/pjpeg","published":"No"},
    {"Id":323,"appName":"Ventosanzap","domain":"npr.org","mimeType":"application/vnd.ms-powerpoint","published":"Yes"},
    {"Id":324,"appName":"Konklux","domain":"sfgate.com","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":325,"appName":"Vagram","domain":"istockphoto.com","mimeType":"application/msword","published":"Yes"},
    {"Id":326,"appName":"Voltsillam","domain":"china.com","mimeType":"application/x-msexcel","published":"No"},
    {"Id":327,"appName":"Zathin","domain":"omniture.com","mimeType":"video/msvideo","published":"No"},
    {"Id":328,"appName":"Biodex","domain":"dot.gov","mimeType":"audio/mpeg3","published":"No"},
    {"Id":329,"appName":"Stronghold","domain":"newsvine.com","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":330,"appName":"Tempsoft","domain":"state.us","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":331,"appName":"Holdlamis","domain":"uiuc.edu","mimeType":"application/msword","published":"Yes"},
    {"Id":332,"appName":"Prodder","domain":"wordpress.org","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":333,"appName":"Tresom","domain":"sfgate.com","mimeType":"application/x-msexcel","published":"No"},
    {"Id":334,"appName":"Gembucket","domain":"microsoft.com","mimeType":"application/pdf","published":"Yes"},
    {"Id":335,"appName":"Voyatouch","domain":"timesonline.ca","mimeType":"application/pdf","published":"Yes"},
    {"Id":336,"appName":"Greenlam","domain":"pcworld.com","mimeType":"image/x-tiff","published":"Yes"},
    {"Id":337,"appName":"Veribet","domain":"so-net.ca","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":338,"appName":"Home Ing","domain":"upenn.edu","mimeType":"application/pdf","published":"No"},
    {"Id":339,"appName":"Ronstring","domain":"google.com","mimeType":"image/tiff","published":"No"},
    {"Id":340,"appName":"Konklux","domain":"cornell.edu","mimeType":"application/pdf","published":"No"},
    {"Id":341,"appName":"Daltfresh","domain":"usda.gov","mimeType":"video/quicktime","published":"Yes"},
    {"Id":342,"appName":"Daltfresh","domain":"storify.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":343,"appName":"Greenlam","domain":"shutterfly.com","mimeType":"application/msword","published":"No"},
    {"Id":344,"appName":"Tresom","domain":"jiathis.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":345,"appName":"Alpha","domain":"va.gov","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":346,"appName":"Zoolab","domain":"home.us","mimeType":"image/gif","published":"No"},
    {"Id":347,"appName":"Daltfresh","domain":"google.com","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":348,"appName":"Flexidy","domain":"php.net","mimeType":"video/x-mpeg","published":"No"},
    {"Id":349,"appName":"Quo Lux","domain":"blogger.com","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":350,"appName":"Toughjoyfax","domain":"cbc.ca","mimeType":"video/msvideo","published":"Yes"},
    {"Id":351,"appName":"Zoolab","domain":"cdbaby.com","mimeType":"video/avi","published":"No"},
    {"Id":352,"appName":"Veribet","domain":"ustream.ca","mimeType":"image/x-tiff","published":"No"},
    {"Id":353,"appName":"Prodder","domain":"nature.com","mimeType":"video/x-msvideo","published":"Yes"},
    {"Id":354,"appName":"Tres-Zap","domain":"psu.edu","mimeType":"application/excel","published":"No"},
    {"Id":355,"appName":"Y-Solowarm","domain":"ehow.com","mimeType":"application/pdf","published":"No"},
    {"Id":356,"appName":"Pannier","domain":"blog.com","mimeType":"text/plain","published":"Yes"},
    {"Id":357,"appName":"Andalax","domain":"mapquest.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":358,"appName":"Overhold","domain":"nationalgeographic.com","mimeType":"application/x-excel","published":"No"},
    {"Id":359,"appName":"Overhold","domain":"miibeian.gov","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":360,"appName":"Job","domain":"wikia.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":361,"appName":"Sub-Ex","domain":"princeton.edu","mimeType":"text/plain","published":"Yes"},
    {"Id":362,"appName":"Veribet","domain":"sciencedirect.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":363,"appName":"Veribet","domain":"reverbnation.com","mimeType":"image/png","published":"Yes"},
    {"Id":364,"appName":"Bitchip","domain":"scientificamerican.com","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":365,"appName":"Tin","domain":"examiner.com","mimeType":"text/plain","published":"No"},
    {"Id":366,"appName":"Vagram","domain":"barnesandnoble.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":367,"appName":"Kanlam","domain":"surveymonkey.com","mimeType":"video/quicktime","published":"Yes"},
    {"Id":368,"appName":"Tin","domain":"rakuten.ca","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":369,"appName":"Overhold","domain":"bloglovin.com","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":370,"appName":"Sub-Ex","domain":"biglobe.us","mimeType":"application/powerpoint","published":"No"},
    {"Id":371,"appName":"Fix San","domain":"hp.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":372,"appName":"Veribet","domain":"nymag.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":373,"appName":"Biodex","domain":"wix.com","mimeType":"image/gif","published":"Yes"},
    {"Id":374,"appName":"It","domain":"blogtalkradio.com","mimeType":"video/quicktime","published":"Yes"},
    {"Id":375,"appName":"Latlux","domain":"state.gov","mimeType":"video/mpeg","published":"Yes"},
    {"Id":376,"appName":"Prodder","domain":"mit.edu","mimeType":"application/excel","published":"Yes"},
    {"Id":377,"appName":"Bamity","domain":"va.gov","mimeType":"application/powerpoint","published":"No"},
    {"Id":378,"appName":"Alphazap","domain":"macromedia.com","mimeType":"application/excel","published":"No"},
    {"Id":379,"appName":"Lotstring","domain":"networksolutions.com","mimeType":"image/x-tiff","published":"Yes"},
    {"Id":380,"appName":"Holdlamis","domain":"wikipedia.org","mimeType":"application/pdf","published":"Yes"},
    {"Id":381,"appName":"Regrant","domain":"google.edu","mimeType":"text/plain","published":"No"},
    {"Id":382,"appName":"Wrapsafe","domain":"weather.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":383,"appName":"Biodex","domain":"sfgate.com","mimeType":"text/plain","published":"Yes"},
    {"Id":384,"appName":"Ventosanzap","domain":"bloglovin.com","mimeType":"image/tiff","published":"No"},
    {"Id":385,"appName":"Keylex","domain":"seesaa.net","mimeType":"video/x-mpeg","published":"No"},
    {"Id":386,"appName":"Vagram","domain":"delicious.com","mimeType":"text/plain","published":"Yes"},
    {"Id":387,"appName":"Gembucket","domain":"huffingtonpost.com","mimeType":"video/msvideo","published":"Yes"},
    {"Id":388,"appName":"Lotstring","domain":"seesaa.net","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":389,"appName":"Daltfresh","domain":"nps.gov","mimeType":"application/msword","published":"Yes"},
    {"Id":390,"appName":"Toughjoyfax","domain":"businessweek.com","mimeType":"application/mspowerpoint","published":"Yes"},
    {"Id":391,"appName":"Rank","domain":"mail.us","mimeType":"image/png","published":"Yes"},
    {"Id":392,"appName":"Redhold","domain":"prlog.org","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":393,"appName":"It","domain":"nhs.us","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":394,"appName":"Veribet","domain":"technorati.com","mimeType":"image/pjpeg","published":"Yes"},
    {"Id":395,"appName":"Zaam-Dox","domain":"unc.edu","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":396,"appName":"Zamit","domain":"timesonline.ca","mimeType":"image/tiff","published":"No"},
    {"Id":397,"appName":"Konklux","domain":"joomla.org","mimeType":"audio/mpeg3","published":"No"},
    {"Id":398,"appName":"Konklux","domain":"ustream.net","mimeType":"application/excel","published":"Yes"},
    {"Id":399,"appName":"Lotstring","domain":"tinyurl.com","mimeType":"image/png","published":"Yes"},
    {"Id":400,"appName":"Zoolab","domain":"upenn.edu","mimeType":"application/excel","published":"No"},
    {"Id":401,"appName":"Tampflex","domain":"istockphoto.com","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":402,"appName":"Gembucket","domain":"usgs.gov","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":403,"appName":"Kanlam","domain":"wp.com","mimeType":"application/excel","published":"No"},
    {"Id":404,"appName":"Lotstring","domain":"ed.gov","mimeType":"image/gif","published":"Yes"},
    {"Id":405,"appName":"Bigtax","domain":"sitemeter.com","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":406,"appName":"Stringtough","domain":"imageshack.us","mimeType":"application/pdf","published":"Yes"},
    {"Id":407,"appName":"Viva","domain":"amazon.us","mimeType":"video/x-mpeg","published":"No"},
    {"Id":408,"appName":"Fintone","domain":"cmu.edu","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":409,"appName":"Fintone","domain":"php.ca","mimeType":"video/quicktime","published":"Yes"},
    {"Id":410,"appName":"Bytecard","domain":"microsoft.com","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":411,"appName":"It","domain":"dropbox.com","mimeType":"application/excel","published":"Yes"},
    {"Id":412,"appName":"It","domain":"1und1.ca","mimeType":"application/x-mspowerpoint","published":"Yes"},
    {"Id":413,"appName":"Rank","domain":"house.gov","mimeType":"video/x-mpeg","published":"No"},
    {"Id":414,"appName":"Wrapsafe","domain":"themeforest.ca","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":415,"appName":"Voyatouch","domain":"fc2.com","mimeType":"video/mpeg","published":"No"},
    {"Id":416,"appName":"Andalax","domain":"is.us","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":417,"appName":"Keylex","domain":"vinaora.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":418,"appName":"Holdlamis","domain":"twitpic.com","mimeType":"video/avi","published":"Yes"},
    {"Id":419,"appName":"Holdlamis","domain":"google.us","mimeType":"application/x-excel","published":"Yes"},
    {"Id":420,"appName":"Pannier","domain":"blogger.com","mimeType":"audio/x-mpeg-3","published":"No"},
    {"Id":421,"appName":"Sonair","domain":"mit.edu","mimeType":"image/jpeg","published":"No"},
    {"Id":422,"appName":"Zamit","domain":"4shared.com","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":423,"appName":"Vagram","domain":"cmu.edu","mimeType":"image/png","published":"No"},
    {"Id":424,"appName":"Zoolab","domain":"goo.ca","mimeType":"application/powerpoint","published":"No"},
    {"Id":425,"appName":"Matsoft","domain":"yahoo.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":426,"appName":"Y-find","domain":"canalblog.com","mimeType":"image/pjpeg","published":"No"},
    {"Id":427,"appName":"Solarbreeze","domain":"uol.com","mimeType":"image/gif","published":"No"},
    {"Id":428,"appName":"Zoolab","domain":"admin.ca","mimeType":"application/msword","published":"No"},
    {"Id":429,"appName":"Toughjoyfax","domain":"elegantthemes.com","mimeType":"image/x-tiff","published":"Yes"},
    {"Id":430,"appName":"Lotlux","domain":"slideshare.net","mimeType":"video/x-msvideo","published":"No"},
    {"Id":431,"appName":"Bigtax","domain":"elegantthemes.com","mimeType":"image/png","published":"Yes"},
    {"Id":432,"appName":"Overhold","domain":"flavors.us","mimeType":"application/x-troff-msvideo","published":"Yes"},
    {"Id":433,"appName":"Asoka","domain":"bluehost.com","mimeType":"video/x-mpeg","published":"No"},
    {"Id":434,"appName":"Konklab","domain":"wikia.com","mimeType":"video/msvideo","published":"No"},
    {"Id":435,"appName":"Home Ing","domain":"ed.gov","mimeType":"image/jpeg","published":"Yes"},
    {"Id":436,"appName":"Y-find","domain":"google.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":437,"appName":"Alpha","domain":"google.com","mimeType":"video/x-msvideo","published":"Yes"},
    {"Id":438,"appName":"Pannier","domain":"rambler.ca","mimeType":"application/excel","published":"No"},
    {"Id":439,"appName":"Konklux","domain":"pcworld.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":440,"appName":"Voltsillam","domain":"sphinn.com","mimeType":"video/avi","published":"No"},
    {"Id":441,"appName":"Bigtax","domain":"sohu.com","mimeType":"video/quicktime","published":"No"},
    {"Id":442,"appName":"Alpha","domain":"sitemeter.com","mimeType":"video/mpeg","published":"No"},
    {"Id":443,"appName":"Zoolab","domain":"livejournal.com","mimeType":"image/tiff","published":"Yes"},
    {"Id":444,"appName":"Sonair","domain":"huffingtonpost.com","mimeType":"application/x-excel","published":"No"},
    {"Id":445,"appName":"Stim","domain":"icio.us","mimeType":"application/x-excel","published":"Yes"},
    {"Id":446,"appName":"Y-find","domain":"census.gov","mimeType":"application/msword","published":"Yes"},
    {"Id":447,"appName":"Hatity","domain":"washington.edu","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":448,"appName":"Rank","domain":"harvard.edu","mimeType":"application/x-troff-msvideo","published":"No"},
    {"Id":449,"appName":"Zamit","domain":"wsj.com","mimeType":"application/x-excel","published":"No"},
    {"Id":450,"appName":"Quo Lux","domain":"theguardian.com","mimeType":"video/x-msvideo","published":"No"},
    {"Id":451,"appName":"Fintone","domain":"123-reg.ca","mimeType":"video/avi","published":"Yes"},
    {"Id":452,"appName":"Wrapsafe","domain":"ifeng.com","mimeType":"video/mpeg","published":"Yes"},
    {"Id":453,"appName":"Sub-Ex","domain":"wired.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":454,"appName":"Konklux","domain":"tinyurl.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":455,"appName":"Tempsoft","domain":"pinterest.com","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":456,"appName":"Redhold","domain":"cbsnews.com","mimeType":"application/pdf","published":"Yes"},
    {"Id":457,"appName":"Mat Lam Tam","domain":"kickstarter.com","mimeType":"video/msvideo","published":"No"},
    {"Id":458,"appName":"Quo Lux","domain":"nasa.gov","mimeType":"image/gif","published":"Yes"},
    {"Id":459,"appName":"Sonsing","domain":"exblog.us","mimeType":"video/x-msvideo","published":"No"},
    {"Id":460,"appName":"Rank","domain":"amazon.com","mimeType":"application/x-mspowerpoint","published":"No"},
    {"Id":461,"appName":"Trippledex","domain":"ucoz.us","mimeType":"image/gif","published":"No"},
    {"Id":462,"appName":"Cardify","domain":"wikispaces.com","mimeType":"application/vnd.ms-powerpoint","published":"No"},
    {"Id":463,"appName":"Konklab","domain":"parallels.com","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":464,"appName":"Stringtough","domain":"hexun.com","mimeType":"image/jpeg","published":"Yes"},
    {"Id":465,"appName":"Andalax","domain":"hud.gov","mimeType":"application/x-msexcel","published":"No"},
    {"Id":466,"appName":"Span","domain":"e-recht24.ca","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":467,"appName":"Redhold","domain":"e-recht24.ca","mimeType":"audio/x-mpeg-3","published":"No"},
    {"Id":468,"appName":"Duobam","domain":"last.ca","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":469,"appName":"Mat Lam Tam","domain":"ftc.gov","mimeType":"audio/x-mpeg-3","published":"Yes"},
    {"Id":470,"appName":"Keylex","domain":"vimeo.com","mimeType":"audio/mpeg3","published":"Yes"},
    {"Id":471,"appName":"Fixflex","domain":"storify.com","mimeType":"application/x-msexcel","published":"No"},
    {"Id":472,"appName":"Namfix","domain":"thetimes.ca","mimeType":"application/x-troff-msvideo","published":"Yes"},
    {"Id":473,"appName":"It","domain":"mapquest.com","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":474,"appName":"Namfix","domain":"sfgate.com","mimeType":"application/x-excel","published":"Yes"},
    {"Id":475,"appName":"Sub-Ex","domain":"yandex.ca","mimeType":"audio/mpeg3","published":"No"},
    {"Id":476,"appName":"Tampflex","domain":"princeton.edu","mimeType":"video/mpeg","published":"Yes"},
    {"Id":477,"appName":"Tampflex","domain":"plala.ca","mimeType":"application/mspowerpoint","published":"No"},
    {"Id":478,"appName":"Flexidy","domain":"abc.ca","mimeType":"image/jpeg","published":"No"},
    {"Id":479,"appName":"Opela","domain":"jalbum.net","mimeType":"application/powerpoint","published":"Yes"},
    {"Id":480,"appName":"Quo Lux","domain":"theatlantic.com","mimeType":"image/png","published":"Yes"},
    {"Id":481,"appName":"Pannier","domain":"opera.com","mimeType":"application/pdf","published":"No"},
    {"Id":482,"appName":"Y-find","domain":"simplemachines.org","mimeType":"video/msvideo","published":"Yes"},
    {"Id":483,"appName":"Stronghold","domain":"slate.com","mimeType":"audio/mpeg3","published":"No"},
    {"Id":484,"appName":"Matsoft","domain":"pagesperso-orange.com","mimeType":"video/quicktime","published":"Yes"},
    {"Id":485,"appName":"Viva","domain":"sina.com","mimeType":"image/gif","published":"No"},
    {"Id":486,"appName":"Prodder","domain":"blogs.com","mimeType":"audio/mpeg3","published":"No"},
    {"Id":487,"appName":"Andalax","domain":"surveymonkey.com","mimeType":"image/png","published":"Yes"},
    {"Id":488,"appName":"Sub-Ex","domain":"cnn.com","mimeType":"application/vnd.ms-excel","published":"No"},
    {"Id":489,"appName":"Bytecard","domain":"ebay.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":490,"appName":"Vagram","domain":"unesco.org","mimeType":"application/pdf","published":"Yes"},
    {"Id":491,"appName":"Wrapsafe","domain":"imageshack.us","mimeType":"video/mpeg","published":"Yes"},
    {"Id":492,"appName":"Cardify","domain":"imgur.com","mimeType":"image/gif","published":"Yes"},
    {"Id":493,"appName":"Matsoft","domain":"umn.edu","mimeType":"application/vnd.ms-excel","published":"Yes"},
    {"Id":494,"appName":"Alpha","domain":"google.com","mimeType":"application/powerpoint","published":"No"},
    {"Id":495,"appName":"Treeflex","domain":"blogs.com","mimeType":"application/excel","published":"No"},
    {"Id":496,"appName":"Veribet","domain":"google.ca","mimeType":"audio/mpeg3","published":"No"},
    {"Id":497,"appName":"Zoolab","domain":"tiny.com","mimeType":"application/x-msexcel","published":"Yes"},
    {"Id":498,"appName":"Andalax","domain":"infoseek.com","mimeType":"video/x-mpeg","published":"Yes"},
    {"Id":499,"appName":"Treeflex","domain":"tumblr.com","mimeType":"image/jpeg","published":"Yes"},
    {"Id":500,"appName":"Sonsing","domain":"icio.us","mimeType":"application/x-msexcel","published":"Yes"}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./api/apps.js");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  const rows = data.reduce(
    (acc, { Id, appName, domain, mimeType, published }) =>
      acc +
      `<tr id="table-row-${Id}">
        <td>${Id}</td>
        <td width="150px">${appName}</td>
        <td width="250px">${domain}</td>
        <td width="250px">${mimeType}</td>
        <td>${published}</td>
       </tr>`,
      ``
  );
  
  tableBody.innerHTML = rows;
};

//render dynamic checkbox for app domain in Sort Order
const renderAppDomainCheckBox = (data) => {
	const divAppDomain = document.getElementById("divAppDomain");

  //retrieve unique App domains using set object and spread operator    
  //retrieving .com, .net, and so on
  const uniqueAppDomain = [...new Set(data.map(item => item.domain.split(".")[1]))].sort();

  //generate checkbox from unique App Domain
	const appDomain = uniqueAppDomain.reduce(
    (acc, domain) => 
                    acc + 
                    `<input type="checkbox" name="domain" id="chkClass-${domain}" value="${domain}">
                     <label class="chkClass" for="chkClass-${domain}">.${domain}</label>`
    , []);

  //bind checkbox to the div
	divAppDomain.innerHTML = appDomain;
};

//render dynamic radio buttons for app published in Sort Order
const renderPublishedRadioBox = (data) => {
	const divPublished = document.getElementById("divPublished");

  //retrieve unique Published
  const uniquePublished = [...new Set(data.map(item => item.published))].reverse();

  //generate radio button from uniquePublished
	const published = uniquePublished.reduce(
    (acc, published) => 
                    acc + 
                    `<input type="radio" id="${published}" name="published" value="${published}">
                     <label class="radioClass" for="${published}">${published}</label>`
    , []);

  //bind radio button to the div
	divPublished.innerHTML = `<input type="radio" id="all" name="published" value="all">
                            <label class="radioClass" for="all">All</label>`
                            + published;
};

//render dynamic dropdown for MIME Type in Sort Order
const renderMimeTypeDropDown = (data) => {
	const ddlMimeType = document.getElementById("mimeType");

  //retrieve unique Mime Type
  const uniqueMimeType = [...new Set(data.map(item => item.mimeType))].sort();

  //generate option for dropdown from uniqueMimeType
	const mimeTypes = uniqueMimeType.reduce(
    (acc, mimeTypes) => 
                    acc + `<option id="${mimeTypes}" value="${mimeTypes}">${mimeTypes}</option>`
    , []);

  //bind dropdown to the div
	ddlMimeType.innerHTML = `<option value="">--- Please Select App's MIME Type ---</option>` + mimeTypes;
};

getAll().then(({ data }) => {
    renderAppDomainCheckBox(data);
    renderPublishedRadioBox(data);
    renderMimeTypeDropDown(data);
    renderTable(data);
});

window.onSubmit = (event) => {
  event.preventDefault();

  const Id = event.target.Id.value;
	const appName = event.target.appName.value;
	const mimeType = event.target.mimeType.value;

  //retreive checked checkbox's value
  let domain = [...(event.target.domain)];
  domain = domain.flatMap((item) => item.checked ? (`.` + item.value) : []);
  if (domain.length === 0)
    domain = ``;
  
  const published = event.target.published.value;

  getAll({ Id, appName, domain, mimeType, published }).then(({data}) => renderTable(data));
};

window.onReset = () => {
    getAll().then(({ data }) => renderTable(data));
};

},{"./api/apps.js":1}]},{},[3]);
