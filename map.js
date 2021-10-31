
const { map } = require("jquery");

/* map
var mymap = L.map("map").setView([60.20301625243366, 24.926280814336177], 11);
*/


// kaikki kirpparit markkereineen ja popup-teksteineen

// UFF
/*
var marker = L.marker([60.20266957854647, 24.96800381015687]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand (Kauppakeskus Arabia)</b><br>Hämeentie 111<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
marker = L.marker([60.16345848887299, 24.934771503859576]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Bulevardi 30<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.1893749,24.9165526]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Mannerheimintie 104<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.18756921139598, 24.962467765692484]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Hämeentie 29<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.18653768695691, 24.9511447748167]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Helsinginkatu 22<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.1661456,24.9342526]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Fredrikinkatu 36<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.20840658185004, 25.14494653862917]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand (Kauppakeskus Columbus)</b><br>Tyynylaavantie 5<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.2506937,25.0122277]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Malminkaari 13-19<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.2109337,25.0795869]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Turunlinnantie 12<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.18065555552462, 24.951493357732765]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Hämeentie 4<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.16338547212673, 24.909112454355583]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand(Kauppakeskus Ruoholahti)</b><br>Itämerenkatu 21<br>ma-pe 10-20, la 10-18, su 12-16</br>"
  );
  marker = L.marker([60.23671204874004, 25.083976867159308]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Ostostie 4<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.16920974472112, 24.927543000000004]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Runeberginkatu 4 C<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.17874198693215, 24.922531333291207]).addTo(mymap).bindPopup(
	"<b>UFF Second Hand</b><br>Runeberginkatu 44<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  //

  //FIDA
  marker = L.marker([60.207501519817704, 25.145006354054928]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand (Kauppakeskus Columbus)</b><br>Vuotie 45<br>ma-pe 9-19, la 10-18, su 12-16</br>"
  );
  marker = L.marker([60.18116028239962, 24.953690411724892]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand</b><br>Hämeentie 5 A<br>ma-pe 10-19, la 10-18</br>"
  );
  marker = L.marker([60.25269147332699, 25.00800569823569]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand</b><br>Ylä-Malmintori 6<br>ma-pe 10-20, la 10-18</br>"
  );
  marker = L.marker([60.21353602605758, 25.080431055905]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand</b><br>Kastelholmantie 2<br>ma-pe 9-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.162729646495656, 24.94064115405264]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand</b><br>Iso Roobertinkatu 28<br>ma-pe 9-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.21150006443402, 25.047265184740525]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand Outlet</b><br>Levytie 2 B<br>ma 10-15, ke 8-13</br>"
  );
  marker = L.marker([60.18773702895746, 24.963387771246413]).addTo(mymap).bindPopup(
	"<b>Fida Second Hand</b><br>Hämeentie 31<br>ma-pe 10-20, la 10-18</br>"
  );
  //

  // PKS KIERRÄTYSKESKUS
  marker = L.marker([60.172599952642784, 24.94818757855779]).addTo(mymap).bindPopup(
	"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kaisaniemenkatu 7<br>ma-pe 9-21, la-su 10-18</br>"
  );
  marker = L.marker([60.198079814478085, 24.972735832526705]).addTo(mymap).bindPopup(
	"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kyläsaarenkatu 8<br>ma-pe 9-21, la-su 10-18</br>"
  );
  marker = L.marker([60.20994900175424, 25.08514096171704]).addTo(mymap).bindPopup(
	"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kauppakartanonkatu 12<br>ma-pe 9-21, la-su 10-18</br>"
  );
  marker = L.marker([60.23268324045275, 24.964615226240365]).addTo(mymap).bindPopup(
	"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kylänvanhimmantie 29<br>ma-pe 9-21, la-su 10-18</br>"
  );
  marker = L.marker([60.23694087516026, 25.085155098234818]).addTo(mymap).bindPopup(
	"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Keinulaudankuja 4<br>ma-pe 9-21, la-su 10-18</br>"
  );
  //

  // MUUT
  marker = L.marker([60.23979544472996, 24.876262312421748]).addTo(mymap).bindPopup(
	"<b>Aino Kirpputori</b><br>Sitratori 3<br>ma-pe 10-18, la 10-15, su 10-15</br>"
  );
  marker = L.marker([60.196998895853824, 24.950598754054393]).addTo(mymap).bindPopup(
	"<b>Emmaus Kirpputori</b><br>Mäkelänkatu 54<br>ti-to 11-17, pe 11-15</br>"
  );
  marker = L.marker([60.20774638562585, 24.96749330462223]).addTo(mymap).bindPopup(
	"<b>Kumpulan Helmi(Lastenkirppis)</b><br>Intiankatu 20<br>ti-to 10-17, pe 10-18:30, la-su 10-14</br>"
  );
  marker = L.marker([60.17081341601345, 24.94779485590279]).addTo(mymap).bindPopup(
	"<b>Antikvariaatti Sofia(käytettyjä kirjoja)</b><br>Vuorikatu 5<br>ma-pe 11-18, la 11-16</br>"
  );
  marker = L.marker([60.209396402549395, 25.08376954768554]).addTo(mymap).bindPopup(
	"<b>SPR Kontti</b><br>Visbynkuja 2<br>ma-pe 9-20, la 10-17, su 11-17</br>"
  );
  marker = L.marker([60.16045591843561, 24.938663740559516]).addTo(mymap).bindPopup(
	"<b>Kaunis Veera Second Hand</b><br>Albertinkatu 8<br>ti,to,pe 11-17, ke 11-19, la 11-15</br>"
  );
  marker = L.marker([60.159064692797415, 24.938787313573545]).addTo(mymap).bindPopup(
	"<b>Punavuoren Patina</b><br>Sepänkatu 11<br>ti-pe 10-19, la-su 10-16</br>"
  );
  marker = L.marker([60.18595211942725, 24.955663583584858]).addTo(mymap).bindPopup(
	"<b>Ansa Second Hand</b><br>Agricolankatu 5<br>ma-pe 12-18, la 12-16</br>"
  );
  marker = L.marker([60.187592495487365, 24.95272854056094]).addTo(mymap).bindPopup(
	"<b>Fargo Vintage</b><br>Fleminginkatu 20<br>ke 15-19, la 12-16</br>"
  );
  marker = L.marker([60.18631983144477, 24.953030269396592]).addTo(mymap).bindPopup(
	"<b>Mekkomania</b><br>Fleminginkatu 12 B<br>ti-to 12-18, pe 13-17, la 12-16</br>"
  );
  marker = L.marker([60.182892998730054, 24.925251467977546]).addTo(mymap).bindPopup(
	"<b>Fresh Garbage Records</b><br>Mannerheimintie 66<br>ma-pe 12-18, la 11-16</br>"
  );
  marker = L.marker([60.18587357502603, 24.951230129049662]).addTo(mymap).bindPopup(
	"<b>Frida Marina</b><br>Kaarlenkatu 10<br>to-pe 12-18, la-su 12-16</br>"
  );
  marker = L.marker([60.1585401876225, 24.920404376372385]).addTo(mymap).bindPopup(
	"<b>Siisti Kirppis</b><br>Suezinkatu 3<br>ti-pe 11-18, la-su 12-16</br>"
  );
  marker = L.marker([60.17696109604193, 24.91410959638201]).addTo(mymap).bindPopup(
	"<b>Helsinki Flea Market</b><br>Merikannontie 3 A<br>ma-pe 14-20, la-su 11-16</br>"
  );
  marker = L.marker([60.16359761216851, 24.941942628916472]).addTo(mymap).bindPopup(
	"<b>Flea Second Hand</b><br>Iso Roobertinkatu 11<br>ma-pe 11-19, la 12-18, su 12-16</br>"
  );
  marker = L.marker([60.17876237629467, 24.923081271861577]).addTo(mymap).bindPopup(
	"<b>Relove Second Hand ja kahvila</b><br>Sandelsinkatu 6<br>ma-pe 10-19, la 10-18, su 12-17</br>"
  );
  marker = L.marker([60.16245552636043, 24.939872314479526]).addTo(mymap).bindPopup(
	"<b>Relove Second Hand ja kahvila</b><br>Fredrikinkatu 25<br>ma-pe 10-19, la 10-18, su 12-17</br>"
  );
  marker = L.marker([60.168622866241876, 24.941370949048512]).addTo(mymap).bindPopup(
	"<b>Relove Second Hand ja kahvila(Stockmann)</b><br>Aleksanterinkatu 52<br>ma-pe 10-20, la 10-18, su 12-18</br>"
  );
  marker = L.marker([60.18655629411038, 24.9530712270679]).addTo(mymap).bindPopup(
	"<b>Gem Vintage Second Hand</b><br>Fleminginkatu 14 B 1<br>ma-pe 13-19, la 13-17</br>"
  );
*/

    var data = [
  //UFF
  {"loc":[60.20266957854647, 24.96800381015687], "title":"UFF Second Hand (Kauppakeskus Arabia), Hämeentie 111", "summary":"<b>UFF Second Hand (Kauppakeskus Arabia)</b><br>Hämeentie 111<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.16345848887299, 24.934771503859576], "title":"UFF Second Hand, Bulevardi 30", "summary":"<b>UFF Second Hand</b><br>Bulevardi 30<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.1893749, 24.9165526], "title":"UFF Second Hand, Mannerheimintie 104", "summary":"<b>UFF Second Hand</b><br>Mannerheimintie 104<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.18756921139598, 24.962467765692484], "title":"UFF Second Hand, Hämeentie 29", "summary":"<b>UFF Second Hand</b><br>Hämeentie 29<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.18653768695691, 24.9511447748167], "title":"UFF Second Hand, Helsinginkatu 22", "summary":"<b>UFF Second Hand</b><br>Helsinginkatu 22<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.1661456, 24.9342526], "title":"UFF Second Hand, Fredrikinkatu 36", "summary":"<b>UFF Second Hand</b><br>Fredrikinkatu 36<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.20840658185004, 25.14494653862917], "title":"UFF Second Hand (Kauppakeskus Columbus), Tyynylaavantie 5", "summary":"<b>UFF Second Hand (Kauppakeskus Columbus)</b><br>Tyynylaavantie 5<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.2506937, 25.0122277], "title":"UFF Second Hand, Malminkaari 13-19", "summary":"<b>UFF Second Hand</b><br>Malminkaari 13-19<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.2109337, 25.0795869], "title":"UFF Second Hand, Turunlinnantie 12", "summary":"<b>UFF Second Hand</b><br>Turunlinnantie 12<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.18065555552462, 24.951493357732765], "title":"UFF Second Hand, Hämeentie 4", "summary":"<b>UFF Second Hand</b><br>Hämeentie 4<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.16338547212673, 24.909112454355583], "title":"UFF Second Hand (Kauppakeskus Ruoholahti), Itämerenkatu 21", "summary":"<b>UFF Second Hand(Kauppakeskus Ruoholahti)</b><br>Itämerenkatu 21<br>ma-pe 10-20, la 10-18, su 12-16</br>"},
  {"loc":[60.23671204874004, 25.083976867159308], "title":"UFF Second Hand, Ostostie 4", "summary":"<b>UFF Second Hand</b><br>Ostostie 4<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.16920974472112, 24.927543000000004], "title":"UFF Second Hand, Runeberginkatu 4 C", "summary":"<b>UFF Second Hand</b><br>Runeberginkatu 4 C<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.17874198693215, 24.922531333291207], "title":"UFF Second Hand, Runeberginkatu 44", "summary":"<b>UFF Second Hand</b><br>Runeberginkatu 44<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  //FIDA
  {"loc":[60.207501519817704, 25.145006354054928], "title":"Fida Second Hand (Kauppakeskus Columbus), Vuotie 45", "summary":"<b>Fida Second Hand (Kauppakeskus Columbus)</b><br>Vuotie 45<br>ma-pe 9-19, la 10-18, su 12-16</br>"},
  {"loc":[60.18116028239962, 24.953690411724892], "title":"Fida Second Hand, Hämeentie 5 A", "summary":"<b>Fida Second Hand</b><br>Hämeentie 5 A<br>ma-pe 10-19, la 10-18</br>"},
  {"loc":[60.25269147332699, 25.00800569823569], "title":"Fida Second Hand, Ylä-Malmintori 6", "summary":"<b>Fida Second Hand</b><br>Ylä-Malmintori 6<br>ma-pe 10-20, la 10-18</br>"},
  {"loc":[60.21353602605758, 25.080431055905], "title":"Fida Second Hand, Kastelholmantie 2", "summary":"<b>Fida Second Hand</b><br>Kastelholmantie 2<br>ma-pe 9-20, la 10-18, su 12-18</br>"},
  {"loc":[60.162729646495656, 24.94064115405264], "title":"Fida Second Hand, Iso Roobertinkatu 28", "summary":"<b>Fida Second Hand</b><br>Iso Roobertinkatu 28<br>ma-pe 9-20, la 10-18, su 12-18</br>"},
  {"loc":[60.21150006443402, 25.047265184740525], "title":"Fida Second Hand Outlet, Levytie 2 B", "summary":"<b>Fida Second Hand Outlet</b><br>Levytie 2 B<br>ma 10-15, ke 8-13</br>"},
  {"loc":[60.18773702895746, 24.963387771246413], "title":"Fida Second Hand, Hämeentie 31", "summary":"<b>Fida Second Hand</b><br>Hämeentie 31<br>ma-pe 10-20, la 10-18</br>"},
  //PKS KIERRÄTYSKESKUS
  {"loc":[60.172599952642784, 24.94818757855779], "title":"Pääkaupunkiseudun Kierrätyskeskus, Kaisaniemenkatu 7", "summary":"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kaisaniemenkatu 7<br>ma-pe 9-21, la-su 10-18</br>"},
  {"loc":[60.198079814478085, 24.972735832526705], "title":"Pääkaupunkiseudun Kierrätyskeskus, Kyläsaarenkatu 8", "summary":"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kyläsaarenkatu 8<br>ma-pe 9-21, la-su 10-18</br>"},
  {"loc":[60.20994900175424, 25.08514096171704], "title":"Pääkaupunkiseudun Kierrätyskeskus, Kauppakartanonkatu 12", "summary":"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kauppakartanonkatu 12<br>ma-pe 9-21, la-su 10-18</br>"},
  {"loc":[60.23268324045275, 24.964615226240365], "title":"Pääkaupunkiseudun Kierrätyskeskus, Kylänvanhimmantie 29", "summary":"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Kylänvanhimmantie 29<br>ma-pe 9-21, la-su 10-18</br>"},
  {"loc":[60.23694087516026, 25.085155098234818], "title":"Pääkaupunkiseudun Kierrätyskeskus, Keinulaudankuja 4", "summary":"<b>Pääkaupunkiseudun Kierrätyskeskus</b><br>Keinulaudankuja 4<br>ma-pe 9-21, la-su 10-18</br>"},
  //MUUT
  {"loc":[60.23979544472996, 24.876262312421748], "title":"Aino Kirpputori, Sitratori 3", "summary":"<b>Aino Kirpputori</b><br>Sitratori 3<br>ma-pe 10-18, la 10-15, su 10-15</br>"},
  {"loc":[60.196998895853824, 24.950598754054393], "title":"Emmaus Kirpputori, Mäkelänkatu 54", "summary":"<b>Emmaus Kirpputori</b><br>Mäkelänkatu 54<br>ti-to 11-17, pe 11-15</br>"},
  {"loc":[60.20774638562585, 24.96749330462223], "title":"Kumpulan Helmi Lastenkirppis, Intiankatu 20", "summary":"<b>Kumpulan Helmi Lastenkirppis</b><br>Intiankatu 20<br>ti-to 10-17, pe 10-18:30, la-su 10-14</br>"},
  {"loc":[60.17081341601345, 24.94779485590279], "title":"Antikvariaatti Sofia, Vuorikatu 5", "summary":"<b>Antikvariaatti Sofia (käytettyjä kirjoja)</b><br>Vuorikatu 5<br>ma-pe 11-18, la 11-16</br>"},
  {"loc":[60.209396402549395, 25.08376954768554], "title":"SPR Kontti, Visbynkuja 2", "summary":"<b>SPR Kontti</b><br>Visbynkuja 2<br>ma-pe 9-20, la 10-17, su 11-17</br>"},
  {"loc":[60.16045591843561, 24.938663740559516], "title":"Kaunis Veera Second Hand, Albertinkatu 8", "summary":"<b>Kaunis Veera Second Hand</b><br>Albertinkatu 8<br>ti,to,pe 11-17, ke 11-19, la 11-15</br>"},
  {"loc":[60.159064692797415, 24.938787313573545], "title":"Punavuoren Patina, Sepänkatu 11", "summary":"<b>Punavuoren Patina</b><br>Sepänkatu 11<br>ti-pe 10-19, la-su 10-16</br>"},
  {"loc":[60.18595211942725, 24.955663583584858], "title":"Ansa Second Hand, Agricolankatu 5", "summary":"<b>Ansa Second Hand</b><br>Agricolankatu 5<br>ma-pe 12-18, la 12-16</br>"},
  {"loc":[60.187592495487365, 24.95272854056094], "title":"Fargo Vintage, Fleminginkatu 20", "summary":"<b>Fargo Vintage</b><br>Fleminginkatu 20<br>ke 15-19, la 12-16</br>"},
  {"loc":[60.18631983144477, 24.953030269396592], "title":"Mekkomania, Fleminginkatu 12 B", "summary":"<b>Mekkomania</b><br>Fleminginkatu 12 B<br>ti-to 12-18, pe 13-17, la 12-16</br>"},
  {"loc":[60.182892998730054, 24.925251467977546], "title":"Fresh Garbage Records, Mannerheimintie 66", "summary":"<b>Fresh Garbage Records</b><br>Mannerheimintie 66<br>ma-pe 12-18, la 11-16</br>"},
  {"loc":[60.18587357502603, 24.951230129049662], "title":"Frida Marina, Kaarlenkatu 10", "summary":"<b>Frida Marina</b><br>Kaarlenkatu 10<br>to-pe 12-18, la-su 12-16</br>"},
  {"loc":[60.1585401876225, 24.920404376372385], "title":"Siisti Kirppis, Suezinkatu 3", "summary":"<b>Siisti Kirppis</b><br>Suezinkatu 3<br>ti-pe 11-18, la-su 12-16</br>"},
  {"loc":[60.17696109604193, 24.91410959638201], "title":"Helsinki Flea Market, Merikannontie 3 A", "summary":"<b>Helsinki Flea Market</b><br>Merikannontie 3 A<br>ma-pe 14-20, la-su 11-16</br>"},
  {"loc":[60.16359761216851, 24.941942628916472], "title":"Flea Second Hand, Iso Roobertinkatu 11", "summary":"<b>Flea Second Hand</b><br>Iso Roobertinkatu 11<br>ma-pe 11-19, la 12-18, su 12-16</br>"},
  {"loc":[60.17876237629467, 24.923081271861577], "title":"Relove Second Hand ja kahvila, Sandelsinkatu 6", "summary":"<b>Relove Second Hand ja kahvila</b><br>Sandelsinkatu 6<br>ma-pe 10-19, la 10-18, su 12-17</br>"},
  {"loc":[60.16245552636043, 24.939872314479526], "title":"Relove Second Hand ja kahvila, Fredrikinkatu 25", "summary":"<b>Relove Second Hand ja kahvila</b><br>Fredrikinkatu 25<br>ma-pe 10-19, la 10-18, su 12-17</br>"},
  {"loc":[60.168622866241876, 24.941370949048512], "title":"Relove Second Hand ja kahvila (Stockmann), Aleksanterinkatu 52", "summary":"<b>Relove Second Hand ja kahvila (Stockmann)</b><br>Aleksanterinkatu 52<br>ma-pe 10-20, la 10-18, su 12-18</br>"},
  {"loc":[60.18655629411038, 24.9530712270679], "title":"Gem Vintage Second Hand, Fleminginkatu 14 B 1", "summary":"<b>Gem Vintage Second Hand</b><br>Fleminginkatu 14 B 1<br>ma-pe 13-19, la 13-17</br>"}
];

