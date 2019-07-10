
// Gegevens
var meld = 0; //telt klacht melding
var naam = prompt("Wat is uw naam?")  // Vraagt naam van de klant 
while (naam ==="" )                    // herhaald textvak tot dat naam ingevuld is
{

   naam = prompt('Sorry Wat is uw naam?');
  
}
document.write("<br><h1> Klantnaam: "+ naam+"</h1>");

var datum = prompt("Wat is de datum?") // Vraagt datum aan de klant
while (datum ==="")                    // herhaald textvak tot dat datum ingevuld is
{
   datum = prompt("Sorry wat is de datum?");
}
document.write("<br>Datum: " + datum);

var modem = prompt("Wat is het merk en type van uw modem?");   // Vraagt merk-type modem 
document.write("<br>Modem van klant: " + modem);

// Internet 

document.write("<fieldset><legend>Internet</legend>");      // Maakt een kolom
var klacht = confirm("Heeft u een klacht over ons product internet?");   // klacht over product internet
if(klacht == true)      // als het waar is
{ 
   {
   document.write("Klant meld probleem met het product internet.");
   
   }
  
var browse = confirm("Kunt u browsen naar www.nu.nl ?");    // Vraagt om browsen
  if(browse == true)    // als het waar is
  {
     document.write("<br> Browsen naar www.nu.nl lukt.");
  }
  else      // anders niet waar
  {
     document.write("<br> Probleem: Browsen naar www.nu.nl lukt niet");
     meld += 1;
  }
var snelheid = confirm("Reageert de pagina snel na het indrukken van f5?");    // vraagt internet snelheid
  if(snelheid == true)     // als het waar is
  {
     document.write("<br>Uw pagina's laden snel.");
  }
  else     // anders niet waar  
  {
      document.write("<br> Probleem: De pagina laadt niet snel");
      meld += 1;
  } 
   var resultaat = "";           // Overzicht over product Internet
   if(browse && snelheid == true)
   {
      document.write("<br>U kunt browsen en uw pagina's laden snel. U heeft geen internet probleem.");
      document.write("<li>Browsen naar www.nu.nl lukt</li>");
      document.write("<li>De pagina laadt snel</li>");
   }
   else if(!browse && !snelheid)
   {
      document.write("<br> U meldt problemen met: ");
      var hyper = "Internet Laden";
      document.write("<li>"+ hyper.link("internet-laden.html")+"</li>");
      var hyper2 = "Snelheid van laden";
      document.write("<li>"+ hyper2.link("laden.html")+"</li>");
      
   }
   else if(browse && !snelheid)
   {
      document.write("<br>U kunt browsen. U heeft 1 internet probleem.");
      document.write("<li>Browsen naar www.nu.nl lukt</li>");
      document.write("<br> U meldt problemen met: ");
      var hyper2 = "Snelheid van laden";
      document.write("<li>"+ hyper2.link("laden.html")+"</li>");
   }
}else {
   document.write("Klant meld geen probleem met het internet");
  }
document.write("</fieldset>");
// Einde overzicht van product Internet

// Internet en Bellen 

