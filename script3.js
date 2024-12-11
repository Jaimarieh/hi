$(function () {
  $(".card").each(function () {
      let isTouching = false;
      let offsetX, offsetY;

      $(this).on("mousedown touchstart", function (event) {
          event.preventDefault();
          isTouching = true;

          const startX = event.type === "mousedown" ? event.pageX : event.originalEvent.touches[0].pageX;
          const startY = event.type === "mousedown" ? event.pageY : event.originalEvent.touches[0].pageY;

          const offset = $(this).position();
          offsetX = startX - offset.left;
          offsetY = startY - offset.top;

          $(this).css("z-index", 1000); // Bring to front
      });

      $(document).on("mousemove touchmove", (event) => {
          if (!isTouching) return;

          const moveX = event.type === "mousemove" ? event.pageX : event.originalEvent.touches[0].pageX;
          const moveY = event.type === "mousemove" ? event.pageY : event.originalEvent.touches[0].pageY;

          $(this).css({
              position: "absolute",
              left: moveX - offsetX,
              top: moveY - offsetY,
          });
      });

      $(document).on("mouseup touchend", () => {
          isTouching = false;
      });
  });
});