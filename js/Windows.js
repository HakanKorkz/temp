   function Windows() {
       window.addEventListener('resize', () => {
           if (window.outerWidth <= 400) {
               console.log('devam edilecek...')
           }
       });
   }

   export default Windows;
