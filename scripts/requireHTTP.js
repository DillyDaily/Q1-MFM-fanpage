var http = require('http');

var server = http.createServer(function(request, response) {
    console.log('got a request!');
    let data = 
    {  
       "results":[  
          {  
             "deceased_victims": ["Lynda Ann Healy", " Donna Gail Manson", " Susan Elaine Rancourt", " Roberta Kathleen Parks", " Brenda Carol Ball", " Georgann Hawkins", " Janice Ann Ott", " Denise Marie Naslund", " Nancy Wilcox", " Melissa Anne Smith", " Laura Ann Aime", " Debra Jean Kent", " Caryn Eileen Campbell", " Julie Cunningham", " Denise Lynn Oliverson", " Lynette Dawn Culver", " Susan Curtis", " Margaret Elizabeth Bowman", " Lisa Levy", " Kimberly Diane Leach"],
             "number_of_known_victims": 30,
             "survivors": ["Carol DaRonch", " Karen Chandler", " Kathy Kleiner", " Cheryl Thomas", " Carol DaRonch", " Karen Sparks"],
             "murderer":"Ted Bundy",
             "murderer_photo": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ted_Bundy_headshot.jpg",
             "weapon":["bludgeoney things"],
             "convictions": ["Aggravated kidnapping", " Attempted murder"," Burglary", " Murder"],
             "time_in_prison": "10 years",
             "sentence": ["death penalty"],
             "podcast_number": 61,
          },
          {  
            "deceased_victims":["Maude Matilda Hughey Kemper", " Edmund Emil Kemper", " Mary Ann Pesce", " Anita Luchessa", " Aiko Koo", " Cindy Schall", " Rosalind Thorpe", " Allison Liu", " Clarnell Strandberg", " Sally Hallett"],
            "number_of_known_victims": 10,
            "suspected_number_of_victims": 10,
            "survivors": 0,
            "murderer":"Edmund 'Ed' Kemper",
            "murderer_photo": "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTE4MDAzNDEwMzg1Nzk4Njcw/edmund-kemper-403254-1-402.jpg",
            "weapon":["gun", " knife"],
            "convictions": ["murder", " killings"],
            "time_in_prison":"",
            "sentence": "Life imprisonment",
            "podcast_number": 39,
            "alias": "Co-ed Killer",
          },
          {  
             "deceased_victims":["Tracy Tafoya", " Pamela Parsons", " Sarah Dylan", " Shariea Patton", " Roxene Roggasch", " Carmen Colon"],
             "number_of_known_victims": 6,
             "survivors": 0,
             "murderer":"Joseph Naso",
             "murderer_photo": "http://murderpedia.org/male.N/images/naso-joseph/joseph-naso-8.jpg",
             "weapon":"strangley things",
             "convictions":["murder", " theft"],
             "time_in_prison":"",
             "sentence": "death penalty",
             "podcast_number": 14,
          },
          {  
             "deceased_victims":["Richard Stowers", " Cynthia Moreland", " Shauna May", " Diane O'Connell", " Anne Alderson", " Ellen Marie Hansen", " Heather Scaggs", " Edna Kane", " Barbara Schwartz", " Mary Frances Bennett"],
             "number_of_known_victims": 10,
             "survivors": "Steven Haertle",
             "murderer":"David Carpenter",
             "murderer_photo": "http://murderpedia.org/male.C/images/carpenter_david/carpenter000.jpg",
             "weapon":"gun",
             "convictions": ["attempted murder", " attempted rape", " kidnapping", " murder", " rape", " robbery"],
             "time_in_prison":"14 years",
             "sentence": "death penalty",
             "podcast_number": 36,
             "alias": "The Trailside Killer",
          },
          {  
            "deceased_victims":["Roxanne Hayes"],
            "number_of_known_victims": 2,
            "survivors": "Mary Vincent",
            "murderer":"Lawrence Singleton",
            "murderer_photo": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Lawrence_Singleton.jpg",
            "weapon":["hatchet", " knife"],
            "convictions": ["murder", " rape", " kidnapping", " mayhem", " attempted murder", " sex crimes", " theft"],
            "time_in_prison":"8 years",
            "sentence": ["14 years", " life"],
            "podcast_number": 18,
         },
         {  
             "deceased_victims":["Lawrence White", " Mary Guilfoyle", " Fr Henri Tomei", " Jim Ralph Gianera", " Joan Gianera", " Kathy Francis", " Daemon Francis", " David Hughes", " David Allan Oliker", " Robert Michael Spector", " Brian Scott Card", " Mark John Dreibelbis", " Fred Perez"],
             "survivors": 0,
             "number_of_known_victims": 13,
             "murderer":"Herbert Mullin",
             "murderer_photo": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Herbert-Mullin.jpg",
             "weapon":"gun",
             "convictions": "murder",
             "time_in_prison":"",
             "sentence": "16 years",
             "podcast_number": 57,
          },
          {  
            "deceased_victims":["Colleen MacMillen", " Gale Weys", " Pamela Darlington", " Sheila Swanson", " Melissa Sanders", " Jennifer Esson", " Kara Leas"],
            "number_of_known_victims": 1,
            "suspected_number_of_victims": 20,
            "survivors": 0,
            "murderer":"Bobby Jack Fowler",
            "murderer_photo": "https://upload.wikimedia.org/wikipedia/en/3/3d/Bobby_Jack_Fowler_-_mugshot_-_01.jpg",
            "weapon":"gun",
            "convictions": "murder",
            "time_in_prison":"",
            "sentence": "16 years",
            "podcast_number": 64,
         },
         {  
          "deceased_victims":["Kami Villanueva", " Melissa Urbin", " Michelle Urbin", " Cynthia Marie Jones"],
          "number_of_known_victims": 4,
          "suspected_number_of_victims": "",
          "survivors": 0,
          "murderer":"Leslie Allen Williams",
          "murderer_photo": "http://murderpedia.org/male.W/images/williams_leslie/williams000.jpg",
          "weapon":"gun",
          "convictions": ["rape", " murder", " kidnapping"],
          "time_in_prison":"",
          "sentence": "Life in prison without parole",
          "podcast_number": 64,
       },
       ]
    };
    response.setHeader('Content-Type', 'application/json');    
    response.write(JSON.stringify(data));
    response.end();
});

server.listen(3000);