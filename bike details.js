

var ackoBike = localStorage.getItem("bike_no")
document.getElementById("ackoBikeNumber").innerText = ackoBike

var bikeInput = document.getElementById("bikeInput")
var bikeName = document.querySelector("#bikeName")
var overlay = document.getElementById("overlay")

bikeInput.onclick = function () {
    bikeName.classList.add("bikeName")
    overlay.classList.add("active")

    let h3 = document.createElement("h3")
    h3.innerText = "Popular Bikes"

    let p1 = document.createElement("p")
    p1.innerText = "Bajaj Pulsar 150 150CC"
    p1.classList.add('bikeDiv')

    let p2 = document.createElement("p")
    p2.innerText = "Honda Activa 109CC"
    p2.classList.add('bikeDiv')

    let p3 = document.createElement("p")
    p3.innerText = "Honda Cb Shine 125CC"
    p3.classList.add('bikeDiv')

    let p4 = document.createElement("p")
    p4.innerText = "TVS Jupiter 110CC"
    p4.classList.add('bikeDiv')

    let p5 = document.createElement("p")
    p5.innerText = "Suzuki Access 125CC"
    p5.classList.add('bikeDiv')

    let p6 = document.createElement("p")
    p6.innerText = "Yamaha Fzs 150CC"
    p6.classList.add('bikeDiv')

    bikeName.append(h3, p1, p2, p3, p4, p5, p6)
}

