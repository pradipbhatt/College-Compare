for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
}

function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "NPR " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand
        document.getElementById("infrastructure1").innerHTML = product[a].infrastructure
        document.getElementById("Afiliation1").innerHTML = product[a].Afiliation

    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""

    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1) {
        document.getElementById("img2").src = product[a].image
        document.getElementById("price2").innerHTML = "NPR " + product[a].price
        document.getElementById("desc2").innerHTML = product[a].description
        document.getElementById("brand2").innerHTML = product[a].brand
        document.getElementById("Afiliation2").innerHTML = product[a].Afiliation
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""

    }
}