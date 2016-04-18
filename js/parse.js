Parse.initialize("KcOmxezYu9FbY7qss2aIvhfwW89RTsY98mZn6LE9", "NftTH1LiZ1FSBBv8Gjk7lfacFSnP7l60bNid8IBv");

if(~location.search.indexOf("init=true")) {
  var News = Parse.Object.extend("News");

  var p1 = new News({
    "tag" : "APEC-GIPFELTREFFEN",
    "headline" : "Obama besänftigt China",
    "date" : "11. November 2014  06:48 Uhr",
    "short" : "Die USA wollen China nicht klein halten, sagt Präsident Obama vor dem Treffen mit Chinas Staatschef Xi. Der plädiert für mehr wirtschaftliche Verflechtung.",
    "img" : "obam-xi-apec-2-220x124.jpg"
  });

  var p2 = new News({
    "tag" : "ISRAEL",
    "headline" : "Keiner will von Intifada sprechen",
    "date" : "10. November 2014  19:17 Uhr ",
    "short" : "Messerattacken auf Israelis, Krawalle auf dem Tempelberg, Scharmützel im Gassengewirr Jerusalems. Israels Polizei bereitet sich auf einen Aufstand der Palästinenser vor.",
    "img" : "israel-anschlag-220x124.jpg"
  });

  var p3 = new News({
    "tag" : "WESTAFRIKA",
    "headline" : "Die alte Kolonialmacht versucht es mit Diskretion",
    "date" : "10. November 2014 um 18:15 Uhr",
    "short" : "Ob gestürzte Präsidenten oder Anti-Terror-Kampf: Frankreich beeinflusst noch immer die Geschicke Afrikas. Diskret ist die Ex-Kolonialmacht auch mit mehr Truppen präsent.",
    "img" : "zentralfrika-frankreich-truppen-220x124.jpg"
  });

  var p4 = new News({
    "tag" : "EUROPEAN LEADERSHIP NETWORK",
    "headline" : "Russland und der Westen riskieren militärische Eskalation",
    "date" : "10. November 2014  16:48 Uhr",
    "short" : "Beinahe-Zusammenstöße in der Luft und auf dem Wasser, aggressives militärisches Auftreten: Laut einem Bericht stand eine Eskalation in diesem Jahr mehrmals kurz bevor.",
    "img" : "russland-kampfjet-220x124.jpg"
  });

  var p5 = new News({
    "tag" : "FRANKREICH",
    "headline" : "Der Anti-Sarkozy-Komplott",
    "date" : "10. November 2014  17:53 Uhr",
    "short" : "Dem früheren Premier Fillon und Parteifreund des Ex-Präsidenten wird vorgeworfen, gegen Sarkozy intrigiert zu haben. Versuchte er, dessen Comeback zu verhindern?",
    "img" : "sarkozy-jouyet-220x124.jpg"
  });

  var p6 = new News({
    "tag" : "Deutsche Rentenversicherung",
    "headline" : "Renten könnten 2015 um zwei Prozent steigen",
    "date" : "11. November 2014  12:42 Uhr",
    "short" : "Die Deutsche Rentenversicherung geht von einem Anstieg über der Inflationsrate aus. Abschlagsfreie Rente ab 63 Jahren stößt auf großes Interesse.",
    "img" : "rentner-220x124.jpg"
  });

  var p7 = new News({
    "tag" : "Europäischer Gerichtshof",
    "headline" : "Deutschland darf EU-Ausländern Hartz IV verweigern",
    "date" : "11. November 2014  10:05 Uhr",
    "short" : "Der Europäische Gerichtshof hat entschieden: Deutschland kann arbeitslose Zuwanderer aus der EU von Sozialleistungen ausschließen. Das Urteil könnte ein Signal sein.",
    "img" : "europaeischer-gerichtshof-hartz-220x124.jpg"
  });

  var p8 = new News({
    "tag" : "Nahostkonflikt",
    "headline" : "Messerattacken schüren Angst vor neuer Intifada",
    "date" : "10. November 2014  16:34 Uhr",
    "short" : "Im Westjordanland hat ein Palästinenser eine junge Siedlerin erstochen. In Tel Aviv wurde ein Soldat verletzt. Israel fürchtet einen neuen Aufstand der Palästinenser.",
    "img" : "anschlag-tel-aviv-220x124.jpg"
  });

  var p9 = new News({
    "tag" : "25 Jahre Deutsche Einheit",
    "headline" : "Der Westen und sein Stasi-Problem",
    "date" : "10. November 2014  18:30 Uhr",
    "short" : "Bis heute arbeitet Ex-IM Görlich an der Uni Braunschweig. Nicht er, sondern das Opfer seiner Bespitzelung hat nach Bekanntwerden der Stasi-Geschichte die Uni verlassen. ",
    "img" : "stasiakten-220x124.jpg"
  });

  var p10 = new News({
    "tag" : "Bund der Vertriebenen",
    "headline" : "Neuer BdV-Präsident bezeichnet Vertreibung aus Polen als Verbrechen",
    "date" : "10. November 2014  18:03 Uhr",
    "short" : "Bernd Fabritius will das Verhältnis zu Polen entspannen. Die Vertreibung von Millionen Deutschen hat der Nachfolger von Erika Steinbach dennoch aufs Schärfste verurteilt. ",
    "img" : "bernd-fabritius-220x124.jpg"
  });

  var w1 = new News({
    "tag" : "HONORARBERATUNG",
    "headline" : "Guter Rat zur Geldanlage ist selten",
    "date" : "11. November 2014  07:15 Uhr",
    "short" : "Honorarberatung ist in Deutschland endlich gesetzlich geregelt. Doch gibt es kaum Honorarberater. Und gut qualifizierte noch viel weniger.",
    "img" : "geldanlage-honorarberatung-220x124.jpg"
  });

  var w2 = new News({
    "tag" : "CHINA",
    "headline" : "Der berühmteste Wohltäter Chinas – nach eigenen Angaben",
    "date" : "10. November 2014  21:32 Uhr",
    "short" : "Der chinesische Unternehmer Chen Guangbiao wurde ausgerechnet mit Bauschutt sehr reich. Jetzt baut er Wände aus Geldbündeln und zertrümmert öffentlich Luxusautos.",
    "img" : "china-chen-guangbiao-220x124.jpg"
  });

  var w3 = new News({
    "tag" : "KONJUNKTUR",
    "headline" : "China steckt in der Wachstumsfalle",
    "date" : "10. November 2014  19:29 Uhr",
    "short" : "Jahrelang hat China die Welt mit hohen, oft zweistelligen Wachstumsraten beeindruckt. Doch diese Zeiten sind vorbei, wie unsere Grafik des Tages zeigt. ",
    "img" : "konjunktur-china-220x124.jpg"
  });

  var w4 = new News({
    "tag" : "WÄHRUNG",
    "headline" : "Russlands Zentralbank lässt Rubel frei handeln",
    "date" : "10. November 2014  13:45 Uhr",
    "short" : "Die Notenbank will dem Verfall der russischen Währung mit neuen Mitteln begegnen. Sie gibt den Wechselkurs frei und begrenzt die täglichen Devisenkäufe.",
    "img" : "russland-zentralbank-rubel-220x124.jpg"
  });

  var w5 = new News({
    "tag" : "UNTREUE-PROZESS",
    "headline" : "Middelhoff, der selbstlose Super-Manager",
    "date" : "10. November 2014  14:15 Uhr",
    "short" : "Ende der Woche könnte das Urteil gegen Thomas Middelhoff fallen. Seine Anwälte stilisieren den Ex-Arcandor-Chef als Opfer: Er habe nur gearbeitet und geschlafen.",
    "img" : "thomas-middelhoff-220x124.jpg"
  });

  var w6 = new News({
    "tag" : "Freihandelsabkommen",
    "headline" : "Initiative zieht wegen TTIP vor Europäischen Gerichtshof",
    "date" : "10. November 2014  11:53 Uhr",
    "short" : "Eine Allianz aus Bürgerverbänden gegen das Freihandelsabkommen will ihre Anerkennung durch die EU juristisch erzwingen. Es geht um mehr Bürgerbeteiligung.",
    "img" : "ttip-protest-220x124.jpg"
  });

  var w7 = new News({
    "tag" : "TTIP",
    "headline" : "Die Globalisierung wird zum Elitenprojekt",
    "date" : "10. November 2014  07:15 Uhr",
    "short" : "Der Unmut der Bürger über das Freihandelsabkommen TTIP und die Globalisierung wächst. Eine weltweite Abgabe für Banken und Hedgefonds könnte den Widerstand brechen.",
    "img" : "globalisierung-ungleichheit-220x124.jpg"
  });

  var w8 = new News({
    "tag" : "Geldanalage",
    "headline" : "Vorsicht, Schlussverkauf!",
    "date" : "10. November 2014  11:53 Uhr",
    "short" : "Die meisten Anlageprodukte sind teuer, und zwar bevor das Geld des Sparers überhaupt anfängt zu arbeiten.",
    "img" : "lebensversicherung-220x124.jpg"
  });

  var w9 = new News({
    "tag" : "Lokführer",
    "headline" : "Die Streikkasse gefüllt, die Reihen geschlossen",
    "date" : "6. November 2014  21:49 Uhr",
    "short" : "Die Gegner des GDL-Chefs Klaus Weselsky berichten von Unzufriedenheit in der Gewerkschaft. Doch die hohe Streikbeteiligung zeigt: Sein harter Kurs hat Unterstützung.",
    "img" : "gdl-bahn-streik-claus-weselsky-220x124.jpg"
  });

  var w10 = new News({
    "tag" : "Sicherheitsdienst",
    "headline" : "'Wird man krank, wird man einfach aussortiert'",
    "date" : "7. November 2014  07:24 Uhr",
    "short" : "Recherchen von ZEIT ONLINE zeigten: Auch die neue Wachfirma in den Flüchtlingsheimen in Burbach und Essen hat große interne Probleme. Nun erheben Wachleute neue Vorwürfe.",
    "img" : "sicherheitsfirma-220x124.jpg"
  });

  var k1 = new News({
    "tag" : "NICOLAUS HARNONCOURT",
    "headline" : "Mozarts Triptychon",
    "date" : "11. November 2014  10:14 Uhr",
    "short" : "Nikolaus Harnoncourt ist der Detektiv unter den Dirigenten. Jetzt legt er Indizien vor, wie drei von Mozarts Sinfonien zu einem nie gehörten Oratorium verschmelzen.",
    "img" : "nikolaus-harnoncourt-220x124.jpg"
  });

  var k2 = new News({
    "tag" : "HANS MAGNUS ENZENSBERGER",
    "headline" : "Der Unerschütterliche",
    "date" : "11. November 2014  06:39 Uhr",
    "short" : "Hans Magnus Enzensberger wird 85. Ein Besuch bei dem herrlich eigenwilligen Intellektuellen. Mit Tumult hat er gerade ein erstaunlich persönliches Buch veröffentlicht.",
    "img" : "hans-magnus-enzensberger-220x124.jpg"
  });

  var k3 = new News({
    "tag" : "DDR-DESIGN",
    "headline" : "Sandmännchen und Stasi-Mikrofone",
    "date" : "10. November 2014 um 18:25 Uhr",
    "short" : "Das größte Museum für DDR-Design steht ausgerechnet in Los Angeles. Ein Buch über das Wende Museum zeigt, welche Schätze und Abgründe es dort zu entdecken gibt.",
    "img" : "ddr-artefakte-alltag-fs-teaser-2-220x124.jpg"
  });

  var k4 = new News({
    "tag" : "AZEALIA BANKS",
    "headline" : "Klare Ansage aus Harlem",
    "date" : "10. November 2014 um 15:25 Uhr",
    "short" : "Erst galt Azealia Banks als großes Raptalent, dann als streitsüchtig und selbstverliebt. Ihr seit Jahren erwartetes Debüt zeigt jetzt, wie gut das eine zum anderen passt. ",
    "img" : "azealia-banks-220x124.jpg"
  });

  var k5 = new News({
    "tag" : "DINA FOXX",
    "headline" : "Ein bisschen multimedial",
    "date" : "10. November 2014 um 15:48 Uhr",
    "short" : "Den Krimi gibt es im TV, den Hintergrund im Netz: Zum zweiten Mal ermitteln die Zuschauer von Dina Foxx im ZDF crossmedial. Doch die Website ist diesmal nur ein Bonus.",
    "img" : "dina-foxx-zdf-220x124.jpg"
  });

  var k6 = new News({
    "tag" : "FERIDUN FAXT",
    "headline" : "Nur nicht abkühlen, nur nicht komisch werden!",
    "date" : "10. November 2014 um 11:56",
    "short" : "Der Tausendseiter ist fertig, der Kumpel ein Tölpel, der über eine öde Hupe schluchzt. Vor lauter Schreck kauft unser Autor tütenweise Haushaltsreiniger.",
    "img" : "feridun-zaimoglu-freitext-teaser-220x124.jpg"
  });

  var k7 = new News({
    "tag" : "OPEN MIKE",
    "headline" : "Der Pimmel ist ein Schoßhündchen",
    "date" : "10. November 2014  11:51 Uhr",
    "short" : "Souverän gemeißelte Syntax, hin und wieder eine kleine Obszönität: Der Literaturwettbewerb Open Mike war ein Schaulaufen für erschreckend professionelle Jungautoren.",
    "img" : "open-mike-2014-2-220x124.jpg"
  });

  var k8 = new News({
    "tag" : "Frank Castorfs \"Kaputt\"",
    "headline" : "Barockes Teufelsfratzenpanorama",
    "date" : "10. November 2014  11:13 Uhr",
    "short" : "Versüßt und versülzt: Frank Castorf verkitscht in seinem Stück \"Kaputt\" an der Berliner Volksbühne die Weltkriegsfantasien von Curzio Malaparte.",
    "img" : "castorf-kaputt-volksbuehne-220x124.jpg"
  });

  var k9 = new News({
    "tag" : "Jan Eckel",
    "headline" : "Es bleibt ein Kampf",
    "date" : "9. November 2014  21:20 Uhr",
    "short" : 'Wie Politik und Bürger um Menschenrechte ringen: Jan Eckels monumentale Studie "Die Ambivalenz des Guten"',
    "img" : "demonstranten-chile-220x124.jpg"
  });

  var k10 = new News({
    "tag" : "Voguing",
    "headline" : "Pose für mich!",
    "date" : "8. November 2014  19:02 Uhr",
    "short" : "Voguing ist ein Tanz, der sich aus Modelposen der Illustrierten zusammensetzt. Warum ist er derzeit so populär?",
    "img" : "voguing-unicorn-ball-220x124.jpg"
  });

  var Stream = Parse.Object.extend("Stream");

  var poltik = new Stream({'titel': 'Politik'});
  poltik.add('news', p6);
  poltik.add('news', p7);
  poltik.add('news', p1);
  poltik.add('news', p2);
  poltik.add('news', p3);
  poltik.add('news', p4);
  poltik.add('news', p5);
  poltik.add('news', p8);
  poltik.add('news', p9);
  poltik.add('news', p10);


  var wirtschaft = new Stream({'titel': 'Wirtschaft'});
  wirtschaft.add('news', w1);
  wirtschaft.add('news', w2);
  wirtschaft.add('news', w3);
  wirtschaft.add('news', w4);
  wirtschaft.add('news', w5);
  wirtschaft.add('news', w6);
  wirtschaft.add('news', w7);
  wirtschaft.add('news', w8);
  wirtschaft.add('news', w9);
  wirtschaft.add('news', w10);

  var kultur = new Stream({'titel': 'Kultur'});
  kultur.add('news', k1);
  kultur.add('news', k2);
  kultur.add('news', k3);
  kultur.add('news', k4);
  kultur.add('news', k5);
  kultur.add('news', k6);
  kultur.add('news', k7);
  kultur.add('news', k8);
  kultur.add('news', k9);
  kultur.add('news', k10);

  ready = Parse.Object.saveAll([wirtschaft, poltik, kultur]);
}

var streamQuery = new Parse.Query("Stream");
var newsQuery = new Parse.Query("News");
['pxWppj9niE', 'bruA5Oc3dY', '07xVFWkeML'].forEach(function(streamId) {
  streamQuery.get(streamId).then(function(stream) {
    stream.get('news').forEach(function(news) {
      render(stream.get('titel'), newsQuery.get(news.id).then(function(news) {
        return {
          tag: news.get('tag'),
          date: news.get('date'),
          img: news.get('img'),
          headline: news.get('headline'),
          short: news.get('short')
        };
      }));
    });
  });
});


