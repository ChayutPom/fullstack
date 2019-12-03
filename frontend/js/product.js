$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();
        // #12 Get all products and display as a table
        // use $.get
        $.get(url, function (data, status) {
            for (node in data) {            
    var item = `<th>${data.serialno}</th>
            <th>${data.name}</th>
            <th>${data.category}</th>
            <th>${dat.price}</th>
            <th>${data.photo}</th>
            <th> <button type="button" class="close">Delete</button></th>`    
        $("#plist").append(item);
    }
          });
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
        $.post(url,newproduct ,function(result) {
            
        });
        // ===============================

    });
})