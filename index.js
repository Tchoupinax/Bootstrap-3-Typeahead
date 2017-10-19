$(function () {
    $('#city').typeahead({
        source: [
            { id: "someId1", name: "A Display name 1" },
            { id: "someId2", name: "name 2" }
        ],
        delay: 0,
        autoSelect: true,
        minLength: 3
    });


});