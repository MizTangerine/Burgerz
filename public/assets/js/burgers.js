$(() => {
    //click listener for add burger button
    $(".create").on("submit", (event) => {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#newBurger").val().trim().split(' ').map(word => word.substr(0, 1).toUpperCase() + word.substr(1)).join(' ')
        }
        // console.log(newBurger);
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