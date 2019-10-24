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
    
    //gets value from player1's click
    $(".pics").on("click", function(){
        
        var player1input = $(this).data("name");
        console.log(player1input);
    });

    
    
})
