function insertBaqendNews() {
  return DB.ready().then(function() {
    if (!DB.User.me) {
      return DB.User.login('*', '*');
    }
  }).then(function() {
    var p1 = DB.News.fromJSON({
      "id": "p1",
      "tag" : "APEC-GIPFELTREFFEN",
      "headline" : "Obama besänftigt China",
      "date" : "11. November 2014  06:48 Uhr",
      "short" : "Die USA wollen China nicht klein halten, sagt Präsident Obama vor dem Treffen mit Chinas Staatschef Xi. Der plädiert für mehr wirtschaftliche Verflechtung.",
      "img" : "img/obam-xi-apec-2-220x124.jpg"
    });

    var p2 = DB.News.fromJSON({
      "id": "p2",
      "tag" : "ISRAEL",
      "headline" : "Keiner will von Intifada sprechen",
      "date" : "10. November 2014  19:17 Uhr",
      "short" : "Messerattacken auf Israelis, Krawalle auf dem Tempelberg, Scharmützel im Gassengewirr Jerusalems. Israels Polizei bereitet sich auf einen Aufstand der Palästinenser vor.",
      "img" : "img/israel-anschlag-220x124.jpg"
    });

    var p3 = DB.News.fromJSON({
      "id": "p3",
      "tag" : "WESTAFRIKA",
      "headline" : "Die alte Kolonialmacht versucht es mit Diskretion",
      "date" : "10. November 2014 um 18:15 Uhr",
      "short" : "Ob gestürzte Präsidenten oder Anti-Terror-Kampf: Frankreich beeinflusst noch immer die Geschicke Afrikas. Diskret ist die Ex-Kolonialmacht auch mit mehr Truppen präsent.",
      "img" : "img/zentralfrika-frankreich-truppen-220x124.jpg"
    });

    var p4 = DB.News.fromJSON({
      "id": "p4",
      "tag" : "EUROPEAN LEADERSHIP NETWORK",
      "headline" : "Russland und der Westen riskieren militärische Eskalation",
      "date" : "10. November 2014  16:48 Uhr",
      "short" : "Beinahe-Zusammenstöße in der Luft und auf dem Wasser, aggressives militärisches Auftreten: Laut einem Bericht stand eine Eskalation in diesem Jahr mehrmals kurz bevor.",
      "img" : "img/russland-kampfjet-220x124.jpg"
    });

    var p5 = DB.News.fromJSON({
      "id": "p5",
      "tag" : "Deutsche Rentenversicherung",
      "headline" : "Renten könnten 2015 um zwei Prozent steigen",
      "date" : "11. November 2014  12:42 Uhr",
      "short" : "Die Deutsche Rentenversicherung geht von einem Anstieg über der Inflationsrate aus. Abschlagsfreie Rente ab 63 Jahren stößt auf großes Interesse.",
      "img" : "img/rentner-220x124.jpg"
    });

    var p6 = DB.News.fromJSON({
      "id": "p6",
      "tag" : "Europäischer Gerichtshof",
      "headline" : "Deutschland darf EU-Ausländern Hartz IV verweigern",
      "date" : "11. November 2014  10:05 Uhr",
      "short" : "Der Europäische Gerichtshof hat entschieden: Deutschland kann arbeitslose Zuwanderer aus der EU von Sozialleistungen ausschließen. Das Urteil könnte ein Signal sein.",
      "img" : "img/europaeischer-gerichtshof-hartz-220x124.jpg"
    });

    var p7 = DB.News.fromJSON({
      "id": "p7",
      "tag" : "FRANKREICH",
      "headline" : "Der Anti-Sarkozy-Komplott",
      "date" : "10. November 2014  17:53 Uhr",
      "short" : "Dem früheren Premier Fillon und Parteifreund des Ex-Präsidenten wird vorgeworfen, gegen Sarkozy intrigiert zu haben. Versuchte er, dessen Comeback zu verhindern?",
      "img" : "img/sarkozy-jouyet-220x124.jpg"
    });

    var p8 = DB.News.fromJSON({
      "id": "p8",
      "tag" : "Nahostkonflikt",
      "headline" : "Messerattacken schüren Angst vor neuer Intifada",
      "date" : "10. November 2014  16:34 Uhr",
      "short" : "Im Westjordanland hat ein Palästinenser eine junge Siedlerin erstochen. In Tel Aviv wurde ein Soldat verletzt. Israel fürchtet einen neuen Aufstand der Palästinenser.",
      "img" : "img/anschlag-tel-aviv-220x124.jpg"
    });

    var p9 = DB.News.fromJSON({
      "id": "p9",
      "tag" : "25 Jahre Deutsche Einheit",
      "headline" : "Der Westen und sein Stasi-Problem",
      "date" : "10. November 2014  18:30 Uhr",
      "short" : "Bis heute arbeitet Ex-IM Görlich an der Uni Braunschweig. Nicht er, sondern das Opfer seiner Bespitzelung hat nach Bekanntwerden der Stasi-Geschichte die Uni verlassen. ",
      "img" : "img/stasiakten-220x124.jpg"
    });

    var p10 = DB.News.fromJSON({
      "id": "p10",
      "tag" : "Bund der Vertriebenen",
      "headline" : "Neuer BdV-Präsident bezeichnet Vertreibung aus Polen als Verbrechen",
      "date" : "10. November 2014  18:03 Uhr",
      "short" : "Bernd Fabritius will das Verhältnis zu Polen entspannen. Die Vertreibung von Millionen Deutschen hat der Nachfolger von Erika Steinbach dennoch aufs Schärfste verurteilt. ",
      "img" : "img/bernd-fabritius-220x124.jpg"
    });

    var w1 = DB.News.fromJSON({
      "id": "w1",
      "tag" : "HONORARBERATUNG",
      "headline" : "Guter Rat zur Geldanlage ist selten",
      "date" : "11. November 2014  07:15 Uhr",
      "short" : "Honorarberatung ist in Deutschland endlich gesetzlich geregelt. Doch gibt es kaum Honorarberater. Und gut qualifizierte noch viel weniger.",
      "img" : "img/geldanlage-honorarberatung-220x124.jpg"
    });

    var w2 = DB.News.fromJSON({
      "id": "w2",
      "tag" : "CHINA",
      "headline" : "Der berühmteste Wohltäter Chinas – nach eigenen Angaben",
      "date" : "10. November 2014  21:32 Uhr",
      "short" : "Der chinesische Unternehmer Chen Guangbiao wurde ausgerechnet mit Bauschutt sehr reich. Jetzt baut er Wände aus GelDBündeln und zertrümmert öffentlich Luxusautos.",
      "img" : "img/china-chen-guangbiao-220x124.jpg"
    });

    var w3 = DB.News.fromJSON({
      "id": "w3",
      "tag" : "KONJUNKTUR",
      "headline" : "China steckt in der Wachstumsfalle",
      "date" : "10. November 2014  19:29 Uhr",
      "short" : "Jahrelang hat China die Welt mit hohen, oft zweistelligen Wachstumsraten beeindruckt. Doch diese Zeiten sind vorbei, wie unsere Grafik des Tages zeigt. ",
      "img" : "img/konjunktur-china-220x124.jpg"
    });

    var w4 = DB.News.fromJSON({
      "id": "w4",
      "tag" : "WÄHRUNG",
      "headline" : "Russlands Zentralbank lässt Rubel frei handeln",
      "date" : "10. November 2014  13:45 Uhr",
      "short" : "Die Notenbank will dem Verfall der russischen Währung mit neuen Mitteln begegnen. Sie gibt den Wechselkurs frei und begrenzt die täglichen Devisenkäufe.",
      "img" : "img/russland-zentralbank-rubel-220x124.jpg"
    });

    var w5 = DB.News.fromJSON({
      "id": "w5",
      "tag" : "UNTREUE-PROZESS",
      "headline" : "Middelhoff, der selbstlose Super-Manager",
      "date" : "10. November 2014  14:15 Uhr",
      "short" : "Ende der Woche könnte das Urteil gegen Thomas Middelhoff fallen. Seine Anwälte stilisieren den Ex-Arcandor-Chef als Opfer: Er habe nur gearbeitet und geschlafen.",
      "img" : "img/thomas-middelhoff-220x124.jpg"
    });

    var w6 = DB.News.fromJSON({
      "id": "w6",
      "tag" : "Freihandelsabkommen",
      "headline" : "Initiative zieht wegen TTIP vor Europäischen Gerichtshof",
      "date" : "10. November 2014  11:53 Uhr",
      "short" : "Eine Allianz aus Bürgerverbänden gegen das Freihandelsabkommen will ihre Anerkennung durch die EU juristisch erzwingen. Es geht um mehr Bürgerbeteiligung.",
      "img" : "img/ttip-protest-220x124.jpg"
    });

    var w7 = DB.News.fromJSON({
      "id": "w7",
      "tag" : "TTIP",
      "headline" : "Die Globalisierung wird zum Elitenprojekt",
      "date" : "10. November 2014  07:15 Uhr",
      "short" : "Der Unmut der Bürger über das Freihandelsabkommen TTIP und die Globalisierung wächst. Eine weltweite Abgabe für Banken und Hedgefonds könnte den Widerstand brechen.",
      "img" : "img/globalisierung-ungleichheit-220x124.jpg"
    });

    var w8 = DB.News.fromJSON({
      "id": "w8",
      "tag" : "Geldanalage",
      "headline" : "Vorsicht, Schlussverkauf!",
      "date" : "10. November 2014  11:53 Uhr",
      "short" : "Die meisten Anlageprodukte sind teuer, und zwar bevor das Geld des Sparers überhaupt anfängt zu arbeiten.",
      "img" : "img/lebensversicherung-220x124.jpg"
    });

    var w9 = DB.News.fromJSON({
      "id": "w9",
      "tag" : "Lokführer",
      "headline" : "Die Streikkasse gefüllt, die Reihen geschlossen",
      "date" : "6. November 2014  21:49 Uhr",
      "short" : "Die Gegner des GDL-Chefs Klaus Weselsky berichten von Unzufriedenheit in der Gewerkschaft. Doch die hohe Streikbeteiligung zeigt: Sein harter Kurs hat Unterstützung.",
      "img" : "img/gdl-bahn-streik-claus-weselsky-220x124.jpg"
    });

    var w10 = DB.News.fromJSON({
      "id": "w10",
      "tag" : "Sicherheitsdienst",
      "headline" : "'Wird man krank, wird man einfach aussortiert'",
      "date" : "7. November 2014  07:24 Uhr",
      "short" : "Recherchen von ZEIT ONLINE zeigten: Auch die neue Wachfirma in den Flüchtlingsheimen in Burbach und Essen hat große interne Probleme. Nun erheben Wachleute neue Vorwürfe.",
      "img" : "img/sicherheitsfirma-220x124.jpg"
    });

    var k1 = DB.News.fromJSON({
      "id": "k1",
      "tag" : "NICOLAUS HARNONCOURT",
      "headline" : "Mozarts Triptychon",
      "date" : "11. November 2014  10:14 Uhr",
      "short" : "Nikolaus Harnoncourt ist der Detektiv unter den Dirigenten. Jetzt legt er Indizien vor, wie drei von Mozarts Sinfonien zu einem nie gehörten Oratorium verschmelzen.",
      "img" : "img/nikolaus-harnoncourt-220x124.jpg"
    });

    var k2 = DB.News.fromJSON({
      "id": "k2",
      "tag" : "HANS MAGNUS ENZENSBERGER",
      "headline" : "Der Unerschütterliche",
      "date" : "11. November 2014  06:39 Uhr",
      "short" : "Hans Magnus Enzensberger wird 85. Ein Besuch bei dem herrlich eigenwilligen Intellektuellen. Mit Tumult hat er gerade ein erstaunlich persönliches Buch veröffentlicht.",
      "img" : "img/hans-magnus-enzensberger-220x124.jpg"
    });

    var k3 = DB.News.fromJSON({
      "id": "k3",
      "tag" : "DDR-DESIGN",
      "headline" : "Sandmännchen und Stasi-Mikrofone",
      "date" : "10. November 2014 um 18:25 Uhr",
      "short" : "Das größte Museum für DDR-Design steht ausgerechnet in Los Angeles. Ein Buch über das Wende Museum zeigt, welche Schätze und Abgründe es dort zu entdecken gibt.",
      "img" : "img/ddr-artefakte-alltag-fs-teaser-2-220x124.jpg"
    });

    var k4 = DB.News.fromJSON({
      "id": "k4",
      "tag" : "AZEALIA BANKS",
      "headline" : "Klare Ansage aus Harlem",
      "date" : "10. November 2014 um 15:25 Uhr",
      "short" : "Erst galt Azealia Banks als großes Raptalent, dann als streitsüchtig und selbstverliebt. Ihr seit Jahren erwartetes Debüt zeigt jetzt, wie gut das eine zum anderen passt. ",
      "img" : "img/azealia-banks-220x124.jpg"
    });

    var k5 = DB.News.fromJSON({
      "id": "k5",
      "tag" : "DINA FOXX",
      "headline" : "Ein bisschen multimedial",
      "date" : "10. November 2014 um 15:48 Uhr",
      "short" : "Den Krimi gibt es im TV, den Hintergrund im Netz: Zum zweiten Mal ermitteln die Zuschauer von Dina Foxx im ZDF crossmedial. Doch die Website ist diesmal nur ein Bonus.",
      "img" : "img/dina-foxx-zdf-220x124.jpg"
    });

    var k6 = DB.News.fromJSON({
      "id": "k6",
      "tag" : "FERIDUN FAXT",
      "headline" : "Nur nicht abkühlen, nur nicht komisch werden!",
      "date" : "10. November 2014 um 11:56",
      "short" : "Der Tausendseiter ist fertig, der Kumpel ein Tölpel, der über eine öde Hupe schluchzt. Vor lauter Schreck kauft unser Autor tütenweise Haushaltsreiniger.",
      "img" : "img/feridun-zaimoglu-freitext-teaser-220x124.jpg"
    });

    var k7 = DB.News.fromJSON({
      "id": "k7",
      "tag" : "OPEN MIKE",
      "headline" : "Der Pimmel ist ein Schoßhündchen",
      "date" : "10. November 2014  11:51 Uhr",
      "short" : "Souverän gemeißelte Syntax, hin und wieder eine kleine Obszönität: Der Literaturwettbewerb Open Mike war ein Schaulaufen für erschreckend professionelle Jungautoren.",
      "img" : "img/open-mike-2014-2-220x124.jpg"
    });

    var k8 = DB.News.fromJSON({
      "id": "k8",
      "tag" : "Frank Castorfs \"Kaputt\"",
      "headline" : "Barockes Teufelsfratzenpanorama",
      "date" : "10. November 2014  11:13 Uhr",
      "short" : "Versüßt und versülzt: Frank Castorf verkitscht in seinem Stück \"Kaputt\" an der Berliner Volksbühne die Weltkriegsfantasien von Curzio Malaparte.",
      "img" : "img/castorf-kaputt-volksbuehne-220x124.jpg"
    });

    var k9 = DB.News.fromJSON({
      "id": "k9",
      "tag" : "Jan Eckel",
      "headline" : "Es bleibt ein Kampf",
      "date" : "9. November 2014  21:20 Uhr",
      "short" : 'Wie Politik und Bürger um Menschenrechte ringen: Jan Eckels monumentale Studie "Die Ambivalenz des Guten"',
      "img" : "img/demonstranten-chile-220x124.jpg"
    });

    var k10 = DB.News.fromJSON({
      "id": "k10",
      "tag" : "Voguing",
      "headline" : "Pose für mich!",
      "date" : "8. November 2014  19:02 Uhr",
      "short" : "Voguing ist ein Tanz, der sich aus Modelposen der Illustrierten zusammensetzt. Warum ist er derzeit so populär?",
      "img" : "img/voguing-unicorn-ball-220x124.jpg"
    });

    var politik = DB.Stream();
    politik.id = 'politik';
    politik.titel = 'Politik';
    politik.news = new DB.List(p5, p6, p1, p2, p3, p4, p7, p8, p9, p10);

    var wirtschaft = DB.Stream();
    wirtschaft.id = 'wirtschaft';
    wirtschaft.titel = 'Wirtschaft';
    wirtschaft.news = new DB.List(w1, w2, w3, w4, w5, w6, w7, w8, w9, w10);

    var kultur = DB.Stream();
    kultur.id = 'kultur';
    kultur.titel = 'Kultur';
    kultur.news = new DB.List(k1, k2, k3, k4, k5, k6, k7, k8, k9, k10);

    return Promise.all([
      politik.save({depth: true, force: true}),
      wirtschaft.save({depth: true, force: true}),
      kultur.save({depth: true, force: true})
    ]);
  })
}