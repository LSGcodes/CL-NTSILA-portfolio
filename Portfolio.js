document.addEventListener("DOMContentLoaded", function() {
    const nameEl = document.querySelector("h1");
    const subtitleEl = document.getElementById("subtitle");
    const nameText = "COLETTE\nNTSILA";
    const subtitleText = "Software Programming (Developer) · Java Specialist · Final(3rd) Year @ TUT · Top 3 in Java Programming";
    nameEl.textContent = "";
    subtitleEl.textContent = "";
    let i = 0, j = 0;

            function typeName() {
                if (i < nameText.length) {
                if (nameText[i] === "\n") {
                    nameEl.innerHTML += "<br>";
                } else {
                    nameEl.innerHTML += nameText[i];
                }
                i++;
                // Create a span for each character to animate "falling"
                const char = document.createElement('span');
                char.textContent = nameText[i] === "\n" ? "" : nameText[i];
                char.style.display = "inline-block";
                char.style.transform = "translateY(-40px)";
                char.style.opacity = "0";
                char.style.transition = "transform 0.4s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.4s";
                if (nameText[i] === "\n") {
                    nameEl.innerHTML += "<br>";
                } else {
                    nameEl.appendChild(char);
                    // Trigger the animation
                    setTimeout(() => {
                        char.style.transform = "translateY(0)";
                        char.style.opacity = "1";
                    }, 10);
                }
                i++;
                setTimeout(typeName,500);
                } else {
                setTimeout(typeSubtitle, 400);
                }
            }

            function typeSubtitle() {
                if (j < subtitleText.length) {
                subtitleEl.textContent += subtitleText[j];
                j++;
                setTimeout(typeSubtitle, 40);
                }
            }

            typeName();
            });

const keys = document.querySelectorAll('.key');
  const percentText = document.querySelector('.percentageDis');
  const descriptionText = document.querySelector('.discription');

  keys.forEach(key => {
    key.addEventListener('mouseenter', () => {
      const percent = key.getAttribute('data-percent');
      const description = key.getAttribute('data-description');

      percentText.textContent = percent + '%';
      descriptionText.textContent = description;
    });

    key.addEventListener('mouseleave', () => {
      percentText.textContent = '';
      descriptionText.textContent = '';
    });
  });         
  
  document.addEventListener('click', (e)=>{
          const btn = e.target.closest('.btn.view');
          if(!btn) return;
          e.preventDefault();
          const src = btn.getAttribute('data-src');
          const modal = document.getElementById('certModal');
          modal.querySelector('.modal-iframe').src = src;
          modal.style.display = 'flex';
          modal.setAttribute('aria-hidden','false');
        });
        document.querySelectorAll('.modal-close').forEach(b=>{
          b.addEventListener('click', ()=>{
            const modal = document.getElementById('certModal');
            modal.querySelector('.modal-iframe').src = '';
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden','true');
          });
        });

        // small JS to open modal with PDF src (place in Portfolio.js if you prefer)
        document.addEventListener('click', (e)=>{
          const btn = e.target.closest('.btn.view');
          if(!btn) return;
          e.preventDefault();
          const src = btn.getAttribute('data-src');
          const modal = document.getElementById('certModal');
          modal.querySelector('.modal-iframe').src = src;
          modal.style.display = 'flex';
          modal.setAttribute('aria-hidden','false');
        });
        document.querySelectorAll('.modal-close').forEach(b=>{
          b.addEventListener('click', ()=>{
            const modal = document.getElementById('certModal');
            modal.querySelector('.modal-iframe').src = '';
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden','true');
          });
        });

// ...existing code...

/* Small drag-to-rotate for the globe (optional) */
(function(){
  const globe = document.getElementById('globe');
  if(!globe) return;
  let dragging = false, lastX=0, lastY=0, rotationX = 10, rotationY = 0;
  globe.addEventListener('pointerdown', (e)=> {
    dragging = true;
    globe.style.cursor = 'grabbing';
    lastX = e.clientX; lastY = e.clientY;
    globe.style.animationPlayState = 'paused';
    e.target.setPointerCapture?.(e.pointerId);
  });
  window.addEventListener('pointermove', (e)=> {
    if(!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    rotationY += dx * 0.25;
    rotationX = Math.max(-40, Math.min(40, rotationX - dy * 0.15));
    globe.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });
  window.addEventListener('pointerup', ()=> {
    if(!dragging) return;
    dragging = false;
    globe.style.cursor = 'grab';
    // Optional: resume automatic spin after short delay
    setTimeout(()=> { globe.style.animationPlayState = 'running'; }, 2500);
  });
})();        