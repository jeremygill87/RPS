/*logic:
Hulk smashes Wolverine
Hulk is immune to Venom
Mr. Fantastic covers Hulk
Mr. Fantastic disproves Thanos
Wolverine impales Mr. Fantastic
Wolverine slashes Venom
Venom poisons Thanos
Venom eats Mr. Fantastic
Thanos crushes Wolverine
Thanos snaps Hulk*/

$(document).ready(function(){
    
    var player1wins = 0;
    var player2wins = 0;
    var outcome = "";


    /*function player2choose(){
            var player2input = player2array[computerInput];
            console.log("player2 is: " + player2input);
    };*/
            
    
    //click function gets value from player1's click choice
    $(".pics").on("click", function(){
        
        outcome = "";
        var computerInput = Math.floor(Math.random()* 5);
        var player2array = ["hulk", "fantastic", "wolverine", "venom", "thanos"];

        var player1input = $(this).data("name");
        console.log("player1 is: " + player1input);

        var player2input = player2array[computerInput];
        console.log("player2 is: " + player2input);
        matchup();


    function matchup(){
        //runs through the logic
        if (player1input === player2input){
            outcome = "The battle is a draw.";
        }
        else if (player1input === "hulk")
        {
            if (player2input === "fantastic") {
                outcome = "Mr. Fantastic binds Hulk";
                player2wins++;
            }
            if (player2input === "wolverine"){
                outcome = "Hulk smashes Wolverine";
                player1wins++;
            }
            if (player2input === "venom"){
                outcome = "Hulk is immune to Venom's symbiote";
                player1wins++;
            }
            if (player2input === "thanos"){
                outcome = "Thanos snaps Hulk out of existence";
                player2wins++;
            }
        }
        else if (player1input === "fantastic"){
            if (player2input === "hulk"){
                outcome = "Mr. Fantastic binds Hulk";
                player1wins++;
            }
            if(player2input === "wolverine"){
                outcome = "Wolverine impales Mr. Fantastic";
                player2wins++;
            }
            if(player2input === "venom"){
                outcome = "Venom eats Mr. Fantastic";
                player2wins++;
            }
            if(player2input === "thanos"){
                outcome = "Mr. Fantastic scientifically disproves the existence of Thanos.";
                player1wins++;
            }
        }
        else if (player1input === "wolverine"){
            if (player2input === "hulk"){
                outcome = "Hulk smashes Wolverine";
                player2wins++;
            }
            if (player2input === "fantastic"){
                outcome = "Wolverine impales Mr. Fantastic";
                player1wins++;
            }
            if (player2input === "venom"){
                outcome = "Wolverine slashes Venom";
                player1wins++;
            }
            if (player2input === "thanos"){
                outcome = "Thanos crushes Wolverine";
                player2wins++;
            }
        }
        else if (player1input === "venom"){
            if (player2input === "hulk"){
                outcome = "Hulk is immune to Venom's symbiote";
                player2wins++;
            }
            if (player2input === "fantastic"){
                outcome = "Venom eats Mr. Fantastic";
                player1wins++;
            }
            if (player2input === "wolverine"){
                outcome = "Wolverine slashes Venom";
                player2wins++;
            }
            if (player2input === "thanos"){
                outcome = "Venom poisons Thanos";
                player1wins++;
            }
        }
        else if (player1input === "thanos"){
            if (player2input === "hulk"){
                outcome = "Thanos snaps Hulk out of existence";
                player1wins++;
            }
            if (player2input === "fantastic"){
                outcome = "Mr. Fantastic scientifically disproves the existence of Thanos";
                player2wins++;
            }
            if (player2input === "wolverine"){
                outcome = "Thanos crushes Wolverine";
                player1wins++;
            }
            if (player2input === "venom"){
                outcome = "Venom poisons Thanos";
                player2wins++;
            }
        };
    $("#victory").text(outcome);
    $("#player1choice").text("Wins: " + player1wins);
    $("#player2choice").text("Wins: " + player2wins);
    };
});


})