document.write("<fieldset><legend>Bellen</legend>")
var klacht2 = confirm("Heeft u een klacht over ons product het Internet en Bellen?");          // klacht over internet en bellen
if(klacht2 == true)         // als het waar is
{{
   document.write("Klant meld probleem met het product Internet en Bellen.");
   
}
var kiestoon = confirm("Hoort u een kiestoon?");          // vraagt om kiestoon
if(kiestoon == true)     // als het waar is
{
   document.write("<br>Hoort een kiestoon");
}
else      // anders niet waar
{
   document.write("<br>Probleem: Hoort geen kiestoon");
   meld += 1;
}
var bellen = confirm("Kunt u uzelf bellen op bijvoorbeeld een mobiel nummer bellen");       // vraagt om vast naar mobiel te bellen
if(bellen == true)       // als het waar is
{
   document.write("<br>Kan van vast naar mobiel bellen");
}
else         // anders niet waar
{
   document.write("<br>Probleem: Kan niet van vast naar mobiel bellen");
   meld += 1;
}
var bellen2 = confirm("Kunt u met uw mobiel het nummer bellen waar u een klacht over heeft");       // vraagt om mobiel naar vast te bellen
if(bellen2 == true)          // als het waar is
{
   document.write("<br>Kan van mobiel naar vast bellen");
}
else        // anders niet waar
{
   document.write("<br>Probleem: Kan niet van mobiel naar vast bellen");
   meld += 1;
 } 
 var resultaat2 = "";      // Overzicht over product bellen
if(kiestoon && bellen && bellen2)
{
   document.write("<br> U heeft een kiestoon, u kunt bellen en gebeld worden. U heeft geen problemen.");
   document.write("<li>Hoort een kiestoon</li>");
   document.write("<li>Kan van vast naar mobiel bellen</li>");
   document.write("<li>Kan van mobiel naar vast bellen</li>");
}
else if(kiestoon && bellen && !bellen2){
document.write("<br> U heeft een kiestoon enu kunt bellen . U heeft 1 probleem");
   document.write("<li>Hoort een kiestoon</li>");
   document.write("<li>Kan van vast naar mobiel bellen</li>");
   document.write("<br> U meldt probleem met: ");
   var hyper5 = "Gebeld worden";
   document.write("<li>"+ hyper5.link("gebeld-worden.html")+"</li>");
}
else if(kiestoon && !bellen && !bellen2){
      document.write("<br> U heeft een kiestoon en U heeft 2 problemen.");
      document.write("<li>Hoort een kiestoon</li>");
      document.write("<br> U meldt probleem met: ");
      var hyper4 = "Uit bellen";
         document.write("<li>" + hyper4.link("uit-bellen.html")+"</li>");
      var hyper5 = "Gebeld worden";
         document.write("<li>"+ hyper5.link("gebeld-worden.html")+"</li>");
}
else if(!kiestoon && !bellen && !bellen2)
{
   document.write("<br> U meldt probleem met: ");
   var hyper3 = "Kiestoon";
   document.write("<li>"+ hyper3.link("geen-kiestoon.html")+"</li>");
   var hyper4 = "Uit bellen";
   document.write("<li>" + hyper4.link("uit-bellen.html")+"</li>");
   var hyper5 = "Gebeld worden";
   document.write("<li>"+ hyper5.link("gebeld-worden.html")+"</li>");
}
else if( bellen && bellen2 && !kiestoon )
{
   document.write("<br>U kunt bellen en gebeld worden. U heeft 1 probleem.");
   document.write("<li>Kan van vast naar mobiel bellen</li>");
   document.write("<li>Kan van mobiel naar vast bellen</li>");
   document.write("<br> U meldt probleem met: ");
   var hyper3 = "Kiestoon";
   document.write("<li>"+ hyper3.link("geen-kiestoon.html")+"</li>");

}
else if(!kiestoon && !bellen && bellen2)
{
   document.write("<br>U kunt gebeld worden. U heeft 2 problemen.");
   document.write("<br> U meldt probleem met: ")
   var hyper3 = "Kiestoon";
   document.write("<li>"+ hyper3.link("geen-kiestoon.html")+"</li>");
   var hyper4 = "Uit bellen";
   document.write("<li>" + hyper4.link("uit-bellen.html")+"</li>");
}
}else
 {
   document.write("Klant meld geen probleem met het product internet en Bellen");
 }
document.write("</fieldset>");
//Einde overzicht van product Bellen

// Internet , Bellen en Televisie

document.write("<fieldset><legend>Televisie</legend>")

