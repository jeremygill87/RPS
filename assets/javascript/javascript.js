$(document).ready(function() {

    var player = {
        wins: 0,
        input: "",
    };
    var computer = {
        wins: 0,
        input: "",
        array: ["hulk","fantastic","wolverine","venom","thanos"]
    };
    
    // click function gets value from player1's click choice
    $(".pics").on("click", function() {
        outcome = "";
        var computerrandom = Math.floor(Math.random() * 5)

        player.input = $(this).data("name");
        console.log("player chose: " + player.input);

        computer.input = computer.array[computerrandom];
        console.log("computer chose: " + computer.input);
        
        matchup();
    })

    function matchup() {
        //runs through the logic
        if (player.input === computer.input) {
            outcome = "The battle is a draw.";
        }
        else if (player.input === "hulk") {
            if (computer.input === "fantastic") {
                outcome = "Mr. Fantastic binds Hulk";
                computer.wins++;
            }
            if (computer.input === "wolverine") {
                outcome = "Hulk smashes Wolverine";
                player.wins++;
            }
            if (computer.input === "venom") {
                outcome = "Hulk is immune to Venom's symbiote";
                player.wins++;
            }
            if (computer.input === "thanos") {
                outcome = "Thanos snaps Hulk out of existence";
                computer.wins++;
            }
        }
        else if (player.input === "fantastic") {
            if (computer.input === "hulk") {
                outcome = "Mr. Fantastic binds Hulk";
                player.wins++;
            }
            if (computer.input === "wolverine") {
                outcome = "Wolverine impales Mr. Fantastic";
                computer.wins++;
            }
            if (computer.input === "venom") {
                outcome = "Venom eats Mr. Fantastic";
                computer.wins++;
            }
            if (computer.input === "thanos") {
                outcome = "Mr. Fantastic scientifically disproves the existence of Thanos.";
                player.wins++;
            }
        }
        else if (player.input === "wolverine") {
            if (computer.input === "hulk") {
                outcome = "Hulk smashes Wolverine";
                computer.wins++;
            }
            if (computer.input === "fantastic") {
                outcome = "Wolverine impales Mr. Fantastic";
                player.wins++;
            }
            if (computer.input === "venom") {
                outcome = "Wolverine slashes Venom";
                player.wins++;
            }
            if (computer.input === "thanos") {
                outcome = "Thanos crushes Wolverine";
                computer.wins++;
            }
        }
        else if (player.input === "venom") {
            if (computer.input === "hulk") {
                outcome = "Hulk is immune to Venom's symbiote";
                computer.wins++;
            }
            if (computer.input === "fantastic") {
                outcome = "Venom eats Mr. Fantastic";
                player.wins++;
            }
            if (computer.input === "wolverine") {
                outcome = "Wolverine slashes Venom";
                computer.wins++;
            }
            if (computer.input === "thanos") {
                outcome = "Venom poisons Thanos";
                player.wins++;
            }
        }
        else if (player.input === "thanos") {
            if (computer.input === "hulk") {
                outcome = "Thanos snaps Hulk out of existence";
                player.wins++;
            }
            if (computer.input === "fantastic") {
                outcome = "Mr. Fantastic scientifically disproves the existence of Thanos";
                computer.wins++;
            }
            if (computer.input === "wolverine") {
                outcome = "Thanos crushes Wolverine";
                player.wins++;
            }
            if (computer.input === "venom") {
                outcome = "Venom poisons Thanos";
                computer.wins++;
            }
        };
        $("#victory").text(outcome);
        $("#player1choice").text("Wins: " + player.wins);
        $("#player2choice").text("Wins: " + computer.wins);
    };
});