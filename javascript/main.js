const allLang = ["en","ru"];

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#en";
        location.reload();
    }

    for (let key in langArr){
        document.querySelector('.lng-'+ key).innerHTML = langArr[key][hash]
    }
}

changeLanguage();