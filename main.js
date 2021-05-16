let emoji = document.querySelector('.emoji');
let result = document.querySelector('.result');

function igra() {
   let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        emoji.innerHTML = "&#9995;&#127995;";
        result.innerHTML = "Nerešeno je, protivnik je izabrao papir!";
    } else if (random == 1) {
        emoji.innerHTML = "&#9994;&#127995;";
        result.innerHTML = "Čestitam, pobedio si! protivnik je izabrao kamen!";
    } else {
        emoji.innerHTML = "&#9996;&#127995;";
        result.innerHTML = "Nažalost si izgubio, protivnik je izabrao makaze!";
    }
    }

    function igra2() {
        let random = Math.floor(Math.random() * 3);
         if (random == 0) {
             emoji.innerHTML = "&#9995;&#127995;";
             result.innerHTML = "Nažalost si izgubio, protivnik je izabrao papir!";
         } else if (random == 1) {
             emoji.innerHTML = "&#9994;&#127995;";
             result.innerHTML = "Nerešeno je, protivnik je izabrao kamen!";
         } else {
             emoji.innerHTML = "&#9996;&#127995;";
             result.innerHTML = "Čestitam, pobedio si! protivnik je izabrao makaze!";
         }
         }

         function igra3() {
            let random = Math.floor(Math.random() * 3);
             if (random == 0) {
                 emoji.innerHTML = "&#9995;&#127995;";
                 result.innerHTML = "Čestitam, pobedio si! protivnik je izabrao papir!";
             } else if (random == 1) {
                 emoji.innerHTML = "&#9994;&#127995;";
                 result.innerHTML = "Nažalost si izgubio, protivnik je izabrao kamen!";
             } else {
                 emoji.innerHTML = "&#9996;&#127995;";
                 result.innerHTML = "Nerešeno je, protivnik je izabrao makaze!";
             }
             }