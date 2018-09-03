$('.burger-button').click(function() {

    $('.nav-left').css('opacity', '1')

    $('.nav-left').css('left', '0')

})



$('#close').click(function() {

    $('.nav-left').css('opacity', '0')

    $('.nav-left').css('left', '-300px')})

    var pointer=0;
    
function yosra()
{

var  words =["are", "you", "feeling", "fat","?", "Have", "you", "been", "bullied", "by", "your", "entourage", "because" ,"of" ,"your", "weight", "and", "you've", "felt" ,"uncomfortable" ,"?",
    "Have", "you", "been", "researching","for", "an", "intresting", "program", "but", "you", "haven't", "found", "any", "of", "it","?",
    "Well,", "we", "thought", "about" ,"you","," ,"and", "here", "we", "represent" ,"our" ,"most", "easy", "and", "effectif" ,"program" ,"that", "will", "change" ,"your" ,"life" ,"!"];
    
    document.getElementById("yosra").innerHTML=document.getElementById("yosra").innerHTML+" "+words[pointer];
    if(words[pointer]=="?") document.getElementById("yosra").innerHTML+="<br>";

    if(pointer<words.length)
    {
        pointer++;
    }

    else{pointer=0; document.getElementById("yosra").innerHTML="";}
    

    setTimeout(yosra,500);

}

  window.onload = yosra();