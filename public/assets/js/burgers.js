$(() => {
    //click listener for add burger button
    $(".create").on("submit", (event) => {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#newBurger").val().trim()
        }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            // console.log("added new burger");
            location.reload();
        });
    });
    //click listener for devour button
    $(".devour").on("click", (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute("data-id");
        $.ajax("api/burgers/" + id, {
            type: "PUT"
        }).then(() => {
            // console.log("devoured burger");
            location.reload();
        });
    });
});