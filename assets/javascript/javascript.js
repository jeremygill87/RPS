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

    //click function gets value from player1's click choice
    $(".pics").on("click", function(){
        
        var player1input = $(this).data("name");
        console.log(player1input);
    });

    //runs through the logic
    if (player1input === player2input){
        return "The battle is a draw.";
    }
    else if (player1input === "hulk")
    {
        if (player2input === "fantastic") {
            return "Mr. Fantastic binds Hulk";
            player2wins++;
        }
        if (player2input === "wolverine"){
            return "Hulk smashes Wolverine";
            player1wins++;
        }
        if (player2input === "venom"){
            return "Hulk is immune to Venom's symbiote";
            player1wins++;
        }
        if (player2input === "thanos"){
            return "Thanos snaps Hulk out of existence";
            player2wins++;
        }
    }
    else if (player1input === "fantastic"){
        if (player2input === "hulk"){
            return "Mr. Fantastic binds Hulk";
            player1wins++;
        }
    }
    
})