bikeName.addEventListener("click", myFunction1);
function myFunction1(e) {
    console.log(e.target.innerText);
    document.querySelector("#model").innerHTML = ""
    document.getElementById("model").classList.remove("model")
    document.getElementById("model").classList.add("model2")

    var img = document.createElement("img")
    img.src = "data:image/svg+xml,%3Csvg width='145' height='104' viewBox='0 0 145 104' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M114.683 21.367C120.35 21.367 124.943 16.7732 124.943 11.1065C124.943 5.43975 120.35 0.845947 114.683 0.845947C109.016 0.845947 104.422 5.43975 104.422 11.1065C104.422 16.7732 109.016 21.367 114.683 21.367Z' fill='%23FFF1E2'/%3E %3Cpath d='M0.501634 103.101H144.5C144.5 103.101 137.572 71.1352 121.436 65.961C105.299 60.7869 89.9525 89.1569 68.3791 40.7482C43.21 -15.641 0.194694 14.0883 0.501634 103.101Z' fill='%23E4F6FE'/%3E %3Cpath d='M40.1847 102.881C49.1736 102.531 56.3647 92.8839 56.3647 81.3956C56.3647 69.9073 49.1736 60.6991 40.1847 60.8745L35.3613 60.9622V103.101L40.1847 102.881Z' fill='%230B0E34'/%3E %3Cpath d='M18.2166 82.5356C18.2166 70.7842 25.6708 61.1376 34.7913 60.9622C43.8241 60.7868 51.0591 69.995 51.0591 81.5271C51.0591 93.0593 43.8241 102.706 34.7913 103.057C25.6269 103.451 18.2166 94.2432 18.2166 82.5356Z' fill='%23343758'/%3E %3Cpath d='M24.9255 82.3164C24.9255 75.1691 29.3542 69.2495 34.7476 69.118C40.141 68.9864 44.482 74.6429 44.482 81.7025C44.482 88.7621 40.141 94.6816 34.7476 94.9009C29.3542 95.1201 24.9255 89.4637 24.9255 82.3164Z' fill='%23B0B1C4'/%3E %3Cpath d='M32.818 85.1227C31.5026 84.4212 30.9764 82.7988 31.678 81.4833L39.0445 67.3202C39.7461 66.0048 41.3685 65.4786 42.6839 66.1802C43.9994 66.8818 44.5256 68.5042 43.824 69.8196L36.4575 83.9827C35.7559 85.2981 34.1335 85.7805 32.818 85.1227Z' fill='%23343758'/%3E %3Cpath d='M96.9684 35.3108C96.5299 35.3108 96.0914 35.1793 95.7407 34.8723C94.9952 34.2146 94.9075 33.0745 95.6091 32.373L99.7747 27.9443C100.871 26.7604 102.449 26.1465 104.072 26.1465L109.728 26.2342C110.737 26.2342 111.526 27.0673 111.526 28.032C111.526 28.9966 110.693 29.7859 109.684 29.7859C109.684 29.7859 109.684 29.7859 109.641 29.7859L103.984 29.7421C103.414 29.7859 102.888 29.9613 102.493 30.3998L98.3716 34.8285C97.9769 35.1354 97.4507 35.3108 96.9684 35.3108Z' fill='%23343758'/%3E %3Cpath d='M110.868 76.9231C109.465 77.4932 107.887 76.8355 107.317 75.4761L96.3108 47.8078L101.397 45.6592L112.403 73.4591C112.973 74.7746 112.272 76.3531 110.868 76.9231Z' fill='%23343758'/%3E %3Cpath d='M63.0299 49.1231C62.8983 55.1741 51.5416 56.4896 46.499 55.3057C42.4649 54.3849 35.7561 53.3325 33.169 52.894C31.9851 52.7186 30.8012 52.894 29.7489 53.4202C28.258 54.1656 26.3287 55.788 24.6624 59.1205C23.6978 61.0937 25.7587 63.1546 27.9072 62.3653C30.2312 61.4883 33.1252 61.006 36.3261 61.883C41.7633 63.2861 44.9643 66.9255 46.8498 73.8097C48.1652 78.6331 49.1299 83.0618 50.3576 84.2895C53.427 87.3151 77.0614 86.3943 79.3415 85.6927C81.5778 84.9911 90.9175 45.7029 90.9175 45.7029L63.0299 49.1231Z' fill='%23F75276'/%3E %3Cpath d='M90.9173 45.7468C89.1633 51.754 79.3413 85.7366 79.3413 85.7366C79.3413 85.7366 86.5763 85.3858 88.6372 84.3334C94.3375 81.4394 101.222 45.6152 101.222 45.6152L90.9173 45.7468Z' fill='%230B0E34'/%3E %3Cpath d='M63.0298 49.1231C63.0298 49.1231 64.0383 56.1388 77.149 54.4726L74.0357 67.0132C72.9833 71.3104 68.9054 74.3798 64.2575 74.3798L46.9812 74.4675C48.209 79.0277 49.1298 83.1056 50.3137 84.2895C53.3831 87.3151 77.0174 86.3943 79.2975 85.6927C81.5338 84.9911 90.8735 45.7029 90.8735 45.7029L63.0298 49.1231Z' fill='%23E50031'/%3E %3Cpath d='M90.9174 45.7467L87.9796 36.3631C87.9796 36.3631 80.7884 34.4337 74.3427 36.4508C67.8531 38.4678 63.1613 43.0719 63.0298 49.123C63.0298 49.123 63.2929 56.4895 90.9174 45.7467Z' fill='%23F75276'/%3E %3Cpath d='M110.474 102.925C119.244 102.531 126.347 92.7523 126.347 81.0448C126.347 69.3372 119.287 59.9975 110.474 60.1291L105.738 60.2168V103.101L110.474 102.925Z' fill='%230B0E34'/%3E %3Cpath d='M88.9004 82.1849C88.9004 70.2142 96.2231 60.3922 105.124 60.2168C113.982 60.0414 121.085 69.425 121.085 81.1763C121.085 92.9277 113.982 102.75 105.124 103.144C96.2231 103.495 88.9004 94.1116 88.9004 82.1849Z' fill='%23343758'/%3E %3Cpath d='M95.5215 81.9655C95.5215 74.6867 99.8625 68.6794 105.168 68.5479C110.43 68.4163 114.683 74.1605 114.683 81.3955C114.683 88.6305 110.43 94.6377 105.168 94.8131C99.8625 94.9885 95.5215 89.2443 95.5215 81.9655Z' fill='%23B0B1C4'/%3E %3Cpath d='M106.045 85.0351C104.642 85.6051 103.019 84.9474 102.493 83.5881L92.0135 57.3667C91.6627 56.4459 91.8381 55.4374 92.4958 54.6919C93.8551 53.1134 96.4422 53.508 97.2315 55.3935L107.667 81.5711C108.15 82.8865 107.448 84.465 106.045 85.0351Z' fill='%23343758'/%3E %3Cpath d='M100.432 30.8821C100.432 30.8821 91.4435 28.3828 87.7164 35.3547C83.9454 42.3266 89.9965 50.6139 100.432 49.2546V30.8821Z' fill='%23F75276'/%3E %3Cpath d='M107.799 40.0026C107.799 45.0451 104.511 49.1669 100.433 49.2546C96.3547 49.2984 93.0222 45.2205 93.0222 40.1341C93.0222 35.0477 96.3547 30.9259 100.433 30.8821C104.511 30.8821 107.799 34.96 107.799 40.0026Z' fill='%23FF92AC'/%3E %3Cpath d='M106.264 39.8273C106.264 43.7298 104.028 46.8869 101.222 46.9307C98.4155 46.9746 96.1792 43.8175 96.1792 39.915C96.1792 36.0125 98.4593 32.8554 101.266 32.8115C104.028 32.8115 106.264 35.9686 106.264 39.8273Z' fill='white'/%3E %3Cpath d='M87.7163 35.8809C87.2339 35.8809 86.7078 35.7055 86.357 35.3547L83.463 32.4607C82.1037 31.1014 80.1743 30.3121 78.2011 30.3121H72.2378C71.1854 30.3121 70.3523 29.5229 70.3523 28.5143C70.3523 27.5058 71.1854 26.7166 72.2378 26.7166H78.2011C81.2267 26.7166 84.1207 27.9005 86.1816 29.9613L89.0756 32.8553C89.7771 33.5569 89.7771 34.697 89.0317 35.3986C88.6371 35.7055 88.1986 35.8809 87.7163 35.8809Z' fill='%23343758'/%3E %3Cpath d='M63.0297 49.1232C63.0297 49.1232 56.6717 49.1232 55.0054 48.1585C53.3392 47.1938 41.0616 45.133 33.2566 46.3607C33.2566 46.3607 29.5294 46.9307 29.2664 47.8077C29.0033 48.6847 27.6878 53.6396 28.4332 54.3411C29.1787 54.9989 45.8849 56.5774 47.0688 56.7528C48.2089 56.8843 60.7057 57.2351 63.9505 51.0963C63.9066 51.0963 63.5559 50.5702 63.0297 49.1232Z' fill='%23343758'/%3E %3Cpath d='M109.114 57.3227L91.3996 59.0327C90.9612 59.0766 90.6104 58.8135 90.5227 58.4189L90.0842 56.5772C89.9526 56.0949 90.3473 55.6126 90.8296 55.5687L108.544 53.9025C108.939 53.8586 109.334 54.1217 109.421 54.5163L109.816 56.3141C109.948 56.7965 109.597 57.2788 109.114 57.3227Z' fill='%23FFE9EE'/%3E %3C/svg%3E"

    var h2 = document.createElement("h3")
    h2.innerText = e.target.innerText

    document.getElementById("model").append(img, h2)

    document.querySelector("#heading").innerText = "Here’s your bike"
    document.querySelector("#bikeName").classList.remove("bikeName");
    document.querySelector("#bikeName").innerHTML = ""
    document.querySelector("#overlay").classList.remove("active");

    localStorage.setItem("model", e.target.innerText)
}


