$(function(){
    $(".devour-burger").on("click", function(event){
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/"+ id, {
            type: "PUT"
        }).then(
            function(){
                console.log("Burger has been devoured!")
                location.reload();
            }
            
        )
    })

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {burger_name: $("#new-burger").val().trim()}

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created burger");
            location.reload();
        })
    })

    
});//end function, wait for DOM
