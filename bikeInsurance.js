

    var bike_no = localStorage.getItem("bike_no")
    var model = localStorage.getItem("model");
    document.getElementById("bikeDetails").innerText = bike_no + ", " + model;
    document.getElementById("h12").innerText = "Plans for your" + model;
    
    var year = localStorage.getItem("Registration")
    document.getElementById("p1").innerText = year

    var PolicyPeriod = localStorage.getItem("PolicyPeriod")
    document.getElementById("p2").innerText = PolicyPeriod

    function func1(){
        document.getElementById("1year").classList.add("selected")
        document.getElementById("2year").classList.remove("selected")
        document.getElementById("3year").classList.remove("selected")

        document.getElementById("d1").innerText = "₹1111"
        document.getElementById("d2").innerText = "₹999"

        if(document.getElementById("plan").className == "selected2"){
            document.getElementById("footerPrice").innerText = document.getElementById("d1").innerText
        }else{
            document.getElementById("footerPrice").innerText = document.getElementById("d2").innerText
        }
    }

    function func2(){
        document.getElementById("1year").classList.remove("selected")
        document.getElementById("2year").classList.add("selected")
        document.getElementById("3year").classList.remove("selected")

        document.getElementById("d1").innerText = "₹2222"
        document.getElementById("d2").innerText = "₹1998"

        if(document.getElementById("plan").className == "selected2"){
            document.getElementById("footerPrice").innerText = document.getElementById("d1").innerText
        }else{
            document.getElementById("footerPrice").innerText = document.getElementById("d2").innerText
        }
    }

    function func3(){
        document.getElementById("1year").classList.remove("selected")
        document.getElementById("2year").classList.remove("selected")
        document.getElementById("3year").classList.add("selected")

        document.getElementById("d1").innerText = "₹3333"
        document.getElementById("d2").innerText = "₹2997"

        if(document.getElementById("plan").className == "selected2"){
            document.getElementById("footerPrice").innerText = document.getElementById("d1").innerText
        }else{
            document.getElementById("footerPrice").innerText = document.getElementById("d2").innerText
        }
    }

    function func4(){

        document.getElementById("plan").classList.add("selected2")
        document.getElementById("plan").classList.remove("notselected")
        document.getElementById("plan2").classList.add("notselected")
        document.getElementById("plan2").classList.remove("selected2")

        document.getElementById("img1").classList.add("img")
        document.getElementById("img1").classList.remove("imgNot")
        document.getElementById("img1").src="https://as2.ftcdn.net/v2/jpg/02/72/30/99/1000_F_272309996_OUqQOHJuyXpYuGJJYVO4Fz243ifM6kqL.jpg"
        document.getElementById("img2").classList.remove("img")
        document.getElementById("img2").classList.add("imgNot")
        document.getElementById("img2").src="https://cdn.shopify.com/s/files/1/0002/3386/5241/products/Graphic-Whizard-Feed-Belt_1200x.jpg?v=1545129526"

        document.getElementById("footerPrice").innerText = document.getElementById("d1").innerText
    }

    function func5(){

        document.getElementById("plan2").classList.add("selected2")
        document.getElementById("plan2").classList.remove("notselected")
        document.getElementById("plan").classList.add("notselected")
        document.getElementById("plan").classList.remove("selected2")

        document.getElementById("img2").classList.add("img")
        document.getElementById("img2").classList.remove("imgNot")
        document.getElementById("img2").src="https://as2.ftcdn.net/v2/jpg/02/72/30/99/1000_F_272309996_OUqQOHJuyXpYuGJJYVO4Fz243ifM6kqL.jpg"
        document.getElementById("img1").classList.remove("img")
        document.getElementById("img1").classList.add("imgNot")
        document.getElementById("img1").src="https://cdn.shopify.com/s/files/1/0002/3386/5241/products/Graphic-Whizard-Feed-Belt_1200x.jpg?v=1545129526"

        document.getElementById("footerPrice").innerText = document.getElementById("d2").innerText
    }

    function func7(){
        window.location.href="details.html"
    }
