// ==UserScript==
// @name        makerist auto downloader
// @namespace   Violentmonkey Scripts
// @match       https://www.makerist.de/my/meine-anleitungen*
// @grant       none
// @version     1.0
// @author      Apfelkuchen
// @description 24/01/2025, 12:33:12
// @downloadUrl https://github.com/apfelkuchen123/makerist/raw/refs/heads/main/makerist-auto-download.user.js
// ==/UserScript==

function downloadPdfs(){
  for(let child of document.getElementsByClassName('products-wrapper')[0].children){ let url = child.lastChild.firstChild.href; let name = url.split('/')[5];
  window.open('https://www.makerist.de/pattern_pdfs/'+name+'/download', '_blank');}
}

function afterSeconds(waitFor, callBack){
  let secondsCount = 15;

  let dlInterval = setInterval(function(){
    if(secondsCount>0){
      document.getElementById('downloadPageButton').innerHTML = 'Downloading ('+secondsCount+')';
      secondsCount -= 1;
    }else{
      document.getElementById('downloadPageButton').innerHTML = 'Download Page';
      clearInterval(dlInterval);
      downloadPdfs();
    }
  }, 1000)
}

function downloadAllFromPage(){
  for(let child of document.getElementsByClassName('products-wrapper')[0].children){ let url = child.lastChild.firstChild.href; let name = url.split('/')[5];
  var xhr = new XMLHttpRequest(); xhr.open('GET', 'https://www.makerist.de/pattern_pdfs/'+name+'/prepare_pdf', true); xhr.onloadend = function() { console.log(xhr.status+': '+xhr.responseText)}; xhr.send();};

  for(let child of document.getElementsByClassName('products-wrapper')[0].children){ let url = child.lastChild.firstChild.href; let name = url.split('/')[5];
  window.open('https://www.makerist.de/pattern_zips/'+name+'/download', '_blank');};

  afterSeconds(14, downloadPdfs);
}

downloadAllFromPage();
