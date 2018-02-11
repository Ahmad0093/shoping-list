function randomColor() {
    var red = Math.floor(Math.random() * 26);
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    return "rgb(" + red + ", " + green + ", " + blue + ")"
}


//add foods to list function
function createFoddList(food) {
    for (var i = 0; i < food.length; i++) {

        $("#test").append($('<li style= "color :' + randomColor() + '"> <span><i class="fa fa-trash"></i></span>' + food[i] + '</li>'));



    }
}

// Create an array of friends.

var mjadara = ["برغل خشن", "ماجي", "عدس بني", "لبن", "بصل", "زيت زيتون", "زيت قلي"];
var sheikMahshi = ["كوسا", "لبن", "لحمة ناعمة", "نشاء", "بيض", "بصل", "ثوم"];
var kofta = ["بصل", "بندوره", "لحمة ناعمة", "ماجي", "خبز", "لبن"];
var bharat = ["ملح", "كزبره", "بهارات لحم", "كمون", "جوزه الطيب", "نعناع يابس", "ماجي", "فلفل أسود", "بهارات كبسه", "ماجي", "ورق غار"];
var kabseh = ["أفخاذ دجاج", "بصل", "زبيب", "قرفه", "ورق غار", "هيل حب", "بهارات كبسه", "ماجي", "رز"];
var ryash = ["كوتليت غنم", "بطاطا", "بندورة", "بصل", "فليفلة", "بهارات لحم", "بقدونس", "زيت زيتون", "خل تفاح", "صوص الفلفل الاسود", "صوص لبن تركي ", "صوص بايانيز شيلي"];
var shakryh = ["رز", "لبن", "ماجي", "نشاء", "دجاج"];
var rozBaszel = ["بازيلاء", "لحمة ناعمة", "لبن", "خيار", "ثوم", "ماجي"];
var lazang = ["ماجي", "جوزة الطيب", "جبنة قشقوان", "طحين", "زبدة", "حليب", "ماجي", "بندورة", "رب البندورة", "بصل", "لحمة ناعمة", "شرحات لازانيا"];
var malfof = ["ملفوف أخضر", "رز", "ماجي", "ثوم", "ليمون", "لحمة ناعمة", "فلفل اسود", "لبن"];
var ma2lobeh = ["ورق غار", "رز", "بطاطا", "بندورة", "بيتنجان", "زيت قلي", "لبن", "خيار", "ثوم", "دجاج"];
var ba6a6awjaj = ["لبن", "خبز", "ليمون", "ثوم", "دجاج", "بطاطا", "زيت زيتون"];
var molo7yh = ["ملوخية ناعمة", "كزبرة ناعمة", "ثوم", "خبز", "ليمون", "رز", "ماجي"];
var maftol = ["ورق غار", "حمص حب", "بصل", "دجاج", "ماجي", "مفتول"];
var frykeh = ["فريكة", "لحمة ناعمة", "لبن", "ماجي", "بصل"];
var bryani = ["ورق غار", "رز", "لبن", "دجاج", "بطاطا", "بهارات برياني"];
var shorabet3adas = ["ماجي", "خبز", "ليمون", "بصل", "عدس احمر"]
    // Append the friends to the DOM.

// createFriendNode( mjadara )


//<li> لبن <span><i class="fa fa-trash"></i></span></li>

//check off specific Todo by clickng
$("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
        $("span", this).toggleClass("delete ")
    })
    //click on the x to delet todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() { $(this).remove() });
    event.stopPropagation();
})
$("select").on("change", function(event) {



    if ($(this).val() === "sheikMahshi") {
        createFoddList(sheikMahshi)
    } else if ($(this).val() === "mjadara") {
        createFoddList(mjadara)
    } else if ($(this).val() === "kofta") {
        createFoddList(kofta)
    } else if ($(this).val() === "kabseh") {
        createFoddList(kabseh)
    } else if ($(this).val() === "bharat") {
        createFoddList(bharat)
    } else if ($(this).val() === "ryash") {
        createFoddList(ryash)
    } else if ($(this).val() === "shr7at") {
        createFoddList(shr7at)
    } else if ($(this).val() === "shakryh") {
        createFoddList(shakryh)
    } else if ($(this).val() === "rozBaszel") {
        createFoddList(rozBaszel)
    } else if ($(this).val() === "lazang") {
        createFoddList(lazang)
    } else if ($(this).val() === "malfof") {
        createFoddList(malfof)
    } else if ($(this).val() === "ma2lobeh") {
        createFoddList(ma2lobeh)
    } else if ($(this).val() === "ba6a6awjaj") {
        createFoddList(ba6a6awjaj)
    } else if ($(this).val() === "molo7yh") {
        createFoddList(molo7yh)
    } else if ($(this).val() === "maftol") {
        createFoddList(maftol)
    } else if ($(this).val() === "frykeh") {
        createFoddList(frykeh)
    } else if ($(this).val() === "bryani") {
        createFoddList(bryani)
    } else if ($(this).val() === "shorabet3adas") {
        createFoddList(shorabet3adas)
    }
    Array.prototype.removeDuplicates = function() {

        var temp = new Array();
        var i, len = this.length;

        this.sort();

        for (i = 0; i < len; i++) {

            if (this[i] == this[i + 1]) {

                continue;
            }

            temp[temp.length] = this[i];

        }

        return temp;
    }
    $(function() {

        var items = [];

        $('li', '#test').each(function(i) {

            var text = $(this).text();
            items[i] = text;


        });

        var filteredItems = items.removeDuplicates();
        var html = '',
            i, len = filteredItems.length;

        for (i = 0; i < len; i += 1) {

            html += '<li li style= "color :' + randomColor() + '"><span><i class="fa fa-trash"></i></span>' + filteredItems[i] + '</li>';


        }

        $('#test').html(html);


    });

})
$(".fa-plus").on("click", function() {
    $(this).toggleClass("rotateButton")
    $("input").slideToggle();
    $("select").slideToggle();
})
$("input").on("keypress", function(event) {
        if (event.which === 13 && $(this).val() != "") {
            $("#test").append($('<li style= "color :red"><span><i class="fa fa-trash"></i></span>' + $("input").val() + '</li>'));
            $(this).val("");
        }
    })
    //function removeDuplicates