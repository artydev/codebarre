const ready = function (fn: any) {
    const completed = () => {
      document.removeEventListener("DOMContentLoaded", completed);
      window.removeEventListener("load", completed);
      fn();
    };
    if (document.readyState !== "loading") {
      setTimeout(fn);
    } else {
      document.addEventListener("DOMContentLoaded", completed);
      window.addEventListener("load", completed);
    }
  };
  
  export {  ready };