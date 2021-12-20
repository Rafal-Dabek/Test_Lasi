
function done(){

  var typ_1 = 0;
  var typ_2 = 0;
  var typ_3 = 0;
  var typ_4 = 0;
 

  var ele = document.getElementsByTagName('input');

        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                  
                }
                    

            }
        


          }


  var p=Array.from(d);
 

  for(var i=1; i<13; i++)
  {
    if(document.getElementById("1_"+i.toString()).checked == true)
    {
  
      typ_1 += 1;
    
    }
  }

  for(var i=1; i<13; i++)
  {
    if(document.getElementById("2_"+i.toString()).checked == true)
    {
  
      typ_2 += 1;
    
    }
  }

  for(var i=1; i<13; i++)
  {
    if(document.getElementById("3_"+i.toString()).checked == true)
    {
  
      typ_3 += 1;
    
    }
  }

  for(var i=1; i<13; i++)
  {
    if(document.getElementById("4_"+i.toString()).checked == true)
    {
  
      typ_4 += 1;
    
    }
  }
  



if((p.length)!=12)
{

    alert("Nie wszytkie odpowiedzi są zaznaczone!")
          
}
else
{

 if(!isNaN(document.getElementById("disp").innerHTML))
   {
        document.getElementById("disp").innerHTML +=
        "Typ 1: " + typ_1 + "<br>" +
        "Typ 2: " + typ_2 + "<br>" +
        "Typ 3: " + typ_3 + "<br>" +
        "Typ 4: " + typ_4 + "<br>";
     
        document.getElementById("opisWyniku").style.visibility = "visible";
   }

  

}

}