var bikeYear = document.getElementById("bikeYear");

function year() {
    if (document.querySelector("#heading").innerText == "Here’s your bike") {
        bikeYear.classList.add("bikeYear2")
    } else {
        bikeYear.classList.add("bikeYear1")
    }
    bikeYear.classList.add("bikeYear")
    overlay.classList.add("active")

    var div1 = document.createElement("div")
    div1.innerText = 2022
    div1.classList.add("bikeDivYear")

    var div2 = document.createElement("div")
    div2.innerText = 2021
    div2.classList.add("bikeDivYear")

    var div3 = document.createElement("div")
    div3.innerText = 2020
    div3.classList.add("bikeDivYear")

    var div4 = document.createElement("div")
    div4.innerText = 2019
    div4.classList.add("bikeDivYear")

    var div5 = document.createElement("div")
    div5.innerText = 2018
    div5.classList.add("bikeDivYear")

    var div6 = document.createElement("div")
    div6.innerText = 2017
    div6.classList.add("bikeDivYear")

    var div7 = document.createElement("div")
    div7.innerText = 2016
    div7.classList.add("bikeDivYear")

    var div8 = document.createElement("div")
    div8.innerText = 2015
    div8.classList.add("bikeDivYear")

    var div9 = document.createElement("div")
    div9.innerText = 2014
    div9.classList.add("bikeDivYear")

    var div10 = document.createElement("div")
    div10.innerText = 2013
    div10.classList.add("bikeDivYear")

    var div11 = document.createElement("div")
    div11.innerText = 2012
    div11.classList.add("bikeDivYear")

    var div12 = document.createElement("div")
    div12.innerText = 2011
    div12.classList.add("bikeDivYear")

    var div13 = document.createElement("div")
    div13.innerText = 2010
    div13.classList.add("bikeDivYear")

    var div14 = document.createElement("div")
    div14.innerText = "before 2010"
    div14.classList.add("bikeDivYear")


    bikeYear.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12, div13, div14)
}

