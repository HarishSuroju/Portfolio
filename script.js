function toggleMenu(){
      const menu=document.getElementById('profile-menu');
      menu.style.display=(menu.style.display==='block')? 'none':'block';
    }

    function viewProfile() {
      const imageUrl = "https://cdn.glitch.global/8293398e-86be-4516-bc1f-894ab1d017e8/WhatsApp%20Image%202025-05-10%20at%209.53.09%20AM.jpeg?v=1747015598411";

      const width = 600;
      const height = 600;

      // Calculate center position
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;

      window.open(
        imageUrl,
        "Profile Picture",
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=no`
      );
    }

    function editProfile(){
      alert("edit profile pic is chosen");
    }

    window.addEventListener('click',function(e){
      const menu=document.getElementById('profile-menu');
      if(!e.target.closest('.profile-container')){
        menu.style.display='none';
      }
    });
