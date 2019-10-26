$(document).ready(function(){
    
    var outcome = "";

    const firebaseConfig = {
        apiKey: "AIzaSyApInFP-qIHAqWkpPjBMqzC7hHfbpl5IfA",
        authDomain: "class-setup-project.firebaseapp.com",
        databaseURL: "https://class-setup-project.firebaseio.com",
        projectId: "class-setup-project",
        storageBucket: "class-setup-project.appspot.com",
        messagingSenderId: "587934945128",
        appId: "1:587934945128:web:366115143017d5fef590dd",
        measurementId: "G-4RK2Q7QY2P"
      };
    
    //intialize the firebase App
    firebase.initializeApp(firebaseConfig);

    //variable to reference the database and chat
    var database = firebase.database();

    var player = {
        number: "0",
        name: "empty",
        wins: 0,
        input: "",
        connected: false
    };
    var opponent = {
        number: "0",
        name: "empty",
        wins: 0,
        input: "",
        connected: false
    };

    database.ref("/players").set({
        player: player,
        opponent: opponent
    });

    getInfo(); 

    function getInfo(){
        var userID = prompt("Please enter your user name");
        var connectionsRef = database.ref("/connections");
        var connectedRef = database.ref(".info/connected");
        var playerRef = database.ref("/players/player");
        var opponentRef = database.ref("/players/opponent");

        connectedRef.on("value", function (snap){

            if (snap.val()) {
                var con = connectionsRef.push(true);
                con.onDisconnect().remove();
            }
        });
    }
    
    
    

    

    
   

    //click function gets value from player1's click choice
    $(".pics").on("click", function(){

        outcome = "";

        player.input = $(this).data("name");
        console.log("player is: " + player.input);
        database.ref("/players/player/input").push({
            Player: player.input
        })

        opponent.input = $(this).data("name");
        console.log("player2 is: " + opponent.input);
        database.ref("/players/opponent/input").push({
            Opponent: opponent.input
        })
        matchup();


    function matchup(){
        //runs through the logic
        if (player.input === opponent.input){
            outcome = "The battle is a draw.";
        }
        else if (player.input === "hulk")
        {
            if (opponent.input === "fantastic") {
                outcome = "Mr. Fantastic binds Hulk";
                opponent.wins++;
            }
            if (opponent.input === "wolverine"){
                outcome = "Hulk smashes Wolverine";
                player1.wins++;
            }
            if (player2.input === "venom"){
                outcome = "Hulk is immune to Venom's symbiote";
                player.wins++;
            }
            if (opponent.input === "thanos"){
                outcome = "Thanos snaps Hulk out of existence";
                opponent.wins++;
            }
        }
        else if (player.input === "fantastic"){
            if (opponent.input === "hulk"){
                outcome = "Mr. Fantastic binds Hulk";
                player.wins++;
            }
            if(opponent.input === "wolverine"){
                outcome = "Wolverine impales Mr. Fantastic";
                opponent.wins++;
            }
            if(opponent.input === "venom"){
                outcome = "Venom eats Mr. Fantastic";
                opponent.wins++;
            }
            if(opponent.input === "thanos"){
                outcome = "Mr. Fantastic scientifically disproves the existence of Thanos.";
                player.wins++;
            }
        }
        else if (player.input === "wolverine"){
            if (opponent.input === "hulk"){
                outcome = "Hulk smashes Wolverine";
                opponent.wins++;
            }
            if (opponent.input === "fantastic"){
                outcome = "Wolverine impales Mr. Fantastic";
                player.wins++;
            }
            if (opponent.input === "venom"){
                outcome = "Wolverine slashes Venom";
                player.wins++;
            }
            if (opponent.input === "thanos"){
                outcome = "Thanos crushes Wolverine";
                opponent.wins++;
            }
        }
        else if (player.input === "venom"){
            if (opponent.input === "hulk"){
                outcome = "Hulk is immune to Venom's symbiote";
                opponent.wins++;
            }
            if (opponent.input === "fantastic"){
                outcome = "Venom eats Mr. Fantastic";
                player.wins++;
            }
            if (opponent.input === "wolverine"){
                outcome = "Wolverine slashes Venom";
                opponent.wins++;
            }
            if (opponent.input === "thanos"){
                outcome = "Venom poisons Thanos";
                player.wins++;
            }
        }
        else if (player.input === "thanos"){
            if (opponent.input === "hulk"){
                outcome = "Thanos snaps Hulk out of existence";
                player.wins++;
            }
            if (opponent.input === "fantastic"){
                outcome = "Mr. Fantastic scientifically disproves the existence of Thanos";
                opponent.wins++;
            }
            if (opponent.input === "wolverine"){
                outcome = "Thanos crushes Wolverine";
                player.wins++;
            }
            if (opponent.input === "venom"){
                outcome = "Venom poisons Thanos";
                opponent.wins++;
            }
        };
    $("#victory").text(outcome);
    $("#player1choice").text("Wins: " + player.wins);
    $("#player2choice").text("Wins: " + opponent.wins);
    };
});


})

