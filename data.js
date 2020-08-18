var data = {
    "all" : [
        {
            "name" : "Cake Items",
            "price" : "$10",
            "image" :"https://picsum.photos/200"
        },
        {
            "name" : "Cupcake Items",
            "price" : "$2",
            "image" : "https://picsum.photos/200"
        },
        {
            "name" : "Sweets Items",
            "price" : "$8",
            "image" : "https://picsum.photos/200"
        },
        {
            "name" : "Doughnuts Items",
            "price" : "$3",
            "image" : "https://picsum.photos/200"
        }
    ],
    "cakes" : [
            {
                "name" : "cake1",
                "price" : "$10",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "cake2",
                "price" : "$12",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "cake3",
                "price" : "$15",
                "image" : "https://picsum.photos/200"
            }],
    "cupcakes" : [  {
                "name" : "cupcake1",
                "price" : "$2",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "cupcake2",
                "price" : "$4",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "cupcake1",
                "price" : "$5",
                "image" : "https://picsum.photos/200"
            }],
    "sweets" : [{
                "name" : "sweets1",
                "price" : "$8",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "sweets2",
                "price" : "$10",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "sweets3",
                "price" : "$10",
                "image" : "https://picsum.photos/200"
            }],
    "doughnuts" : [ {
                "name" : "doughnut1",
                "price" : "$3",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "doughnut2",
                "price" : "$4",
                "image" : "https://picsum.photos/200"
            },
            {
                "name" : "doughnut3",
                "price" : "$5",
                "image" : "https://picsum.photos/200"
            }]
        }
    $(document).ready(function(){
        var source = $("#items-template").html();
        var template = Handlebars.compile(source);
        $("#cards").html(template(data.all));

        $("#all").click(function(){
            $("#cards").html(template(data.all));
        });

        $("#cakes").click(function(){
            $("#cards").html(template(data.cakes));
        });

        $("#cupcakes").click(function(){
            $("#cards").html(template(data.cupcakes));
        });

        $("#sweets").click(function(){
            $("#cards").html(template(data.sweets));
        });

        $("#doughnuts").click(function(){
            $("#cards").html(template(data.doughnuts));
        });
    });


    //for searching the items via search bar
    const searchItems = () => {
        var filter = document.getElementById("itemSearch").value.toUpperCase();
        var cards = document.getElementById("cards");
        var list = cards.getElementsByClassName("extra");
        for(var i=0; i< list.length; i++)
        {
            let a = list[i].getElementsByClassName("card")[0];
            let textvalue = a.textContent || a.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1)
            {
                list[i].style.display = " ";
            }
            else
            {
                list[i].style.display = "none";
            }
        }
    }