$(document).ready(function () {
    let size = 200;
    let colors = ["red", "green", "blue"];
    let colorIndex = 0;

    $("#balloon").on("click", function () {
        size += 10;

        if (size > 420) {
            size = 200;
        }

        colorIndex = (colorIndex + 1) % 3;

        $(this).css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });

    $("#balloon").on("mouseleave", function () {
        if (size > 200) {
            size -= 5;
        }

        colorIndex = (colorIndex - 1 + 3) % 3;

        $(this).css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });
});
