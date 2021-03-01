export function observerTrigger(target, animationClassName, rootMarginInPx) {

  const config = {
    rootMargin: rootMarginInPx
  };
  
  let observer = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        // Trigger Animation
        entry.target.classList.add(animationClassName);
        // make that the animation only works once
        imgObserver.unobserve(entry.target); 
      } else {
        entry.target.classList.remove(animationClassName);
      }

      //Lazy Loading
      if (entry.isIntersecting && entry.target.classList.contains("lazy-img")) {
          console.log("lazy image:", entry.target);
          entry.target.src = entry.target.dataset.src // problem
          entry.target.classList.remove("lazy-img");
          imgObserver.unobserve(entry.target);
        }
    });
  }, config);
  
  // Run the observer
  if (target instanceof NodeList) { // Run for a list of elements
    target.forEach(image => {
      observer.observe(image);
    });
  } else {
    observer.observe(target); // Run for only one element
  }
}