$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.collapsible-li:first').addClass('active');
    $('.collapsible').collapsible();
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $('input#username, input#password, input#confirm-password, input#first_name, input#last_name').characterCounter();
    $('select').formSelect();
    $('li').filter(function () {
        return $(this).text().trim() === ''
    }).remove();
    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = {"border-bottom": "1px solid #4527a0", "box-shadow": "0 1px 0 0 #4527a0"};
        let classInvalid = {"border-bottom": "1px solid #ad1457", "box-shadow": "0 1px 0 0 #ad1457"};
        if ($("select.validate").prop("required")) {
            $("select.validate").css({"display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute"});
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () {})) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(69, 39, 160)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
    $('.delete-btn').click(function () {
        var checkstr = confirm('are you sure you want to delete this recipe?');
        if (checkstr == true) {
            // do your code
        } else {
            return false;
        }
    });
});


