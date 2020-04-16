var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  
  
var $el = $("#overlay");

$el.ripple({
				maxDiameter: "10%",
				adaptPos: false
		})
		.on("mousemove touchmove", function(e) {
				$.each(getChangedCoords(e), function(i, coords) { //multi touch
						$el.trigger($.Event("mousedown", {
								pageX: coords[0],
								pageY: coords[1]
						}));
						$(document).trigger("mouseup"); //release ripple
				});
		});

var isTouchEvent = function(e) {
				return e.type.startsWith("touch");
				// return e.originalEvent.constructor.name == "TouchEvent";
		},
		getChangedCoords = function(e) {
				//returns array of arrays with the coordinates currently active of either touch or mouse events
				var coords = [];
				if (isTouchEvent(e)) {
						$.each(e.originalEvent.changedTouches, function(i, o) {
								coords.push([o.pageX, o.pageY]);
						});
				} else {
						coords.push([e.pageX, e.pageY])
				}
				return coords;
		};

//intro ripple
$("body")
		.ripple()
		.trigger($.Event("mousedown", {
				pageX: 150,
				pageY: 150
		}))
		.ripple({
				//remove user interaction for intro ripple
				unbind: true
		});

setTimeout(function() {
		//remove intro ripple element for performance
		$("body").addClass("is-done")
				.children(".legitRipple-ripple").remove();
}, 0.125 * 7 * 1000); //intro ripple's animation-duration
}