
var toggleActive = function(e) {
  var target = e.target;
  var parent = target.parentNode;
  var children = Array.prototype.slice.call(parent.children);
  children.forEach(function(n) {
    n.classList.remove('is-active');
  });
  target.classList.add('is-active');
}

var setStillMode = function(e) {
  toggleActive(e);

}
var setVideoMode = function(e) {
  toggleActive(e);

}
var setTextMode = function(e) {
  toggleActive(e);

}