var mymap = new L.Map("map", {zoom: 12, center: new L.latLng(data[0].loc)});
mymap.zoomControl.setPosition('topright'); //Siirtää zoom controllit kartan oikeaan yläkulmaan 

mymap.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')); //Lisätään kartan pohja layer

var markersLayer = new L.LayerGroup(); //Layer sisältää haetut elementit
mymap.addLayer(markersLayer); //Lisätään markersLayer kartalle

//Luodaan uusi haku control ja annetaan sille asetuksia
var controlSearch = new L.Control.Search({
    layer: markersLayer, 
    initial: false, //antaa hakuun sopivia tuloksia kirjaimen esiintyessä missä tahansa kohtaa
    position:'topleft', //haku sijoitettu vasempaan yläkulmaan, default oikealla
    collapsed: true, //hakukenttä sulkeutuu haun suorittamisen jälkeen
    autoCollapse: true, //hakutulokset ja error message sulkeutuvat automaattisesti
    autoCollapseTime: 10000, //aika ennen hakutulosten/error messagen sulkeutumista
    textPlaceholder: 'Hae osoitteella tai nimellä...', //hakukentän placeholder
    tipAutoSubmit: true,
    textErr: 'Antamallasi haulla ei löytynyt yhtään kirpparia :(', //error message
    zoom: 16, //zoomlevel haun toteuduttua, esim. zoomaa lähemmäs haun löytämää lokaatiota
    marker: {						
			icon: false, //kustomoitu L.Marker, poistettu
            circle: {	//ympyröi valitun lokaation, poistettu
				stroke: false,
				fill: false
			}
    }
    
}); 

mymap.addControl( controlSearch ); //Lisää hakukentän kartalle

//Luodaan markerit ja popupit kirppareille, joiden tiedot haetaan markersLayerista joka haki ne data -muuttujasta
for(i in data) {
  var title = data[i].title, //kirpparin nimi löydetty datasta (title)
    summary = data[i].summary, //popupin tiedot löydetty datasta (summary)
      loc = data[i].loc, //kirpparin lokaatio löydetty datasta (loc)
      marker = new L.Marker(new L.latLng(loc), {title: title});
  marker.bindPopup(summary); //lisää popupin markeriin kirpparin tiedoilla (title)
  markersLayer.addLayer(marker); //lisää layerin joka sisältää markerit
}

require(["leaflet", "leafletSearch"],function(L, LeafletSearch) {

//... initialize leaflet map and dataLayer ...

mymap.addControl( new LeafletSearch({
    layer: dataLayer
}) ); 
}); 


  