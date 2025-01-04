window.addEventListener('scroll', () => {
    const robot = document.getElementById('robot');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    
    const section2Rect = section2.getBoundingClientRect();
    const section3Rect = section3.getBoundingClientRect();
  
    if (section2Rect.top < window.innerHeight / 2 && section2Rect.bottom > window.innerHeight / 2) {
      // Move robot to Section 2 position
      robot.style.left = '10%';
      robot.style.top = '80%';
    } else if (section3Rect.top < window.innerHeight / 2 && section3Rect.bottom > window.innerHeight / 2) {
      // Move robot to Section 3 position
      robot.style.left = '90%';
      robot.style.top = '50%';
    } else {
      // Default position (Section 1)
      robot.style.left = '50%';
      robot.style.top = '50%';
    }
  });
  