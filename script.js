function handleName(name) {
    let re = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g;
    var res = re.test(name);
    if (!res) {
        let message = "Names can not contain numbers and simbols";
        animationCard(message);
    }
}

function handleEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = re.test(email);
    if (!res) {
        let message = "Fill this field with a valid email adrress!";
        animationCard(message);
    }
}

function handlePhone(phone) {
    var numbers = phone.replace(/\D/g, ''),
        char = { 0: '(', 2: ') ', 3: ' ', 7: ' - ' },
        r = '';
    for (var i = 0; i < numbers.length; i++) {
        r += (char[i] || '') + numbers[i];
    }
    $("#number").val(`${r.substr(0, 18)}`);
    if (phone.length < 18) {
        let message = "Fill this field with a valide phone number";
        animationCard(message);
    }
}

function animationCard(message) {
    $("#message").text(`${message}`);
    $(".card-error").animate(
        {
            opacity: 1,
            top: "50px"
        },
        2000,
        function () {
            setTimeout(function () {
                $(".card-error").css({
                    opacity: "0",
                    top: "150px"
                });
            }, 2000);
        }
    );
}
