   function Windows() {
    const search=document.querySelector('.search-area')
       window.addEventListener('resize', () => {
           if (window.outerWidth <= 400) {
               search.classList.add('hidden')
           } else {
               search.classList.remove('hidden')
           }
       });
   }

   export default Windows;
