function show_image(src) {
    var img = document.createElement("img");
    img.src = src;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function check_code(){
    var parameters = location.search.substring(1).split("&");
    let map = {};
    for (let k in parameters){
        let temp = k.split("=");
        map[temp[0]] = temp[1]
    }
    return map['k'];
}

    function toPython(usrdata){
        $.ajax({
            url: "http://localhost:5000",
            type: "POST",
            data: { information : "You have a very nice website, sir." , userdata : usrdata},
            dataType: "json",
            success: function(data) {
                <!-- do something here -->
                console.log(data);
                $('#test').html(data);
            }});
}