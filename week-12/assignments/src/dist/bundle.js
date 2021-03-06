(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const persons = require("../data/persons");

const getAll = ({ id, first_name, last_name, email, gender, ip_address, language, job_title, department, linkedin_skill, race } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(persons);

    /*if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }*/

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = persons.find((person) => person.id === id);

    if (persons) {
      resolve({ code: 200, data: persons });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

},{"../data/persons":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Arleen","last_name":"Mohamed","email":"amohamed0@berkeley.edu","gender":"Female","ip_address":"39.16.184.229","language":"Maltese","job_title":"Account Executive","department":"Legal","linkedin_skill":"IAR","race":"Uruguayan"},
{"id":2,"first_name":"Nan","last_name":"Mazzilli","email":"nmazzilli1@csmonitor.com","gender":"Female","ip_address":"173.222.99.185","language":"Quechua","job_title":"Internal Auditor","department":"Marketing","linkedin_skill":"Aerial Silks","race":"Fijian"},
{"id":3,"first_name":"Liesa","last_name":"Clitherow","email":"lclitherow2@nbcnews.com","gender":"Genderfluid","ip_address":"93.88.109.112","language":"Pashto","job_title":"Research Nurse","department":"Research and Development","linkedin_skill":"Nginx","race":"Paiute"},
{"id":4,"first_name":"Doralynn","last_name":"Ambroix","email":"dambroix3@twitter.com","gender":"Female","ip_address":"234.68.6.102","language":"Azeri","job_title":"Financial Analyst","department":"Human Resources","linkedin_skill":"Home Care","race":"Colville"},
{"id":5,"first_name":"Saw","last_name":"Beecker","email":"sbeecker4@mapy.cz","gender":"Male","ip_address":"40.210.198.6","language":"Malayalam","job_title":"Engineer III","department":"Marketing","linkedin_skill":"Rock Mechanics","race":"Chilean"},
{"id":6,"first_name":"Tasha","last_name":"Smolan","email":"tsmolan5@fastcompany.com","gender":"Female","ip_address":"20.184.201.241","language":"Thai","job_title":"Administrative Assistant IV","department":"Business Development","linkedin_skill":"UV disinfection","race":"Ottawa"},
{"id":7,"first_name":"Dare","last_name":"Gaythor","email":"dgaythor6@e-recht24.de","gender":"Male","ip_address":"112.92.37.165","language":"Oriya","job_title":"Executive Secretary","department":"Business Development","linkedin_skill":"Aquariums","race":"South American"},
{"id":8,"first_name":"Yvette","last_name":"Pahlsson","email":"ypahlsson7@mail.ru","gender":"Female","ip_address":"236.9.113.57","language":"Khmer","job_title":"Clinical Specialist","department":"Legal","linkedin_skill":"Wedding DJ","race":"Indonesian"},
{"id":9,"first_name":"Dolores","last_name":"Snuggs","email":"dsnuggs8@fema.gov","gender":"Female","ip_address":"36.241.21.191","language":"New Zealand Sign Language","job_title":"Desktop Support Technician","department":"Product Management","linkedin_skill":"CAD","race":"Eskimo"},
{"id":10,"first_name":"Milly","last_name":"Enbury","email":"menbury9@weebly.com","gender":"Female","ip_address":"18.103.81.67","language":"Nepali","job_title":"Business Systems Development Analyst","department":"Marketing","linkedin_skill":"MyChart","race":"White"},
{"id":11,"first_name":"Filberte","last_name":"Clancey","email":"fclanceya@who.int","gender":"Male","ip_address":"199.47.69.180","language":"Yiddish","job_title":"Software Consultant","department":"Human Resources","linkedin_skill":"Google Webmaster Tools","race":"Alaska Native"},
{"id":12,"first_name":"Delmar","last_name":"Joncic","email":"djoncicb@springer.com","gender":"Male","ip_address":"244.116.24.39","language":"Hiri Motu","job_title":"Engineer IV","department":"Services","linkedin_skill":"Epic Systems","race":"Spaniard"},
{"id":13,"first_name":"Gale","last_name":"Snowball","email":"gsnowballc@ihg.com","gender":"Female","ip_address":"250.144.158.194","language":"Hiri Motu","job_title":"Financial Advisor","department":"Sales","linkedin_skill":"HP Procurve Networking","race":"Tongan"},
{"id":14,"first_name":"Madelena","last_name":"Ivanshintsev","email":"mivanshintsevd@pbs.org","gender":"Female","ip_address":"50.201.232.2","language":"Kazakh","job_title":"Social Worker","department":"Human Resources","linkedin_skill":"CV","race":"Polynesian"},
{"id":15,"first_name":"Grange","last_name":"Jenk","email":"gjenke@fc2.com","gender":"Male","ip_address":"184.149.231.16","language":"Estonian","job_title":"Clinical Specialist","department":"Marketing","linkedin_skill":"Epistemology","race":"American Indian and Alaska Native (AIAN)"},
{"id":16,"first_name":"Laurie","last_name":"Birkhead","email":"lbirkheadf@amazon.com","gender":"Male","ip_address":"215.39.49.30","language":"Kashmiri","job_title":"Sales Representative","department":"Accounting","linkedin_skill":"Demand Generation","race":"Chinese"},
{"id":17,"first_name":"Arturo","last_name":"Schole","email":"ascholeg@walmart.com","gender":"Male","ip_address":"176.69.165.255","language":"Dhivehi","job_title":"Assistant Professor","department":"Engineering","linkedin_skill":"Rule Of Law","race":"Venezuelan"},
{"id":18,"first_name":"Bruno","last_name":"Rivers","email":"briversh@cdc.gov","gender":"Male","ip_address":"118.211.252.54","language":"Gagauz","job_title":"Nurse Practicioner","department":"Marketing","linkedin_skill":"Rubber","race":"Melanesian"},
{"id":19,"first_name":"Ula","last_name":"Cosyns","email":"ucosynsi@tuttocitta.it","gender":"Female","ip_address":"105.252.77.229","language":"Gagauz","job_title":"Project Manager","department":"Legal","linkedin_skill":"Cuisine","race":"Malaysian"},
{"id":20,"first_name":"Morse","last_name":"Melding","email":"mmeldingj@gizmodo.com","gender":"Male","ip_address":"180.24.199.80","language":"Korean","job_title":"Project Manager","department":"Services","linkedin_skill":"Judicial Review","race":"Osage"},
{"id":21,"first_name":"Cathi","last_name":"Shadwick","email":"cshadwickk@exblog.jp","gender":"Female","ip_address":"155.112.208.86","language":"Tajik","job_title":"Dental Hygienist","department":"Services","linkedin_skill":"RPC","race":"Mexican"},
{"id":22,"first_name":"Reagen","last_name":"Brocket","email":"rbrocketl@latimes.com","gender":"Male","ip_address":"247.30.154.0","language":"Dzongkha","job_title":"Software Consultant","department":"Services","linkedin_skill":"Pharmaceutical Sales","race":"Laotian"},
{"id":23,"first_name":"Carce","last_name":"Breckwell","email":"cbreckwellm@apache.org","gender":"Male","ip_address":"22.212.124.178","language":"Hebrew","job_title":"Social Worker","department":"Engineering","linkedin_skill":"BJT","race":"Seminole"},
{"id":24,"first_name":"Adorne","last_name":"Waslin","email":"awaslinn@4shared.com","gender":"Female","ip_address":"64.25.160.238","language":"Marathi","job_title":"Desktop Support Technician","department":"Support","linkedin_skill":"Jigsaw","race":"Pueblo"},
{"id":25,"first_name":"Hillard","last_name":"Weedenburg","email":"hweedenburgo@kickstarter.com","gender":"Male","ip_address":"218.254.190.89","language":"Afrikaans","job_title":"Food Chemist","department":"Engineering","linkedin_skill":"gPROMS","race":"Melanesian"},
{"id":26,"first_name":"Dulcea","last_name":"Hully","email":"dhullyp@goo.ne.jp","gender":"Non-binary","ip_address":"216.197.119.80","language":"Fijian","job_title":"Internal Auditor","department":"Marketing","linkedin_skill":"Keyboard Skills","race":"Melanesian"},
{"id":27,"first_name":"Mitchell","last_name":"Elder","email":"melderq@ask.com","gender":"Male","ip_address":"131.127.1.0","language":"Tswana","job_title":"Analyst Programmer","department":"Legal","linkedin_skill":"Pricing","race":"Chippewa"},
{"id":28,"first_name":"Chandler","last_name":"Heppner","email":"cheppnerr@yellowpages.com","gender":"Male","ip_address":"27.180.232.88","language":"Tsonga","job_title":"Nuclear Power Engineer","department":"Product Management","linkedin_skill":"FCE","race":"Menominee"},
{"id":29,"first_name":"Ronnie","last_name":"Reddyhoff","email":"rreddyhoffs@simplemachines.org","gender":"Female","ip_address":"124.237.90.17","language":"Yiddish","job_title":"Administrative Officer","department":"Sales","linkedin_skill":"HTML","race":"Nicaraguan"},
{"id":30,"first_name":"Sterling","last_name":"Mousby","email":"smousbyt@nytimes.com","gender":"Non-binary","ip_address":"235.165.215.75","language":"Tsonga","job_title":"Social Worker","department":"Training","linkedin_skill":"SRDF","race":"Chinese"},
{"id":31,"first_name":"Hendrik","last_name":"Nicely","email":"hnicelyu@simplemachines.org","gender":"Male","ip_address":"26.77.12.142","language":"Catalan","job_title":"Food Chemist","department":"Services","linkedin_skill":"Air Compressors","race":"Lumbee"},
{"id":32,"first_name":"Homere","last_name":"Ickovitz","email":"hickovitzv@flickr.com","gender":"Male","ip_address":"182.32.196.104","language":"Azeri","job_title":"Financial Advisor","department":"Marketing","linkedin_skill":"Dispute Resolution","race":"Ecuadorian"},
{"id":33,"first_name":"Anica","last_name":"Gersam","email":"agersamw@squidoo.com","gender":"Female","ip_address":"155.143.84.11","language":"Swati","job_title":"Payment Adjustment Coordinator","department":"Marketing","linkedin_skill":"Universal Life","race":"Dominican (Dominican Republic)"},
{"id":34,"first_name":"Gauthier","last_name":"Bearcroft","email":"gbearcroftx@wired.com","gender":"Genderfluid","ip_address":"52.171.85.44","language":"Zulu","job_title":"Accountant IV","department":"Business Development","linkedin_skill":"Non-profit Volunteering","race":"Eskimo"},
{"id":35,"first_name":"Tymothy","last_name":"Twizell","email":"ttwizelly@engadget.com","gender":"Male","ip_address":"137.18.232.1","language":"Swati","job_title":"Accounting Assistant IV","department":"Business Development","linkedin_skill":"Press Kits","race":"Dominican (Dominican Republic)"},
{"id":36,"first_name":"Arlinda","last_name":"Tomasek","email":"atomasekz@weebly.com","gender":"Female","ip_address":"140.118.138.201","language":"Kazakh","job_title":"Speech Pathologist","department":"Accounting","linkedin_skill":"Business Planning","race":"Chippewa"},
{"id":37,"first_name":"Ursula","last_name":"Brislawn","email":"ubrislawn10@rakuten.co.jp","gender":"Genderfluid","ip_address":"82.26.245.191","language":"Sotho","job_title":"VP Accounting","department":"Research and Development","linkedin_skill":"GMAT","race":"Cherokee"},
{"id":38,"first_name":"Greer","last_name":"Gledstane","email":"ggledstane11@si.edu","gender":"Female","ip_address":"137.149.191.174","language":"Polish","job_title":"Research Associate","department":"Training","linkedin_skill":"DC Operations","race":"Pima"},
{"id":39,"first_name":"Xever","last_name":"Cortez","email":"xcortez12@miitbeian.gov.cn","gender":"Male","ip_address":"248.100.223.244","language":"Luxembourgish","job_title":"Geologist I","department":"Research and Development","linkedin_skill":"Nintex","race":"Native Hawaiian"},
{"id":40,"first_name":"Giordano","last_name":"Sink","email":"gsink13@deviantart.com","gender":"Male","ip_address":"170.107.85.115","language":"Luxembourgish","job_title":"Health Coach III","department":"Support","linkedin_skill":"PCRF","race":"Chilean"},
{"id":41,"first_name":"Mel","last_name":"Castell","email":"mcastell14@paypal.com","gender":"Male","ip_address":"128.167.49.210","language":"Croatian","job_title":"Teacher","department":"Legal","linkedin_skill":"Jazz","race":"Pima"},
{"id":42,"first_name":"Boone","last_name":"Evason","email":"bevason15@google.ru","gender":"Male","ip_address":"226.74.62.137","language":"Portuguese","job_title":"Database Administrator II","department":"Human Resources","linkedin_skill":"MYOB","race":"Cambodian"},
{"id":43,"first_name":"Karel","last_name":"Antonias","email":"kantonias16@pagesperso-orange.fr","gender":"Male","ip_address":"234.116.250.50","language":"Czech","job_title":"Health Coach I","department":"Marketing","linkedin_skill":"WBTs","race":"Chinese"},
{"id":44,"first_name":"Berget","last_name":"Burehill","email":"bburehill17@weather.com","gender":"Female","ip_address":"99.155.197.203","language":"Yiddish","job_title":"Safety Technician IV","department":"Engineering","linkedin_skill":"Wildlife","race":"Bolivian"},
{"id":45,"first_name":"Fan","last_name":"Legrice","email":"flegrice18@mayoclinic.com","gender":"Female","ip_address":"71.135.100.16","language":"Assamese","job_title":"Mechanical Systems Engineer","department":"Sales","linkedin_skill":"CSRs","race":"Chamorro"},
{"id":46,"first_name":"Pietro","last_name":"Jimeno","email":"pjimeno19@dot.gov","gender":"Male","ip_address":"93.81.86.56","language":"Zulu","job_title":"Technical Writer","department":"Research and Development","linkedin_skill":"Integrated Circuit Design","race":"Sri Lankan"},
{"id":47,"first_name":"Sidnee","last_name":"Licence","email":"slicence1a@usnews.com","gender":"Male","ip_address":"16.191.69.10","language":"Bulgarian","job_title":"Graphic Designer","department":"Services","linkedin_skill":"Social Psychology","race":"Chamorro"},
{"id":48,"first_name":"Cecilla","last_name":"Bozward","email":"cbozward1b@goodreads.com","gender":"Female","ip_address":"172.150.215.131","language":"Hungarian","job_title":"Structural Analysis Engineer","department":"Engineering","linkedin_skill":"DCF","race":"Black or African American"},
{"id":49,"first_name":"Alanah","last_name":"Bayles","email":"abayles1c@51.la","gender":"Female","ip_address":"156.43.94.148","language":"Bislama","job_title":"Senior Editor","department":"Support","linkedin_skill":"Higher Education","race":"Sioux"},
{"id":50,"first_name":"Cosme","last_name":"Cardinal","email":"ccardinal1d@macromedia.com","gender":"Male","ip_address":"111.43.36.19","language":"German","job_title":"Business Systems Development Analyst","department":"Sales","linkedin_skill":"ITIL","race":"Korean"},
{"id":51,"first_name":"Codee","last_name":"Gallanders","email":"cgallanders1e@bizjournals.com","gender":"Female","ip_address":"24.163.224.72","language":"Azeri","job_title":"Help Desk Technician","department":"Legal","linkedin_skill":"Online Advertising","race":"Tohono O'Odham"},
{"id":52,"first_name":"Karly","last_name":"Martinho","email":"kmartinho1f@icio.us","gender":"Genderfluid","ip_address":"153.154.106.136","language":"Hindi","job_title":"Design Engineer","department":"Marketing","linkedin_skill":"HDRI","race":"Asian"},
{"id":53,"first_name":"Gunther","last_name":"Juarez","email":"gjuarez1g@usgs.gov","gender":"Male","ip_address":"55.112.115.179","language":"Norwegian","job_title":"Research Nurse","department":"Support","linkedin_skill":"PXE","race":"Seminole"},
{"id":54,"first_name":"Gertrudis","last_name":"Prangley","email":"gprangley1h@biblegateway.com","gender":"Female","ip_address":"241.99.250.60","language":"Irish Gaelic","job_title":"VP Quality Control","department":"Human Resources","linkedin_skill":"OO Software Development","race":"Colville"},
{"id":55,"first_name":"Kathie","last_name":"Faulkner","email":"kfaulkner1i@delicious.com","gender":"Agender","ip_address":"122.129.180.249","language":"French","job_title":"Legal Assistant","department":"Engineering","linkedin_skill":"Outlook Express","race":"Ottawa"},
{"id":56,"first_name":"Baudoin","last_name":"Suddick","email":"bsuddick1j@joomla.org","gender":"Male","ip_address":"213.220.153.219","language":"Spanish","job_title":"Registered Nurse","department":"Product Management","linkedin_skill":"JSA","race":"Choctaw"},
{"id":57,"first_name":"Kristen","last_name":"Mar","email":"kmar1k@ucla.edu","gender":"Female","ip_address":"87.194.75.31","language":"Guaran??","job_title":"Programmer Analyst IV","department":"Product Management","linkedin_skill":"Flights","race":"Native Hawaiian"},
{"id":58,"first_name":"Lucia","last_name":"Killner","email":"lkillner1l@yandex.ru","gender":"Female","ip_address":"203.224.114.62","language":"Swati","job_title":"Cost Accountant","department":"Human Resources","linkedin_skill":"PTH","race":"Samoan"},
{"id":59,"first_name":"Corbet","last_name":"Hugonet","email":"chugonet1m@digg.com","gender":"Bigender","ip_address":"52.215.15.46","language":"Hiri Motu","job_title":"Marketing Manager","department":"Human Resources","linkedin_skill":"YMS","race":"Pima"},
{"id":60,"first_name":"Howie","last_name":"Gabbatiss","email":"hgabbatiss1n@cargocollective.com","gender":"Male","ip_address":"203.149.48.213","language":"Moldovan","job_title":"Media Manager II","department":"Training","linkedin_skill":"10 Key","race":"Sri Lankan"},
{"id":61,"first_name":"Aluin","last_name":"Roebuck","email":"aroebuck1o@geocities.jp","gender":"Male","ip_address":"248.83.115.221","language":"Dutch","job_title":"Help Desk Operator","department":"Support","linkedin_skill":"Human Computer Interaction","race":"Native Hawaiian and Other Pacific Islander (NHPI)"},
{"id":62,"first_name":"Roselin","last_name":"Bletsoe","email":"rbletsoe1p@desdev.cn","gender":"Female","ip_address":"250.215.156.19","language":"Persian","job_title":"Environmental Tech","department":"Support","linkedin_skill":"SV","race":"Samoan"},
{"id":63,"first_name":"Brittne","last_name":"Hanwright","email":"bhanwright1q@ftc.gov","gender":"Female","ip_address":"160.147.251.17","language":"Norwegian","job_title":"Recruiting Manager","department":"Human Resources","linkedin_skill":"MMC","race":"Choctaw"},
{"id":64,"first_name":"Hazel","last_name":"Paige","email":"hpaige1r@edublogs.org","gender":"Male","ip_address":"169.161.158.156","language":"Tok Pisin","job_title":"Director of Sales","department":"Research and Development","linkedin_skill":"IXOS","race":"Navajo"},
{"id":65,"first_name":"Corine","last_name":"Doulden","email":"cdoulden1s@webmd.com","gender":"Female","ip_address":"231.209.255.96","language":"Assamese","job_title":"Quality Control Specialist","department":"Human Resources","linkedin_skill":"NCDA","race":"Potawatomi"},
{"id":66,"first_name":"Pierson","last_name":"Calcraft","email":"pcalcraft1t@ebay.com","gender":"Male","ip_address":"24.201.49.172","language":"Zulu","job_title":"Information Systems Manager","department":"Business Development","linkedin_skill":"Civil Rights","race":"Chippewa"},
{"id":67,"first_name":"Randolph","last_name":"Jouandet","email":"rjouandet1u@sogou.com","gender":"Male","ip_address":"34.116.82.164","language":"Armenian","job_title":"Financial Analyst","department":"Business Development","linkedin_skill":"Pricing","race":"Dominican (Dominican Republic)"},
{"id":68,"first_name":"Saundra","last_name":"Bracci","email":"sbracci1v@youku.com","gender":"Female","ip_address":"148.145.109.236","language":"Tetum","job_title":"Accounting Assistant III","department":"Training","linkedin_skill":"IES Virtual Environment","race":"Eskimo"},
{"id":69,"first_name":"Ofelia","last_name":"Mundee","email":"omundee1w@canalblog.com","gender":"Female","ip_address":"3.133.60.248","language":"Dzongkha","job_title":"VP Quality Control","department":"Human Resources","linkedin_skill":"Evangelism","race":"Apache"},
{"id":70,"first_name":"Jarrett","last_name":"Gottschalk","email":"jgottschalk1x@kickstarter.com","gender":"Male","ip_address":"34.197.251.223","language":"Tajik","job_title":"Computer Systems Analyst II","department":"Accounting","linkedin_skill":"JMeter","race":"Uruguayan"},
{"id":71,"first_name":"Charil","last_name":"Tudgay","email":"ctudgay1y@imgur.com","gender":"Female","ip_address":"17.193.194.184","language":"Luxembourgish","job_title":"Sales Associate","department":"Business Development","linkedin_skill":"FTP","race":"Sioux"},
{"id":72,"first_name":"Clerkclaude","last_name":"Male","email":"cmale1z@slideshare.net","gender":"Male","ip_address":"217.250.90.198","language":"French","job_title":"Systems Administrator IV","department":"Human Resources","linkedin_skill":"Export","race":"Asian"},
{"id":73,"first_name":"Esma","last_name":"Ciani","email":"eciani20@dedecms.com","gender":"Female","ip_address":"178.150.157.23","language":"Persian","job_title":"Account Executive","department":"Product Management","linkedin_skill":"IPTV","race":"Dominican (Dominican Republic)"},
{"id":74,"first_name":"Chas","last_name":"Harmston","email":"charmston21@craigslist.org","gender":"Male","ip_address":"206.163.81.78","language":"Papiamento","job_title":"Environmental Tech","department":"Research and Development","linkedin_skill":"Team Mgmt","race":"Vietnamese"},
{"id":75,"first_name":"Marcie","last_name":"Loyns","email":"mloyns22@aol.com","gender":"Female","ip_address":"121.169.74.179","language":"Icelandic","job_title":"Health Coach III","department":"Training","linkedin_skill":"EHR","race":"Puget Sound Salish"},
{"id":76,"first_name":"Diann","last_name":"Lewens","email":"dlewens23@php.net","gender":"Female","ip_address":"80.15.212.39","language":"Assamese","job_title":"Product Engineer","department":"Sales","linkedin_skill":"Owner-managed businesses","race":"Yakama"},
{"id":77,"first_name":"Arlan","last_name":"Waller-Bridge","email":"awallerbridge24@independent.co.uk","gender":"Male","ip_address":"90.216.27.176","language":"Spanish","job_title":"Account Coordinator","department":"Engineering","linkedin_skill":"QAS","race":"Houma"},
{"id":78,"first_name":"Michaeline","last_name":"Vernazza","email":"mvernazza25@sitemeter.com","gender":"Female","ip_address":"238.140.248.64","language":"Indonesian","job_title":"Nuclear Power Engineer","department":"Human Resources","linkedin_skill":"UDS","race":"Lumbee"},
{"id":79,"first_name":"Thelma","last_name":"Bigglestone","email":"tbigglestone26@biglobe.ne.jp","gender":"Female","ip_address":"12.1.47.12","language":"Spanish","job_title":"Sales Associate","department":"Product Management","linkedin_skill":"Higher Education Administration","race":"Vietnamese"},
{"id":80,"first_name":"Koenraad","last_name":"Winchcomb","email":"kwinchcomb27@istockphoto.com","gender":"Bigender","ip_address":"190.69.132.112","language":"Nepali","job_title":"Account Executive","department":"Training","linkedin_skill":"Military Affairs","race":"Pakistani"},
{"id":81,"first_name":"Elwyn","last_name":"Davies","email":"edavies28@nba.com","gender":"Male","ip_address":"33.138.190.203","language":"Azeri","job_title":"Social Worker","department":"Human Resources","linkedin_skill":"WUFI","race":"Pueblo"},
{"id":82,"first_name":"Siegfried","last_name":"Storton","email":"sstorton29@stanford.edu","gender":"Male","ip_address":"111.0.167.225","language":"Dari","job_title":"VP Accounting","department":"Research and Development","linkedin_skill":"KRA","race":"Cree"},
{"id":83,"first_name":"Dov","last_name":"Faughny","email":"dfaughny2a@github.io","gender":"Male","ip_address":"83.144.223.31","language":"Somali","job_title":"Information Systems Manager","department":"Marketing","linkedin_skill":"JiBX","race":"Alaskan Athabascan"},
{"id":84,"first_name":"Zebadiah","last_name":"McEvoy","email":"zmcevoy2b@w3.org","gender":"Agender","ip_address":"158.152.63.227","language":"Azeri","job_title":"Technical Writer","department":"Services","linkedin_skill":"Recruiting","race":"Colombian"},
{"id":85,"first_name":"Bartholomew","last_name":"Konmann","email":"bkonmann2c@blogtalkradio.com","gender":"Male","ip_address":"232.227.233.231","language":"Burmese","job_title":"Senior Cost Accountant","department":"Services","linkedin_skill":"Capital Markets","race":"American Indian and Alaska Native (AIAN)"},
{"id":86,"first_name":"Jessy","last_name":"Dominy","email":"jdominy2d@cdc.gov","gender":"Female","ip_address":"16.212.138.80","language":"Dzongkha","job_title":"Mechanical Systems Engineer","department":"Product Management","linkedin_skill":"Social Skills","race":"Menominee"},
{"id":87,"first_name":"Mirabel","last_name":"Bigby","email":"mbigby2e@simplemachines.org","gender":"Female","ip_address":"210.208.20.98","language":"Spanish","job_title":"Senior Cost Accountant","department":"Training","linkedin_skill":"DTH","race":"Korean"},
{"id":88,"first_name":"Clarence","last_name":"Bladge","email":"cbladge2f@phpbb.com","gender":"Male","ip_address":"171.210.150.179","language":"Catalan","job_title":"Recruiter","department":"Legal","linkedin_skill":"Public Sector","race":"Paiute"},
{"id":89,"first_name":"Lidia","last_name":"Maunton","email":"lmaunton2g@redcross.org","gender":"Female","ip_address":"31.124.196.141","language":"Maltese","job_title":"Librarian","department":"Marketing","linkedin_skill":"Slackware","race":"Creek"},
{"id":90,"first_name":"Em","last_name":"Balle","email":"eballe2h@weather.com","gender":"Agender","ip_address":"126.145.97.199","language":"Swahili","job_title":"Engineer III","department":"Engineering","linkedin_skill":"FGD","race":"White"},
{"id":91,"first_name":"Bailey","last_name":"Tuhy","email":"btuhy2i@behance.net","gender":"Male","ip_address":"16.94.20.210","language":"French","job_title":"Electrical Engineer","department":"Human Resources","linkedin_skill":"ZoomText","race":"Delaware"},
{"id":92,"first_name":"Enrichetta","last_name":"Kelshaw","email":"ekelshaw2j@blog.com","gender":"Female","ip_address":"48.193.146.17","language":"Thai","job_title":"Help Desk Operator","department":"Training","linkedin_skill":"TPL","race":"Navajo"},
{"id":93,"first_name":"Margalit","last_name":"Gerriets","email":"mgerriets2k@independent.co.uk","gender":"Female","ip_address":"37.83.52.198","language":"Moldovan","job_title":"VP Quality Control","department":"Training","linkedin_skill":"Contemporary Art","race":"Costa Rican"},
{"id":94,"first_name":"Jordain","last_name":"Dransfield","email":"jdransfield2l@indiatimes.com","gender":"Female","ip_address":"223.37.142.91","language":"Luxembourgish","job_title":"Associate Professor","department":"Sales","linkedin_skill":"Krav Maga","race":"Comanche"},
{"id":95,"first_name":"Tabbatha","last_name":"Godson","email":"tgodson2m@europa.eu","gender":"Agender","ip_address":"85.72.248.168","language":"Bosnian","job_title":"Graphic Designer","department":"Product Management","linkedin_skill":"DxDesigner","race":"Malaysian"},
{"id":96,"first_name":"Britney","last_name":"Mebes","email":"bmebes2n@alexa.com","gender":"Female","ip_address":"51.175.151.147","language":"Khmer","job_title":"Account Representative IV","department":"Human Resources","linkedin_skill":"VTP","race":"Chinese"},
{"id":97,"first_name":"Camila","last_name":"Wyllcock","email":"cwyllcock2o@elegantthemes.com","gender":"Female","ip_address":"240.245.6.116","language":"Dari","job_title":"Nurse Practicioner","department":"Engineering","linkedin_skill":"Type Approval","race":"Salvadoran"},
{"id":98,"first_name":"Easter","last_name":"Charopen","email":"echaropen2p@last.fm","gender":"Female","ip_address":"82.152.57.207","language":"Burmese","job_title":"Human Resources Manager","department":"Research and Development","linkedin_skill":"RCS Master Control","race":"Asian Indian"},
{"id":99,"first_name":"Zacharie","last_name":"Sykora","email":"zsykora2q@oracle.com","gender":"Agender","ip_address":"14.7.87.27","language":"Dari","job_title":"Registered Nurse","department":"Business Development","linkedin_skill":"PowerPoint","race":"Menominee"},
{"id":100,"first_name":"Krissy","last_name":"Blakemore","email":"kblakemore2r@godaddy.com","gender":"Female","ip_address":"38.252.96.180","language":"Belarusian","job_title":"Community Outreach Specialist","department":"Human Resources","linkedin_skill":"Whiplash","race":"Japanese"}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./api/persons.js");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  const params = new URLSearchParams(window.location.search);
	const nameTerm = params.get("name");
	const languageTerm = params.getAll("language");
	const departmentTerm = params.get("department");
  const jobTitleTerm = params.get("jobTitle");

  if (nameTerm) {
    source = source.filter(({ first_name }) => first_name.toLowerCase().includes(nameTerm.toLowerCase()));
  }

  //check box filter
  if (languageTerm.length > 0) {
      const newSource =  languageTerm.map((item) => (source.filter(({ language }) => 
            language === item,
            document.getElementById(`chkClass${item}`).checked = true
      )));

      //flats array
      source = newSource.flat();
	}

  //radio button filter
	if (departmentTerm) {
		source = source.filter(({ department }) => 
             department == (departmentTerm),
             document.getElementById(`${departmentTerm}`).checked = true
      );
	}

  //dropdown filter
  if (jobTitleTerm) {
    if (jobTitleTerm != 0)
		  source = source.filter(({ job_title }) => job_title === (jobTitleTerm),
      document.getElementById(`${jobTitleTerm}`).selected = true);
	}

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email, gender, ip_address, language, job_title, department, linkedin_skill, race}) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td>
       <td>${gender}</td><td>${ip_address}</td><td>${language}</td><td>${job_title}</td>
       <td>${department}</td><td>${linkedin_skill}</td><td>${race}</td></tr>`,
    ``
  );
  
  tableBody.innerHTML = rows;
};

//render dynamic checkbox for Languages in Sort Order
const renderLanguageCheckBox = (data) => {
	const divLanguage = document.getElementById("divLanguage");

  //retrieve unique Language
  const uniqueLanguage = data.map(item => item.language).filter((value, index, self) => self.indexOf(value) === index).sort();

  //generate checkbox from uniqueLanguage
	const languages = uniqueLanguage.reduce(
    (acc, language) => 
                    acc + 
                    `<input type="checkbox" name="language" id="chkClass${language}" value="${language}">
                     <label class="chkClass" for="chkClass${language}">${language}</label>`
    , []);

  //bind checkbox to the div
	divLanguage.innerHTML = languages;
};

//render dynamic radio buttons for Departments in Sort Order
const renderDepartmentRadioBox = (data) => {
	const departmentRadio = document.getElementById("divDepartment");

  //retrieve unique Department
  const uniqueDept = data.map(item => item.department).filter((value, index, self) => self.indexOf(value) === index).sort();

  //generate radio button from uniqueDept
	const department = uniqueDept.reduce(
    (acc, department) => 
                    acc + 
                    `<input type="radio" id="${department}" name="department" value="${department}">
                     <label class="radioClass" for="${department}">${department}</label>`
    , []);

  //bind radio button to the div
	departmentRadio.innerHTML = department;

  //checked first radio button
  //document.getElementsByName("department")[0].checked = true;
};

//render dynamic dropdown for Job Titles in Sort Order
const renderJobTitleDropDown = (data) => {
	const ddlJobTitle = document.getElementById("jobTitle");

  //retrieve unique Job Titles
  const uniqueJobTitles = data.map(item => item.job_title).filter((value, index, self) => self.indexOf(value) === index).sort();

  //generate option for dropdown from uniqueJobTitles
	const jobTitles = uniqueJobTitles.reduce(
    (acc, job_title) => 
                    acc + `<option id="${job_title}" value="${job_title}">${job_title}</option>`
    , []);

  //bind dropdown to the div
	ddlJobTitle.innerHTML = `<option value="0">--- Please Select Job Title ---</option>` + jobTitles;
};

getAll().then(({ data }) => {
    renderLanguageCheckBox(data);
    renderDepartmentRadioBox(data);
    renderJobTitleDropDown(data);
    renderTable(data);
});

const onSubmit = (event) => {
  event.preventDefault();

  getAll().then(({ data }) => renderTable(data));
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAll().then(({ data }) => renderTable(data));
};

},{"./api/persons.js":1}]},{},[3]);
