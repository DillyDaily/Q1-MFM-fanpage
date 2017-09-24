$(document).ready(function () {

    $.get('http://localhost:3000/', function (data) {
        console.log(data);
       
      for (let i=0; i<8; i++){
          if (data.results[i].murderer_photo !== ""){    
            let newCard = document.getElementsByClassName('card-image')[i];
            let murderPhoto = document.createElement('IMG');
            $(murderPhoto).addClass('activator');
            murderPhoto.src = data.results[i].murderer_photo;
            $(newCard).append(murderPhoto)[i];
          }

          let checkbox = document.getElementsByClassName('check');
          $(checkbox).change(function(e){
            e.preventDefault();
          
            let creepInfo = document.getElementsByClassName('card-reveal')[i];
            if ($(this).attr("id") == "victims"){
              let victimInfo = document.createElement('p');
              $(victimInfo).text('Known Victim(s): ' + data.results[i].deceased_victims);
              $(creepInfo).append(victimInfo)[i];
            }
            if ($(this).attr("id") == "murderer"){
              let creepName = document.getElementsByClassName('name')[i]; 
              $(creepName).text(data.results[i].murderer);
            }
            if ($(this).attr("id") == "convictions"){
              let fillInfo = document.createElement('p');
              $(fillInfo).text('Conviction(s): ' + data.results[i].convictions);
              $(creepInfo).append(fillInfo)[i];
            }
            if ($(this).attr("id") == "weapon"){
              let weaponInfo = document.createElement('p');
              $(weaponInfo).text('Weapon(s): ' + data.results[i].weapon);
              $(creepInfo).append(weaponInfo)[i];
            }
            if ($(this).attr("id") == "alias"){
              let alias = document.createElement('p');
              $(alias).text('Alias: ' + data.results[i].alias);
              $(creepInfo).append(alias)[i];
            }
            if ($(this).attr("id") == "podcastNum"){
              let podcast = document.createElement('p');
              $(podcast).text('MFM Podcast: #' + data.results[i].podcast_number);
              $(creepInfo).append(podcast)[i];
            }
            if ($(this).attr("id") == "survivors"){
              let survivorInfo = document.createElement('p');
              $(survivorInfo).text('Survivor(s): '+ data.results[i].survivors);
              $(creepInfo).append(survivorInfo)[i];
            }
            if ($(this).attr("id") == "sentence"){
              let sentenceInfo = document.createElement('p');
              $(sentenceInfo).text('Sentence: ' + data.results[i].sentence);
              $(creepInfo).append(sentenceInfo)[i];
              }
            })
          
          let btnContain = document.getElementsByClassName('card-action')[i];
          let correctBtn = document.createElement('button');
          $(correctBtn).addClass('nailedIt')
          let morePractice = document.createElement('button');
          $(morePractice).addClass('wrong');
          $(correctBtn).html('<i class="material-icons">check</i>Nailed It')
          $(btnContain).append(correctBtn)
          $(morePractice).html('<i class="material-icons">clear</i>Bummer');
          $(btnContain).append(morePractice);

          let accum = 0;

          $(correctBtn).click(function(e){
            e.preventDefault();
            if ($(this).click([i])){
            accum += 5;
          }
            console.log(accum);
            let cardImg = document.getElementsByClassName('sticky-action')[i];
            $(cardImg).empty();
            $(cardImg).css("background-image", "url('../images/terrible.jpg')");
          })
          $(morePractice).click(function(e){
            e.preventDefault();
            accum += 5;
            console.log(accum);
            let cardImg = document.getElementsByClassName('sticky-action')[i];
            $(cardImg).empty();
            $(cardImg).css("background-image", "url('https://static1.squarespace.com/static/58078fd5be659453287fcdcc/5808e6a6b8a79b2b732505f1/580faa7a1b631bede2bea197/1477421691463/hariparmar.jpg?format=1500w')");
          })
        }
      })
    })          