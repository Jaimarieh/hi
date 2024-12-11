document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  // Get references to elements
  const phone = document.getElementById('phone');
  const fashion = document.querySelector('.fashion');
  const man = document.querySelector('.man');
  const dog = document.querySelector('.girl'); // Corrected class name from '.girl' to '.dog'
  const videoContainer = document.getElementById("video-container");
  const video = document.getElementById("video");
  const ringtone = document.getElementById("ringtone");
  const clothes = document.querySelectorAll(".clothing-item");

  if (currentPath.includes('room.html')) {
    if (phone) {
      window.addEventListener("load", () => {
        ringtone.play();
      });
      phone.classList.add('pulse-animation');
      phone.addEventListener('click', function () {
        ringtone.pause();
        window.location.href = '2room.html';
      
      });
    }
  }

  // Room2 page (room2.html)
  if (currentPath.includes('room2.html')) {
    if (phone) {
      phone.classList.add('pulse-animation');
      phone.addEventListener('click', function () {
        window.location.href = 'room3.html';
      });
    }
  }

  // Scene3 page (street.html)
  if (currentPath.includes('street.html')) {
    if (man) {
      man.classList.add('pulse-animation');
      man.addEventListener('click', function () {
        window.location.href = 'man.html'; // Redirect to man.html
      });
    }

    if (dog) { // Corrected from 'girl' to 'dog'
      dog.classList.add('pulse-animation');
      dog.addEventListener('click', function () {
        window.location.href = 'dog.html'; // Redirect to dog.html
      });
    }

    if (fashion) {
      fashion.classList.add('pulse-animation');
      fashion.addEventListener('click', function () {
        window.location.href = 'fashion.html'; // Redirect to fashion.html
      });
    }
  }

  // Scene4 page (street2.html)
  if (currentPath.includes('street2.html')) {
    if (man) {
      man.classList.add('pulse-animation');
      man.addEventListener('click', function () {
        window.location.href = 'man.html'; // Redirect to man.html
      });
    }

    if (dog) { // Corrected from 'girl' to 'dog'
      dog.classList.add('pulse-animation');
      dog.addEventListener('click', function () {
        window.location.href = 'dog.html'; // Redirect to dog.html
      });
    }

    if (fashion) {
      fashion.classList.add('pulse-animation');
      fashion.addEventListener('click', function () {
        window.location.href = 'fashion.html'; // Redirect to fashion.html
      });
    }
  }

   if (currentPath.includes('room4.html')) {
    if (phone) {
      window.addEventListener("load", () => {
        ringtone.play();
      });
      phone.classList.add('pulse-animation');
      phone.addEventListener('click', function () {
        ringtone.pause();
        window.location.href = 'ending.html';
      
      });
    }
  }

  if (currentPath.includes('room3.html')) {
    if (phone) {
      phone.classList.add('pulse-animation');
      phone.addEventListener('click', function () {
        videoContainer.style.display = "block";
        video.play();
      });
    }
  }

  

  // Restart functionality
  const restart = document.querySelector('.restart');
  if (restart) {
    restart.addEventListener('click', function (event) {
      event.preventDefault();
      const isRestartConfirmed = window.confirm("Are you sure you want to restart from the beginning?");
      if (isRestartConfirmed) {
        window.location.href = "index.html";
      }
    });
  }
});

  
  
