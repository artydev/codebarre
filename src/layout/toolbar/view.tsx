/* @jsx h */
import { h } from "sinuous";

const View = function () {
  return (
    <div>
  <nav>
    <div class="nav-wrapper lime darken-2">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Sass</a></li>
        <li><a href="">Components</a></li>
        <li><a href="">Javascript</a></li>
        <li><a href="">Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="/">Sass</a></li>
    <li><a href="#">Components</a></li>
    <li><a href="#">Javascript</a></li>
    <li><a href="#">Mobile</a></li>
  </ul>
    </div>
  );
};
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");

  
  M.Dropdown.init(elems, {
    // specify options here
  });
});

const MenuBar = View;

export { MenuBar };
