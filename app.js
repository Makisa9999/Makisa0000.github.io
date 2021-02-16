document.addEventListener('DOMContentLoaded', function() {
    options = {edge:"left", dragable:true, inDuration:500, outDuration:500, preventScrolling:true}
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    options = {opacity: 0.90, inDuration: 1250, outDuration: 625, startingTop: "100%"}  
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

const switch_to_register_button_in_login_form = document.getElementById("switch_to_register_button_in_login_form")
const login_form = document.getElementById("login_form")
const register_form = document.getElementById("register_form")
const switch_to_login_form = document.getElementById("switch_to_login_form")

switch_to_register_button_in_login_form.addEventListener("click", (e) => {
    login_form.style.display = "none"
    switch_to_register_button_in_login_form.style.display = "none"
    register_form.style.display = "block"
    switch_to_login_form.style.display = "block"
})

switch_to_login_form.addEventListener("click", (e) => {
    login_form.style.display = "block"
    switch_to_register_button_in_login_form.style.display = "block"
    register_form.style.display = "none"
    switch_to_login_form.style.display = "none"
})

// Can close using:
// var instance = M.Sidenav.getInstance(function(close() or open()));
// var instance = M.Modal.getInstance(elem);