bikeYear.addEventListener("click", myFunction);
function myFunction(e) {
    console.log(e.target.innerText);
    document.getElementById("select1").innerHTML = e.target.innerText
    document.getElementById("bikeYear").classList.remove("bikeYear")
    bikeYear.classList.remove("bikeYear1")
    bikeYear.classList.remove("bikeYear2")
    document.getElementById("bikeYear").innerHTML = ""
    document.querySelector("#overlay").classList.remove("active");
    localStorage.setItem("Registration", e.target.innerText)

    document.getElementById("select1").classList.remove("false")
}

function policy() {
    overlay.classList.add("active")

    var pol1 = document.createElement("div")
    pol1.innerText = "Policy Not Expired"

    var pol2 = document.createElement("div")
    pol2.innerText = "Expired within 90 days"

    var pol3 = document.createElement("div")
    pol3.innerText = "Expired more than 90 days ago"

    if (document.querySelector("#heading").innerText == "Here’s your bike") {
        document.querySelector("#bikeStatus").classList.add("bikeStatus2")
    } else {
        document.querySelector("#bikeStatus").classList.add("bikeStatus1")
    }
    document.querySelector("#bikeStatus").classList.add("bikeStatus")
    document.querySelector("#bikeStatus").append(pol1, pol2, pol3)
}
document.querySelector("#bikeStatus").addEventListener("click", myFunction3)
function myFunction3(e) {
    console.log(e.target.innerText)
    document.getElementById("select2").innerHTML = e.target.innerText;
    document.querySelector("#bikeStatus").classList.remove("bikeStatus")
    document.querySelector("#bikeStatus").classList.remove("bikeStatus2")
    document.querySelector("#bikeStatus").classList.remove("bikeStatus1")
    document.querySelector("#bikeStatus").innerHTML = ""
    document.querySelector("#overlay").classList.remove("active");
    localStorage.setItem("PolicyPeriod", e.target.innerText)

    document.getElementById("select2").classList.remove("false")
}

function viewPrice() {
    if (document.getElementById("select1").innerText == "Select" && document.getElementById("select2").innerText == 'Expired or not') {
        document.getElementById("select1").classList.add("false")
        document.getElementById("select2").classList.add("false")
    } else if (document.getElementById("select1").innerText != "Select" && document.getElementById("select2").innerText == 'Expired or not') {
        document.getElementById("select2").classList.add("false")
    } else if (document.getElementById("select1").innerText == "Select" && document.getElementById("select2").innerText != 'Expired or not') {
        document.getElementById("select1").classList.add("false")
    } else {
        window.location.href = "bikeInsurance.html"
    }
}

overlay.onclick = function () {
    document.querySelector("#bikeName").classList.remove("bikeName");
    document.querySelector("#bikeName").innerHTML = ""
    document.querySelector("#overlay").classList.remove("active");


    document.getElementById("bikeYear").classList.remove("bikeYear")
    bikeYear.classList.remove("bikeYear1")
    bikeYear.classList.remove("bikeYear2")
    document.getElementById("bikeYear").innerHTML = ""

    document.querySelector("#bikeStatus").classList.remove("bikeStatus")
    document.querySelector("#bikeStatus").classList.remove("bikeStatus2")
    document.querySelector("#bikeStatus").classList.remove("bikeStatus1")
    document.querySelector("#bikeStatus").innerHTML = ""
}
