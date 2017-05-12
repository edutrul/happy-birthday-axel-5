/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var $audioApplaud, $audioBirthday;
    
    $audioApplaud = document.createElement('audio');
    $audioApplaud.setAttribute('src', 'audio/applaudissements.mp3');
    
    $audioBirthday = document.createElement('audio');
    $audioBirthday.setAttribute('src', 'audio/Happy-Birthday.mp3');
    
    $("h1:contains('Today is a special day !!!')").html("Happy Birthday to you !");
    var nombre = getUrlVars()["nombre"] ? getUrlVars()["nombre"] : 'Amigo(A)';
    $('.invited').html('<b class="highlighted">' + nombre.toUpperCase() + '</b>' + ' te invito a mi cumple! NO FALTES! este Sabado 6:30pm al frente de la Universidad Autonoma del Peru');
    $('.item').hide();
    $('.blow').show();
    $('.drawing').show();
    $('#wind').show();
    $audioApplaud.play();
    
    $('#wind').on('click', function () {
        $('.flame').hide();
        $audioBirthday.play();
        $(".blow:contains('Sopla la vela ! ')").html("Enciende la vela!");
        $(this).hide();
        $('#fire').show();
    });
	 
    $('#fire').on('click', function () {
        $audioBirthday.pause();
        $('.flame').show();
        $audioBirthday.pause();
        $(".blow:contains('Light your candle !')").html("Sopla la vela!");
        $(this).hide();
        $('#wind').show();
    });
});


// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