var klacht3 = confirm("Heeft u een klacht over ons product Internet, Bellen en Televisie?");      // klacht over internet, bellen en televisie
if(klacht3 == true)      // als het waar is
{{
   document.write("Klant meld geen probleem met het product Internet, Bellen en Televisie"); 
  
}
var tv = prompt("Aantal televisie toestellen?");         // vraagt aantal tv's
document.write("<br> Klant heeft " + tv + " televisietoestellen");

var splitter = confirm("is uw splitter goed aangesloten?");     // vraagt om splitter
if( splitter == true)      // als het waar is
{
   document.write("<br>Splitter is goed aangesloten")
}
else     // anders niet waar
{
   document.write("<br>Probleem: Splitter is niet goed aangesloten")
   meld += 1;
}
var settopbox = confirm("is uw settopbox goed aangesloten?") //vraagt om settopbox
if(settopbox == true)      // als het waar is
{
   document.write("<br>settopbox is goed aangesloten")
}
else      // anders niet waar
{
   document.write("<br>Probleem: settopbox is niet goed aangesloten")
   meld += 1;
}

var zenders = confirm("Worden de zender gevonden?");      // vraagt om zenders
if(zenders == true)      // als het waar is
{
   document.write("<br> Zenders worden gevonden");
}
else        // anders niet waar
{
   document.write("<br>Probleem: Zenders worden niet gevonden");
   meld += 1;
 }

var resultaat3 = "";          // Overzicht over product Televisie
if(splitter && settopbox && zenders)
{
   document.write("<br> U heeft uw splitter en settopbox goed aangesloten en de zenders worden gevonden. U heeft geen Internet, Bellen en Televisie problemen.");
   document.write("<li> Klant heeft " + tv + " televisietoestellen</li>");
   document.write("<li> Splitter is goed aangesloten</li>");
   document.write("<li> Settopbox is goed aangesloten</li>");
   document.write("<li> Zenders worden gevonden</li>");
}
else if(!splitter && !settopbox && !zenders)
{
   document.write("<br> U meldt problemen met: ");
   var hyper6 = "Splitter niet aangesloten";
   document.write("<li>" + hyper6.link("splitter-aangesloten.html")+"</li>");
   var hyper7 = "Settopbox niet aangesloten";
   document.write("<li>" + hyper7.link("settopbox-aangesloten.html")+"</li>");
   var hyper8 = "Zenders niet gevonden";
   document.write("<li>" + hyper8.link("zender-niet-gevonden.html")+"</li>");
}
else if(splitter && settopbox && !zenders)
{
   document.write("<br> U heeft uw splitter en settopbox goed aangesloten. U heeft 1 probleem.")
   document.write("<li> Klant heeft " + tv + " televisietoestellen</li>");
   document.write("<li> Splitter is goed aangesloten</li>");
   document.write("<li> Settopbox is goed aangesloten</li>");
   document.write("<br> U meldt problemen met: ");
   var hyper8 = "Zenders niet gevonden";
   document.write("<li>" + hyper8.link("zender-niet-gevonden.html")+"</li>");
}
else if(splitter && !settopbox && !zenders)
{
   document.write("<br> U heeft uw splitter goed aangesloten. U heeft 2 problemen.");
   document.write("<li> Klant heeft " + tv + " televisietoestellen</li>");
   document.write("<li> Splitter is goed aangesloten</li>");
   document.write("<br> U meldt problemen met: ");
   var hyper7 = "Settopbox niet aangesloten";
   document.write("<li>" + hyper7.link("settopbox-aangesloten.html")+"</li>");
   var hyper8 = "Zenders niet gevonden";
   document.write("<li>" + hyper8.link("zender-niet-gevonden.html")+"</li>");
}
else if(settopbox && !splitter && !zenders)
{
   document.write("<br> U heeft uw settopbox goed aangesloten. U heeft 2 problemen.");
   document.write("<br> U meldt problemen met: ");
   var hyper6 = "Splitter niet aangesloten";
   document.write("<li>" + hyper6.link("splitter-aangesloten.html")+"</li>");
   var hyper8 = "Zenders niet gevonden";
   document.write("<li>" + hyper8.link("zender-niet-gevonden.html")+"</li>");
}
}else
 {
   document.write("Klant meld geen probleem met het product Internet,Bellen en Televisie");
 }
document.write("</fieldset>");
// Einde overzicht product Televisie

document.write("<br> U heeft " + meld + " klachten gemeld op " + datum);   // totaale  klacht meldingen 
var overzicht = "";
if(meld > 0)
{
   document.write("<br> Uw modem " + modem + " werkt niet.");
}
else(meld == 0) 
{
   document.write("<br> Uw modem " + modem + " werkt Prima.");
}