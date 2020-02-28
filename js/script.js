            function showMenu() {
            var menuDropdown = document.getElementById("menumobile");
            if (menuDropdown.style.display === "none") {
              menuDropdown.style.display = "block";
            } else {
              menuDropdown.style.display = "none";
            }
          }
/////////////////////////////////////////////////////////////////:
            var slideIndex = 1;
                showDivs(slideIndex);

            function plusDivs(n) {
                showDivs(slideIndex += n);
            }
            function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
}
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//Partie d'Age
        //création de variables
      
        //création de la fonction
        function age(){
          var anneeNaissance;
          var age;
          var phrase;
          var annee = new Date().getFullYear()
          var CarSelected;
          var nom;
          var prd;
          var NBRPersonne;
            //Attribution des valeurs a (donnée par l'utilisateur) et b (calculée par la fonction)
            anneeNaissance = parseInt(document.getElementById("YY").value);
            age = annee-anneeNaissance;
            CarSelected = document.getElementById("mySelect").value;
           nom = document.getElementById("nom").value;
           prd=document.getElementById("PeroideL").value;
           NBRPersonne=document.getElementById("NbrL").value;
            //condition pour l'attribution de la valeur c selon l'age de la personne
            if(age<18){
              alert("Vous êtes mineur.");
            }
          else{
  
            
             
      document.getElementById("form").style.visibility = "hidden";
      document.getElementById("demo").innerHTML= "Le modèle de voiture sélectionné est: "+CarSelected+"<br/>"+"Votre Nom est: " +nom+"<br/>"+"Votre Age est: "+age+"<br/>"+"Peroide de location est: "+prd+"<br/>"+"Nombre de personne est: "+NBRPersonne+"<br/><br/>";
       // Create anchor element. 
       var a = document.createElement('a');  
                    
                    // Create the text node for anchor element. 
                    var link = document.createTextNode("Valider"); 
                      
                    // Append the text node to anchor element. 
                    a.appendChild(link);  
                   
                      
                    // Set the href property. 
                    a.href = "Reservation.html";  
                      
                    // Append the anchor element to the body. 
                    document.body.appendChild(a);  
             
              
          }
  
          }