// import '../../js/bootstrap.min'
// import * as bootstrap from '../../js/bootstrap.min'
// window.bootstrap = bootstrap;
// let dogModalJq = new bootstrap.modal('dogModal');
// $('#dog').onclick(function (){
//     dogModalJq.show();
// })
function drawPoly(){
    let polystr = ''
    $('map area').each((i,e)=>{
        let coordsAtt = $(e).attr('coords')
        coordsAtt = coordsAtt.slice(0, -1);
        polystr += coordsAtt
    })
    jQuery('<area/>', {
        coords : polystr,
        shape:"poly",
    }).appendTo('#workmap');
    console.log('poly',polystr)
}
function postManCode(){
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
function getData(){
    var settings = {
        "url": "http://217.121.204.3:9090/objects",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
$(document).ready(function () {
    getData()
    // postManCode()
    // drawPoly();
    $(function () {
        $('body').show();

    }); // end ready
    // showContent();
    if (document.getElementById('page-info') && $('#page-info').hasClass('showOnPageLoad')){
        let modalCardInfo = new bootstrap.Modal('#page-info')
        modalCardInfo.show();
    }
    showHideObjects()
    initObjcet()
    $("[data-tt=tooltip]").tooltip();
    $("#card-info1").fadeIn(3000);
    let tooltipelements = document.querySelectorAll("[data-bs-toggle='tooltip']");
    tooltipelements.forEach((el) => {
        new bootstrap.Tooltip(el);
    });

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
    var textRegister = "De informatie op deze website over het dagelijks leven in het St. Pietersgasthuis is afkomstig uit\n" +
        "inventarisnummer 83 van het archief van de Amsterdamse gasthuizen. Het is een register van inkomsten en\n" +
        "uitgaven dat bijgehouden werd door de middeleeuwse ziekenhuisdirecteuren uit de jaren 1550-1559.\n" +
        "Financiële administratie lijkt vaak erg saai en onbeduidend. Echter, als we tussen de regels van de\n" +
        "administratie door lezen krijgen we een kijkje van binnenuit op het dagelijks leven in de gasthuizen en\n" +
        "kloosters. Zo komen we bijvoorbeeld te weten wat de bewoners van het St. Pietersgasthuis aten en welke\n" +
        "persoonlijke bezittingen de proveniers meenamen als zij hun kost in het gasthuis kochten. We zien welke\n" +
        "leveranciers producten en diensten aan de gasthuismeesters leverden en hoeveel medewerkers voor het gasthuis\n" +
        "aan het werk waren en waaruit hun loon bestond."
    var textVerhaal = "Het St. Pietersgasthuis was een veel omvangrijker organisatie dan alleen een ziekenhuis. De\n" +
        "gasthuismeesters bestierden een grote onderneming met een flink vermogen in de vorm van huizen en landerijen, renten en pachten dat aangevuld werd met de donaties en legaten van weldoeners. Het gasthuis was naast de medische\n" +
        "zorg voor de zieken, vreemdelingen en proveniers in de ziekenzaal en hun geestelijke zorg in de kapel\n" +
        "actief op het gebied van landbouw en veeteelt, het beschikte over een eigen keuken, brouwerij en bakkerij.\n" +
        "Daarnaast lag het onderhoud van de gebouwen van het gasthuis in handen van een uitgebreid team van\n" +
        "timmerlieden, metselaars en leidekkers. Een deel van de medewerkers van het gasthuis was zelfs inwonend,\n" +
        "zoals de priester die op alle heiligendagen missen in de gasthuiskapel las, voor de zieken preekte enhen de sacramenten toe diende."
    var textCharitas = "De gasthuizen werden gesteund met schenkingen van rijke en minder rijke Amsterdammers aan hun stadsgenoten\n" +
        "die de verliezers waren geworden in stedelijke samenleving: armen, zieken, zwervers en vreemdelingen. De\n" +
        "middeleeuwse Amsterdammers namen hiermee verantwoordelijkheid voor hun hulpbehoevende stadsgenoten.\n" +
        "Helemaal onbaatzuchtig waren de schenkingen aan het gasthuis meestal niet. Regelmatig lieten Amsterdammers\n" +
        "in hun testament bedragen aan het gasthuis na om jaarlijks op hun sterfdag een maaltijd voor de arme zieken\n" +
        "te verzorgen. In ruil voor de schenking zouden de zieken op die dag bidden voor de ziel van hun weldoener.\n" +
        "Daarnaast was er nog een reden om juist aan het gasthuis te schenken. De primaire taak van de gasthuizen\n" +
        "leunde namelijk dicht aan tegen de zeven werken van barmhartigheid, zoals het spijzen van de hongerigen, het\n" +
        "herbergen van vreemdelingen en het verzorgen van de zieken. Het begunstigen van het gasthuis was daarmee een\n" +
        "manier om de eigen devotie in dienst te stellen van het welzijn van de gemeenschap."
    var textBoodschapen = "Het St. Pietersgasthuis was een volwaardig bedrijf dat bestond bij de gratie van weldoeners, maar ook zelf inkomsten genereerde. Onder het kopje ‘Coeckenmoer, Hier nae volcht tgeen die moer inde coecken dagelycx ontfanckt van melck smeer hoij ende diergelycken’, registreerden de gasthuismeesters een gemiddeld inkomen uit de keuken van 100 gulden per jaar met uitschieters naar onderen van 64 gulden in 1554  en naar boven van 190 gulden in 1558 . Het ging hier om melk, vet en hooi dat blijkbaar niet nodig was voor de gasthuiskeuken en dus aan derden verkocht kon worden. \n" +
        "De inkomsten van de keuken vormden echter een druppel op de gloeiende plaat. Wanneer we onze aandacht op de uitgaven van de keuken richten, zien we dat in de jaren 1550-1556 gemiddeld 475 gulden aan boter werd uitgegeven  en tussen 1551-1559 gemiddeld 193 gulden per jaar aan kaas, met een uitschieter in 1558 van 302 gulden . Als vaste uitgaven komen we verder nog de inkoop van rogge en tarwe  tegen en vlees en vis  voor zo’n 230 gulden per jaar. Haring, bokking en rozijnen  vormen later in het register een veel kleinere post. . In de post extra ordinary vinden we kosten voor gort, bonen erwten, haver, azijn en zout."
    var textEerlickmael = "In het jaar 1551 bespreekt Nel, de weduwe Pieter Colijn, in haar testament jaarlijks een maaltijd met begraden spijs voor de zieke en gezonde mensen in St. Pietersgasthuis op zondag na Pinksteren. De zieken krijgen daarbij nog een stukje witbrood en een pint Rijnse wijn . \n" +
        "Dit bespreken van maaltijden voor de zieken was een veel voorkomende vorm, waarin welgestelde Amsterdammers een testament nalieten aan het Sint Pieters gasthuis. We zien dit terug in register 83, in de uitgaven onder de noemer ‘maaltyden’  waarin door het jaar heen meerdere van deze ‘besproken’ maaltijden vermeld staan. In veel gevallen bestonden deze maaltijden uit gebraden vlees of spijs. Soms aangevuld met wijn en/of brood. Als we deze omschrijving  vergelijken met het hedendaagse ziekenhuis eten lijken deze 16e eeuwse maaltijden nog zo slecht niet, al moeten we ons goed realiseren dat deze maaltijden geen dagelijkse kost waren.\n"
    var textDagelijksekost = "De nauwkeurige finaciële administratie van de gasthuismeesters levert ons een inkijkje in het voedselpatroon van het gasthuis op. De zieken kregen bijvoorbeeld op witte donderdag in het jaar 1550 lamsvlees voorgeschoteld en op pasen van 1559 hutspot. Om uit te vinden wat de keukenmoeders de inwonders van het St. Pietersgasthuis dagelijks voorschotelden bladeren we in het register naar de uitgaven van de keukenmoeders. \n" +
        "Samenvattend lijken vlees en vis, kaas, boter en brood veruit de belangrijkste ingredienten zijn van het voedingspakket dat in het gasthuis aan de zieken werd opgediend. En dat gecombineerd met veel bier. Groenten en fruit hebben een minder prominente plek in het register van inkomsten en uitgaven. Wellicht heeft dit dezelfde reden als het ontbreken van de inkoop van melk, daarin was het gasthuis waarschijnlijk zelfvoorzienend. \n" +
        "In een ouder register van het St. Pietersgasthuis uit 1474-1498 vermelden de gasthuismeesters wel de aankoop van buiskool  , een bos wortels , appels, mosterdzaad, honing en vijgen  en een moestuin van Sint Pietersgasthuis is terug te vinden in een aantekening  op een kaart die landmeter Pieter Koenenz op verzoek van Sint Pieters gasthuis in 1559 maakte: ‘Item dese coeltuyn off warmoestuijn is gelegen an deser stede cingel achter Boere verdriet’ . Wat men hier, behalve kool, nog meer verbouwde is helaas niet duidelijk.\n"
    var textMannenEnVrouwenhuis = "Het St. Pietersgasthuis maakte al in de 15e eeuw onderscheid tussen een mannenhuis en een vrouwenhuis voor de zieken en de proveniers. In de jaren ’50 van de 16e eeuw werd door het uitbreken van een pestepidemie in de stad ook een afzonderlijk pesthuis ingericht.  \n" +
        "Dat we interessante informatie uit oersaaie financiële administratie kunnen halen blijkt uit de post ‘olie en zeep’.  Hier specificeerden de gasthuismeesters nauwkeurig, aan welke afdelingen van het gasthuis zeep werd geleverd . Daarbij vermeldt de administratie welke hoeveelheden zeep aan het mannen-, het vrouwen- en het pesthuis werden geleverd. Over de jaren 1550-1559 maken we daaruit op dat in het mannen- en het vrouwenhuis ongeveer gelijke hoeveelheden zeep aangeschaft werden en in het pesthuis iets minder. Dit lijkt er op te wijzen dat er in deze periode ongeveer evenveel mannen als vrouwen in het gasthuis lagen, al neemt naar het eind van de jaren vijftig in verhouding het aantal mannen en zeker het aantal pestpatiënten toe . In 1559 bereikt het totale zeepverbruik in het register zijn hoogtepunt met 9½ tonnen zeep in een jaar tijd. Hieruit kunnen we afleiden dat er in dit jaar sprake is van piek in de bezetting van de bedden van het gasthuis."
    var textVoedsel = "Op 28 november 1558 ontvangt het St. Pieters Gasthuis 100 gulden uit het testament van Gerbrich Claesdr (1491-1558) , de weduwe van Popius Occo (1483-1537) . \n" +
        "Al in 1550 vermeldt het register van ontvangsten en uitgaven over de jaren 1550-1559 dat haar vermogende en bekende echtgenoot Popius Occo ieder jaar een stuiver en een maaltijd aan elke zieke in het St. Pietersgasthuis schonk . Deze bijdragen van het welgestelde echtpaar Occo kenden een sociaal en maatschappelijke element, namelijk het onderhoud en de verzorging van de hulpbehoevende medemens, maar ook een zielenheilselement. De arme zieken die een stuiver of een maaltijd kregen zouden namelijk bidden voor het zielenheil van hun weldoeners . \n" +
        "Ook de dochter en schoonzoon van Popius en Gerbrich schonken in 1548 6 Karolusguldens per jaar aan het St. Pietersgasthuis waarvan jaarlijks op Lebuïnusdag in de zomer een maaltijd van brood, wijn en gebraad voor de zieken bereid werd . De rente waarmee het echtpaar Joost Buyck  en Balich Popiusdr deze gift bekostigden kwam overigens uit het bezit van Gerbrich Claesdr. Een voorwaarde van Joost en Balich was dat de arme mensen zouden bidden voor een eerlijk leven en zalig sterven van hen en hun kinderen."
    var textStuivers = "De gasthuisadministratie geeft ons niet slechts informatie over de weldoeners van het gasthuis, maar ook over de arme zieken zelf. Het uitdelen van stuivers aan de zieken uit een legaat van Popius Occo werd nauwkeurig bijgehouden door de gasthuismeesters. Aan de hand van het totaalbedrag van deze jaarlijkse kostenpost kunnen we precies uitrekenen hoeveel stuivers er werden uitgegeven en hoeveel zieken zich dus op dat moment in het gasthuis bevonden. In het jaar 1553 is uit naam van Popius Occo voor 5 gulden en 4 stuivers aan de armen in het gasthuis uitgedeeld. Eén gulden bevat 20 stuivers. Dat leert ons dat zich op 25 november 1553 dus 104 zieken in het St. Pietersgasthuis bevonden.\n" +
        "Popius Occo was niet de enige die stuivers liet uitdelen, sommige weldoeners gaven alleen aan de zieken en anderen schonken een stuiver aan de zieken én aan de dienstboden in het gasthuis. Dit soort uitgaven is meerdere keren per jaar door de gasthuismeesters in het register van ontvangsten en uitkomsten van 1550 tot en met 1559 genoteerd. Deze aantekeningen leren ons dat het aantal bewoners, zieken, proveniers en personeel van het St. Pietersgasthuis in deze jaren varieerde tussen 90 en 120."
    var textMedische = "In de middeleeuwse gasthuizen lag het accent meer op het verzorgen van de zieken dan op het genezen. De meer specialistische verzorging van de zieken gebeurde door chirurgijns die regelmatig langs kwamen om de zieken te visiteren . In een aantekening uit 1559 in het Grootmemoriaal van het archief van de burgemeesters wordt de functie van chirurgijn duidelijk omschreven : Het verbinden van wonden, aderlaten en andere werkzaamheden uitgezonderd het behandelen van pokken en pest. \n" +
        "Het vaststellen van besmettelijke ziekten als lazarie, pest en pokken gebeurde buiten Amsterdam. Met regelmaat werden zieken door de gasthuismeesters van 12 of 14 stuivers voorzien om zich te laten schouwen in Haarlem (lazarie en pest) en Delft (pokken) .\n" +
        "Onder de post ‘Extro Ordinarije’ zien we dat de gasthuismeesters op 23 augustus 1554 vier weken kostgeld, 22 stuivers per week, aan een vrouw hebben betaald voor een Waal met pokken, zodat zij hem met het een of ander in kon smeren . Voorzichtig kunnen we hieruit concluderen dat er de het gasthuis veel aangelegen was besmettelijke ziekten buiten de deur te houden. \n" +
        "Dezelfde post  maakt melding van de inkoop van recepten en dranken bij apotheker Jan Claesz in de Cat. Naast gezonde maaltijden kregen de zieken, als het nodig was, dus ook kruidenmengsels, zalven en medicinale drankjes in het gasthuis."
    var textHetEchteWerk = "Een enkele keer werd de hulp van de chirurgijns ingeroepen voor het echte werk, het afzetten van ledematen. Op 30 januari 1553 betaalt de ziekenmoeder, Ghiertemoer, 6 stuivers voor de romanie, een soort zoete Spaanse wijn, en andere dingen die aan Herman Pouwels als verdoving werden toegediend toen zijn been werd afgezet. Dat Herman deze ingreep heeft overleefd zien we in de administratie wanneer de gasthuismeesters op 17 april 1553 Dirck woutersz de kistenmaker 14 stuivers betalen voor een stelt (kruk of houten been) ten behoeve van Hermen Pouwelsz van Colderveen. \n" +
        "Of de amputatie van het been in het St. Pietersgasthuis heeft plaatsgevonden is hiermee niet duidelijk, maar dat de gasthuismeesters in ieder geval een deel van de kosten voor de ingreep en de revalidatie van Herman hebben bekostigd staat vast. \n" +
        "Dat deze ingreep niet op zichzelf staat zien we iets later in hetzelfde jaar.  Op 27 februari 1554 vermelden de gasthuismeesters:  Met consent van de heren van het gerecht en bij advies van de chirurgijns doctor Artus, doctor Nano en meester Willem en meester Symon Roes en meester Zijbrant hebben wij doen afzetten vier tenen van de linkervoet en drie tenen van de rechtervoet van een man genaamd Vreese Reynertz van Peel in het land van Luik. De voorschreven meesters hebben hun hulp geboden. Hiervoor heeft het gasthuis 1 gulden en 9 stuivers betaald . Ook de kosten, 4 stuivers, voor de aanschaf van de beitel waarmee de tenen van Vreese zijn afgezet zijn netjes geregistreerd. Waarom het gerecht consent moest geven voor de amputatie van de tenen van Vreese zal voorlopig een vraag blijven."
    var textProveniers = "Proveniers waren personen die zich tegen betaling van een eenmalig bedrag inkochten in het gasthuis. Meestal droegen zij hiervoor hun hele bezit over aan het St. Pietersgasthuis. Het ging hier meestal om bejaarde en alleenstaande mannen of vrouwen die weinig of geen familie meer hadden die hen zouden kunnen onderhouden . In de provenierscontracten die het St. Pietersgasthuis hiervoor opstelde wordt beschreven welke vorm van zorg de proveniers ontvingen en ook wat daar tegenover stond. In het register van ontvangsten en uitgaven over de jaren 1550-1559 zijn slechts drie provenierscontracten vermeld, waaronder die van Gherit Gyssen."
    var textTrouweHuurder = "Gerrit Ghijssen van Sloten sluit op 17 april 1553 een overeenkomst met de gasthuismeesters van het St. Pietersgasthuis . De gasthuismeesters nemen Gerrit die dag voor zijn leven lang aan als provenier van het gasthuis. Dit doen zij omdat Gerrit al 37 jaar op het gasthuisland Pollenburg bij de Overtoom heeft gewoond ‘ende daar een groote penninc in heeft geschoten’. Gerrit heeft blijkbaar geen onroerend goed in zijn bezit. Hij zal namelijk een bedrag van honderddertig Karolusguldens aan de gasthuismeesters overdragen. Daarnaast zal hij naar vermogen arbeid verrichten, waaronder het dienen van missen en het houden van toezicht op het gasthuisland en de koeien. Daarvoor zal hij zijn maaltijden in de keuken mogen genieten en zal hij slapen in het koehuis. Mocht hij voor langere tijd door ziekte en krankheid bevangen worden dan zal hij in het gasthuis opgenomen worden net als andere zieken. Hij mag een proefjaar nemen voor dertig gulden, in een keer te betalen. \n" +
        "De aantekeningen van betaling vertellen ons dat Gerrit op zowel 20 mei als 17 juli 1554 vijftien gulden heeft betaald voor het proefjaar van dertig gulden.\n" +
        "Op 13 juni van dat zelfde jaar heeft Gerrit Ghijsbertz al verklaard dat hij tevreden is met de voorwaarden, mits zijn kleding, beddengoed en ander toebehoren dat hij mee het gasthuis in heeft genomen na zijn dood aan zijn drie zoons toekomen. Op die dag betaalt hij de resterende honderd gulden. Lang heeft hij niet van zijn verblijf in het St. Pietersgasthuis kunnen genieten, want op 13 januari 1555 is Gerrit gestorven. Moge hij rusten in vrede."
    var textvreemdelingen = "De taak van het St. Pietersgasthuis was niet alleen het opvangen en verzorgen van arme Amsterdammers, maar ook van vreemdelingen die ziek werden en geen ander heenkomen hadden dan het gasthuis. Onder de post inkomsten uit ‘Extro ordinarye’ zien we al snel dat zich in het Amsterdam van de 16e eeuw een flink aantal handelslieden, schippers en ambachtslieden van buiten de stad en zelfs uit de omliggende landen moet hebben opgehouden en dat een aantal van hen ziek in het gasthuis terecht kwam en er zelfs stierf . \n" +
        "Een Friese schipper schenkt een buidel geld met een sleutel, Koert van Coevorden en Jan van Steenwijk sterven beide in het gasthuis net als Cornels Jansz, een dijker uit Lexmond. En ook een Schot, mannen uit Ieper en Lubeck en een Waal stierven in het pesthuis. Mary Dircks uit Bergen Noorwegen heeft het gasthuis een godspenning geschonken. Aandoenlijk is het verhaal van een schuitvoerer die het pesthuis beloofd had 6 gulden te betalen, maar te arm was dat bedrag op te hoesten. Goede lieden zijn bijgesprongen om zijn belofte in te lossen ."
    var textFinanciele = "Dat de gasthuismeesters geen half werk leverden bij het besturen van het gasthuis kunnen we afleiden uit de nauwgezette administratie die zij bijhielden. Van het St. Pietersgasthuis hebben relatief veel registers de tand des tijd overleefd.  Deze pareltjes bevatten een schat aan informatie voor de wetenschap, als bron voor onderzoek naar de ontwikkeling van de maatschappelijke en medische zorg in de Late Middeleeuwen. Maar ook voor het brede publiek, om gevoel te krijgen bij die mysterieuze Middeleeuwen, waar de meesten van ons zich moeilijk een beeld van kunnen vormen. \n" +
        "De gasthuismeesters nemen ons mee naar de wereld in van de middeleeuwse mens met al zijn dromen, gewoontes en onhebbelijkheden. De middeleeuwse mens die soms veel dichter bij ons staat dan we zouden denken. Zo lezen we in de beoekhouding van de gasthuismeesters over de voorwaarden waaronder Amsterdammers hun oude dag in het gasthuis mochten slijten. Er is informatie over hoeveel geld en goederen zij bezaten, maar ook welke taken zij in het gasthuis moesten vervullen, wat ze te eten kregen en aan welke regels zij zich moesten houden. De gasthuisarchieven vertellen niet alleen veel over de gasthuizen zelf, maar ook over de stad en haar bewoners. Door de nauwgezette registratie van de bezittingen van de gasthuizen in de vorm van huizen en renten kunnen we bijvoorbeeld veel te weten komen over wie waar woonde en hoe de stad zich topografisch ontwikkelde."
    var textPersoneel = "De uitgaven van het gasthuis aan personeelskosten staan netjes genoteerd onder de post ‘Bodenloon’. Medewerkers van het gasthuis kregen niet alleen salaris, maar bedongen ook secundaire arbeidsvoorwaarden zoals kleding en behuizing. \n" +
        "Wanneer Jacob Henricxz bijvoorbeeld in 1550 als bakker en brouwer bij het St. Pietersgasthuis in dienst treedt, leggen de schepenen dit vast in een akte. De akte bestaat niet meer, maar in het register lezen we dat Jacob eenentwintig gulden per jaar plus twee hemden en twee paar schoenen van de gasthuismeesters zal ontvangen . Op 15 februari 1556 sterft Jacob Hendricxz en wordt zijn salaris uitbetaald aan zijn erven. Cornelis Jansz, de timmerman komt met de gasthuismeesters overeen dat hij twintig gulden per jaar arbeidsloon krijgt met daarbij vrije kost voor het hele jaar .\n" +
        "Dat het personeel soms stevig onderhandelde zien we wanneer Quyryntgen Pieters in 1552 aan het werk gaat als keukenmoeder voor 5 gulden per half jaar. In 1553 krijgt zij een nieuw contract waarin sprake is van een salarisverhoging. Vanaf dat moment ontvangt zij namelijk 6 gulden per half jaar. Weer een jaar later gaat zij er nog een gulden per half jaar op vooruit .  Of Quirijntje daarnaast ook nog kost en inwoning kreeg, weten we helaas niet."
    var textFondsenwerving = "De inkomsten van het St. Pietersgasthuis bestonden uit renten en pachten die door weldoeners aan het gasthuis waren geschonken. Daarnaast ontving het gasthuis legaten en aalmoezen voor de arme zieken, collectes in de kapel en genereerde het inkomsten uit de verkoop van producten van het eigen landbouw en veeteelt bedrijf, de bouwerij . \n" +
        "Dat de giften en aalmoezen niet altijd zomaar bij het St. Pietersgasthuis terechtkwamen lezen we in deze bijzondere post  : Cornelis Janszoon wordt door het gasthuis aangenomen om te gaan bidden, oftewel een bijdrage vragen, bij de schippers en kooplieden voor het gasthuis. We hebben het hier dus over en soort middeleeuwse fondsenwerver. Hij krijgt hiervoor zijn kost en kleding. Als hij dit werk niet meer kan uitvoeren zal het gasthuis hem nog wel zijn leven lang van kost en kleding voorzien. Zou het hier om dezelfde Cornelis Janszoon gaan die zich in 1550 als timmerman aan het gasthuis verbindt? (zie kopje personeel) \n" +
        "Het schenken van een godspenning aan de armen in het St. Pietersgasthuis door kooplieden bij het aangaan van een (ver)koop was al gebruikelijk in een aantal herbergen in middeleeuws Amsterdam , waar voor dit doel collectebussen hingen. Dat Cornelis Jansz toch nog op pad werd gestuurd om te gaan bidden om een bijdrage van de kooplieden en schippers verraad misschien dat gasthuismeesters de inkomsten uit de bussen wat tegen vonden vallen."
    var textDuurzaamheid = "In de middeleeuwen kende men de waarde van grondstoffen goed. Niets werd zomaar weggegooid en de middeleeuwse Amsterdammers zorgden ervoor dat inboedels na overlijden of verhuizing van de eigenaar een tweede leven kregen. Zo lezen we in het provenierscontract van Gerrit Gijssen dat het beddengoed waar hij dagelijks op slaapt en zijn kleding na zijn dood aan zijn drie zonen wordt overgedragen . \n" +
        "Ook in de veehouderij van het St. Pietersgasthuis gaat men uiterst efficiënt om met de producten die dit bedrijfsonderdeel opbracht. Het vee werd grotendeels buiten Amsterdam ingekocht, vaak met meerdere stuks tegelijk. De ossen kwamen van leveranciers uit Friesland, Groningen, Drenthe en de kop van Overijssel  en de melkkoeien werden iets meer in de buurt ingekocht, zoals Osdorp, Sloten en Sloterdijk . Jaarlijks werden voor het gasthuis ca 25 ossen, 12 koeien, 9 varkens en 12 lammeren aangekocht en geslacht , waarvan het vlees voor eigen gebruik was en de huiden en het smeer werden verkocht . Het smeer werd vervolgens omgezet in kaarsen, die werden teruggekocht door het gasthuis, waarbij het maakloon werd verrekend met de kaarsenmaker."
    var textOudeLijefGerijtsdr = "Op 7 december 1553 nemen de gasthuismeesters Lijef Gerijtsdr van ongeveer 90 jaar oud op in het St. Pietersgasthuis . Zij mag haar leven lang in het gasthuis verblijven, omdat zij vanwege haar leeftijd niet meer voor zichzelf kan zorgen. Dit doen de gasthuismeesters niet belangeloos. Het oude besje draagt namelijk het gebruik en de huur van haar huisje op de Zeedijk aan het gasthuis over. Dit huisje heeft Leijff gekocht van het St. Catharinaklooster. De gasthuismeesters zullen de koopakte van het huisje opnemen in lade 15 en het huis wordt in geschreven in het boek van inkomende renten folio 136. Daarnaast hebben de buitenmoeders een deel van de inboedel van Leijff ontvangen. In juli 1555 is Leijff Gerritsdr in het gasthuis gestorven."
    var textPriester = "Op 1 januari 1550 wordt meester Willem Kinnesz, de pastoor van de nieuwe Kerk,  door de gasthuismeesters aangenomen om voor de zieken te preken in het gasthuis. Dat Willem werkelijk hart had voor de zieken en inzag dat zij meer nodig hadden dan geestelijke zorg alleen blijkt uit de administratie van de jaren 1551 tot en met 1554. Willem geeft in die jaren een steeds toenemend bedrag van zijn loon terug aan de gasthuismeesters als geschenk voor de armen en om hen maaltijden voor te zetten. Daarna eindigt in de gasthuisadministratie de notatie van loonkosten van deze priester. Wel komen we Willem nog een keer tegen in 1556 wanneer hij een testament overdraagt aan de gasthuismeesters van een persoon die niet genoemd wil  worden . In een ander deel van de gasthuisadministratie lezen we dat meester Willem Kinnesz een lijfrente van twaalf Karolusgulden per jaar het St. Pietersgasthuis had. De uitkering van deze rente stopt als Willem op 17 oktober 1571 sterft."
    var textGasthuispriester = "Willem Kinnesz was niet de enige priester die werkzaam was voor de gasthuismeesters. Op 6 januari 1550 nemen de gasthuismeesters heer Joost Jansz aan als priester om alle zieken van het gasthuis, te weten het pesthuis, het mannenhuis en het vrouwenhuis de biecht af te nemen en de sacramenten te administreren. Ook zal hij de doden begraven. Daarvoor krijgt hij vrije huur van het huis recht tegenover het gasthuis. \n" +
        "Dat de geestelijke zorg binnen het gasthuis ook voor hem geen dagtaak was en hij net als Willem Kinnesz tijd voor een bijbaan had, is af te leiden uit de volgende bepaling: Mocht het zo zijn dat hij door een grote pestuitbraak niet welkom is om de getijden in de Nieuwe Kerk te zingen dan zullen de gasthuismeesters hem voor die inkomsten compenseren. Ook zijn de gasthuismeesters ervoor verantwoordelijk dat zijn plek bij de getijdenmeesters, zolang hij niet kan zingen, voor hem vrij wordt gehouden . Dat zowel Joost als de gasthuismeesters ervan doordrongen waren dat het uitvoeren van het priesterambt een gasthuis geen ongevaarlijke taak was, mag duidelijk zijn."
    var textExtraPersoneel = "Naast de vaste priesters die hun loon op vaste momenten van de gasthuismeesters ontvingen, in de vorm van klinkende munt of als kost en inwoning, komen er meer vermeldingen over het inhuren van personeel voor de kapel in het register van uitgaven en inkomsten over de jaren 1550-1559 voor. Elk jaar op de dag van St. Elisabeth (patroonheilige van het met het St. Pietersgasthuis gefuseerde Oude Gasthuis) en op de dag van St. Pieter vierde men missen ter ere van deze heiligen in de gasthuiskapel. Voor de zangers van de mis werden op deze dagen copieuze maaltijden ingekocht, bestaande uit afwisselend wijn, vogels, konijnen, vis, hoenderen en bier . Daarnaast worden met enige regelmaat misdienaren, zangers van zielmissen, organisten en blazers ingehuurd."
    var textBushuis = "Het Bushuis is gevestigd aan de Vesten achter het Paulusbroedersklooster. Het gebouw was bedoeld als bewaarplaats van het geschut van de stad en om in tijden van nood ten behoeve van de stad ingezet te worden. Het huidige adres van het Bushuis of Oost-Indisch huis is Kloveniersburgwal 48 . Het gebouw is, heel toepasselijk, tegenwoordig in gebruik door o.a. de Faculteit geschiedenis van de Universiteit van Amsterdam. Op de korenzolders, boven het wapenmagazijn, werd in 1558 en 1559 het Nieuwe Pesthuis an het St. Pietersgasthuis ingericht."
    var textRekenboek = "Aanvullend op het register van inkomsten en uitgaven over de jaren 1550 – 1559  geeft het rekeningenboekje van het Nieuwe Pesthuis  een overzicht van de uitgaven en inkomsten van het nieuwe pesthuis, dat in 1558 wordt ingericht om de enorme toevloed van zieken tijdens de pestepidemie het hoofd te kunnen bieden. Interessant zijn de uitgaven die bij de oprichting gedaan worden voor het inrichten van het pesthuis. Het gaat om de aankoop van stoelen, aardewerk, stro voor de bedsteden en allerlei kuipwerk, zoals wastobben, emmers, watertonnen etc. Op 18 juli 1558 worden 86 stoelen aangekocht . Dit kunnen we beschouwen als een indicatie voor het aantal zieken dat men voor het nieuwe pesthuis had ingepland."
    var textLaven = "Opmerkelijk is de enorme hoeveelheid bier die er in het nieuwe pesthuis doorheen ging.\\n\" +\n" +
        "In de 11 maanden die het rekenboek van het pesthuis beslaat werden in totaal 179 tonnen bier aangerukt, dat zijn ruim 16 tonnen bier per maand. De inhoud van een bierton in 16e eeuws Amsterdam bedroeg 155,4 liter . Dat betekent dat in het pesthuis in 11 maanden 27.816 liter bier werd genuttigd, wat ons brengt op een gemiddelde ruim 80 liter bier per dag. We mogen er dus vanuitgaan dat de arme pestlijders ongeveer een liter bier per dag aangeboden kregen.\n" +
        "Voor het bier werd niet betaald. Onder aan elke folio van het rekeningenboek staat als opmerking bij de som van de uitgaven: hier ys ‘t bier niet ingerekent. En de gasthuismeesters tekenen hier en daar op dat er tonnen bier naar het nieuwe pesthuis gezonden zijn . De brouwerij van het St. Pietersgasthuis moet dus op volle toeren gedraaid hebben."
    var textDoodgravers = "Al in 1557 zien we in de administratie van het St. Pietersgasthuis dat de buren, de Cellebroeders, gecontracteerd werden voor het begraven van de mensen die stierven in het St. Pietersgasthuis. In ruil voor deze werkzaamheden ontvingen de Cellebroeders 6 tonnen bier per jaar. In een belastingboek van het gasthuis staat dit contract opgetekend met vermelding van de betalingen in tonnen bier over de jaren 1557 tot en met 1565 . Vreemd genoeg ontbreken hier precies de betalingen voor de periode die het rekenboek van het nieuwe pesthuis beslaat: van midden1558 tot midden 1559.\n" +
        "Het lijkt er op dat de Cellebroeders het grafdelven in deze periode niet meer aankonden.\n" +
        "Het aantal pestdoden liep blijkbaar zo hard op, dat het nieuw opgerichte pesthuis op 7 augustus 2 doodgravers contracteert om de graven te maken, de doden naar het graf te dragen en het graf te dekken, ‘waerof zy zullen hebben van elke dode, groet ofte klein, III st.’ Dezelfde mannen, Dirck Janz Verweij en Harman Janz, werden op exact dezelfde datum ook vermeld in register van inkomsten en uitgaven  als doodgravers voor het Sint Pietersgasthuis. Echter, hier ontvangen zij slechts 2 stuivers per gedolven graf.\n" +
        "In de periode augustus tot en met december 1558 bereikte het aantal sterfgevallen in beide gasthuizen een piek: In Sint Pieters gasthuis waren dat in totaal 76, in het nieuwe pesthuis bijna het dubbele aantal, 139. Een maal per week noteerden de gasthuismeesters de kosten voor het begraven van de doden uit zowel het St. Pietersgasthuis als het Nieuwe Pesthuis."
    var textFenomeen = "Op 17 december 1557 wordt voor de eerste maal Steven genoemd, als ‘knecht van pestelencyhuys’ (83, 44/42v en ook 83, 167/166v). Vanaf dat moment tot 6 december 1559 wordt hij maar liefst 21 keer vermeld in register 83, vooral in het jaar 1558, waarin de pestepidemie in Amsterdam zijn hoogtepunt bereikt. \n" +
        "Steven is werkzaam in het pesthuis van Sint Pietersgasthuis in de korte periode van 2 jaar. \n" +
        "Daarna lijkt hij te zijn verdwenen: in register 86, het rekenboek van het nieuwe pesthuis, het Bushuis, komt hij niet voor en ook in de op register 83 volgende registers 84 en 85 wordt hij niet meer genoemd. Vreemd genoeg wordt hij in register 83 niet vermeld onder het bodenloon en ook niet als provenier, wat zijn status als ‘knecht’ niet erg duidelijk maakt.\n" +
        "Dat Steven zo vaak genoemd wordt heeft te maken met zijn functie in het pesthuis, hij lijkt verantwoordelijk te zijn voor het innen van ziekengeld en de bezittingen van degenen die in het pesthuis overlijden. En aangezien in zijn periode bij het pesthuis (1558 -1559) de pestepidemie zijn hoogtepunt bereikt, valt er veel geld op te halen.\n" +
        "Dat het niet altijd even gemakkelijk gaat blijkt uit 2 vermeldingen van diefstal uit het pesthuis, die door het kordate optreden van Steven gelukkig kunnen worden opgelost.\n" +
        "In het eerste geval, op 26 april 1559, zorgt Steven dat het geld terugkomt ‘van en die dat gasthuys wat heft ontdragen’ (83, 45/44r). In dit geval gaat het om slechts 10 stuivers, maar bij de 2e diefstal die vermeld wordt gaat het om veel meer geld.\n" +
        "Op 6 december 1559 worden 19 gulden en 4 stuivers ontvreemd, door ‘een boeffgen die int gasthuys eenen bestoellen hadde ende by Steven wederom achtervolcht ende gecregen’ (83, 46/44v).\n" +
        "De laatste vermelding van Steven is op 6 december 1559. Wat er daarna met hem gebeurd is is niet bekend, mogelijk is hij, zo dicht bij het vuur,  zelf slachtoffer van de pestepidemie geworden."
    var cardArr = [
        {
            page: "pieters",
            content: [
                {
                    class: "verhaal",
                    nextClass: "register83",
                    previousClass: "",
                    src: "../../images/midev/verhaal.png",
                    text: textVerhaal,
                    title: "De organisatie St. Pietersgasthuis",
                    alt: "verhaal"
                },
                {
                    class: "register83",
                    nextClass: "charitas",
                    previousClass: "verhaal",
                    src: "../../images/midev/register-83.png",
                    text: textRegister,
                    title: "Register 83",
                    alt: "Register 83"
                },
                {
                    class: "charitas",
                    src: "../../images/midev/charitas-sm.png",
                    nextClass: "",
                    previousClass: "register83",
                    text: textCharitas,
                    title: "Charitas en zielenheil",
                    alt: "charitas"
                }
            ]
        },
        {
            page: "keuken",
            content: [
                {
                    class: "boodschapen",
                    nextClass: "eerlickmael",
                    previousClass: "",
                    src: "../../images/midev/keuken/boodschappen.png",
                    text: textBoodschapen,
                    title: "Boodschappen van de keukenmoeders",
                    alt: "Boodschappen"
                },
                {
                    class: "eerlickmael",
                    nextClass: "dagelijksekost",
                    previousClass: "boodschapen",
                    src: "../../images/midev/keuken/eerliek-mael.png",
                    text: textEerlickmael,
                    title: "Een eerlick mael.",
                    alt: "Eerlick"
                },
                {
                    class: "dagelijksekost",
                    nextClass: "",
                    previousClass: "eerlickmael",
                    src: "../../images/midev/keuken/dagelijkse-kost.png",
                    text: textDagelijksekost,
                    title: "Dagelijkse kost",
                    alt: "Dagelijkse"
                }
            ]
        },
        {
            page: "ziekenkamer",
            content: [
                {
                    class: "mannen-en-vrouwenhuis",
                    nextClass: "voedsel",
                    previousClass: "",
                    src: "../../images/midev/ziekenkamer/mannen-en-vrouwenhuis.png",
                    text: textMannenEnVrouwenhuis,
                    title: "Mannen en vrouwenhuis",
                    alt: "Mannen en vrouwenhuis"
                },
                {
                    class: "voedsel",
                    nextClass: "",
                    previousClass: "mannen-en-vrouwenhuis",
                    src: "../../images/midev/ziekenkamer/voedsel-voor-zielenheil.png",
                    text: textVoedsel,
                    title: "Voedsel voor zielenheil (dagelijks leven).",
                    alt: "Voedsel voor zielenheil"
                },
                {
                    class: "stuivers",
                    nextClass: "medischezorg",
                    previousClass: "voedsel",
                    src: "",
                    text: textStuivers,
                    title: "Stuivers voor de zieken",
                    alt: "Stuivers voor de zieken"
                },
                {
                    class: "medischezorg",
                    nextClass: "medischezorg",
                    previousClass: "stuivers",
                    src: "../../images/midev/ziekenkamer/medische-zorg.png",
                    text: textMedische,
                    title: "Medische zorg",
                    alt: "Medische zorg"
                },
                {
                    class: "het-echte-werk",
                    nextClass: "proveniers",
                    previousClass: "medischezorg",
                    src: "../../images/midev/ziekenkamer/het-echte-wek.png",
                    text: textHetEchteWerk,
                    title: "Het echte werk",
                    alt: "Het echte werk"
                },
                {
                    class: "proveniers",
                    nextClass: "een-trouwe-huurder",
                    previousClass: "het-echte-werk",
                    src: "../../images/midev/ziekenkamer/proveniers.png",
                    text: textProveniers,
                    title: "Proveniers",
                    alt: "Proveniers"
                },
                {
                    class: "een-trouwe-huurder",
                    nextClass: "vreemdelingen",
                    previousClass: "proveniers",
                    src: "../../images/midev/ziekenkamer/trouwe-huurder.png",
                    text: textTrouweHuurder,
                    title: "Een trouwe huurder die geen afscheid kan nemen",
                    alt: "Een trouwe huurder die geen afscheid kan nemen"
                },
                {
                    class: "vreemdelingen",
                    nextClass: "",
                    previousClass: "een-trouwe-huurder",
                    src: "../../images/midev/ziekenkamer/vreemdelingen.png",
                    text: textvreemdelingen,
                    title: "Vreemdelingen",
                    alt: "Vreemdelingen"
                }
            ]
        },
        {
            page: "regentekamer",
            content: [
                {
                    class: "financiele",
                    nextClass: "personeel",
                    previousClass: "",
                    src: "../../images/midev/regentekamer/financiele-administratie.png",
                    text: textFinanciele,
                    title: "Financiele administratie",
                    alt: "Financiele administratie"
                },
                {
                    class: "personeel",
                    nextClass: "fondsenwerving",
                    previousClass: "financiele",
                    src: "../../images/midev/regentekamer/personeel.png",
                    text: textPersoneel,
                    title: "Personeel.",
                    alt: "Personeel"
                },
                {
                    class: "fondsenwerving",
                    nextClass: "duurzaamheid",
                    previousClass: "personeel",
                    src: "../../images/midev/regentekamer/fondsenwerving.png",
                    text: textFondsenwerving,
                    title: "Fondsenwerving.",
                    alt: "Fondsenwerving"
                },
                {
                    class: "duurzaamheid",
                    nextClass: "oude-lijef-gerijtsdr",
                    previousClass: "fondsenwerving",
                    src: "../../images/midev/regentekamer/duurzaamheid.png",
                    text: textDuurzaamheid,
                    title: "Duurzaamheid.",
                    alt: "Duurzaamheid"
                },
                {
                    class: "oude-lijef-gerijtsdr",
                    nextClass: "",
                    previousClass: "duurzaamheid",
                    src: "../../images/midev/regentekamer/oude-lijef-grijtsdr.png",
                    text: textOudeLijefGerijtsdr,
                    title: "Oude Lijef Gerijtsdr.",
                    alt: "Oude Lijef Gerijtsdr"
                }
            ]
        },
        {
            page: "kapel",
            content: [
                {
                    class: "priester",
                    nextClass: "gasthuispriester",
                    previousClass: "",
                    src: "../../images/midev/kapel/priester.png",
                    text: textPriester,
                    title: "Een priester met hart voor de zieken",
                    alt: "Een priester met hart voor de zieken."
                },
                {
                    class: "gasthuispriester",
                    nextClass: "extra-personeel",
                    previousClass: "priester",
                    src: "../../images/midev/kapel/gasthuispriester.png",
                    text: textGasthuispriester,
                    title: "De gasthuispriester en zijn bijbaantjes",
                    alt: "De gasthuispriester en zijn bijbaantjes."
                },
                {
                    class: "extra-personeel",
                    nextClass: "",
                    previousClass: "gasthuispriester",
                    src: "../../images/midev/kapel/extra-personeel.png",
                    text: textExtraPersoneel,
                    title: "Extra personeel",
                    alt: "Extra personeel"
                }
            ]
        },
        {
            page: "pesthuis",
            content: [
                {
                    class: "bushuis",
                    nextClass: "rekenboek",
                    previousClass: "",
                    src: "../../images/midev/pesthuis/bushuis.png",
                    text: textBushuis,
                    title: "Het Bushuis",
                    alt: "Het Bushuis"
                },
                {
                    class: "rekenboek",
                    nextClass: "laven",
                    previousClass: "bushuis",
                    src: "../../images/midev/pesthuis/rekenboek.png",
                    text: textRekenboek,
                    title: "Het rekenboek van het Nieuwe Pesthuis (15558-1559)",
                    alt: "Het rekenboek van het Nieuwe Pesthuis (15558-1559)"
                },
                {
                    class: "laven",
                    nextClass: "doodgravers",
                    previousClass: "rekenboek",
                    src: "../../images/midev/pesthuis/laven.png",
                    text: textLaven,
                    title: "Het laven van de armen",
                    alt: "Het laven van de armen"
                },
                {
                    class: "doodgravers",
                    nextClass: "fenomeen",
                    previousClass: "laven",
                    src: "../../images/midev/pesthuis/doodgravers.png",
                    text: textDoodgravers,
                    title: "Doodgravers niet aan te slepen",
                    alt: "Doodgravers niet aan te slepen"
                },
                {
                    class: "fenomeen",
                    nextClass: "",
                    previousClass: "doodgravers",
                    src: "../../images/midev/pesthuis/fenomeen.png",
                    text: textFenomeen,
                    title: "Het fenomeen Steven, knecht van het pesthuis.",
                    alt: "Het fenomeen Steven, knecht van het pesthuis."
                }
            ]
        },
    ]

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
function showContent(){
    $('#startZoomIn').css('animation-name','')
    $('#startZoomIn').css('animation-name','zoomOut')
    setTimeout(()=>{
        $('#startZoomIn').addClass('d-none')
        if (document.getElementById('page-info')){
            let modalCardInfo = new bootstrap.Modal('#page-info')
            modalCardInfo.show();
        }
    },2000)
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
            console.log(elementID)
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

document.addEventListener('mousemove', function (e) {
    // console.log(e.pageX);
    // console.log(e.pageY);
    document.getElementById("myTooltip").style.left = (e.pageX + 5) + "px";
    document.getElementById("myTooltip").style.top = (e.pageY + 5) + "px";

});
document.addEventListener('click', function (e) {
    var xCord = e.pageX;
    var yCord = e.pageY
    console.log('h',yCord)
    var y1Cord = yCord - 178;
    var cor = xCord + ',' + y1Cord + ',' + '1'
    var img1x = $('#img1').pageX;
    var xPercent = xCord / $(document).width() * 100;
    var yPercent = yCord / $(document).height() * 100;
    console.log('left', e.pageX, xPercent + '%');
    console.log('top', e.pageY, yPercent + '%');
    console.log('width: ' + xCord)
    console.log('height: ' + y1Cord )
    navigator.clipboard.writeText(xCord + ',' + y1Cord)
    jQuery('<area/>', {
        coords : cor,
        shape:"circle",
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
