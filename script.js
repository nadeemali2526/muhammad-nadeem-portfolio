(() => {
  const word = document.getElementById("typed-word");
  if (!word) return;

  const phrases = [
    "Revenue Cycle Management",
    "Eligibility and Balance Verification",
    "Payment Posting"
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    word.textContent = phrases[0];
    const cursor = document.querySelector(".typing-cursor");
    if (cursor) cursor.hidden = true;
    return;
  }

  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let deleting = true;

  const typeNext = () => {
    const current = phrases[phraseIndex];

    if (deleting) {
      charIndex = Math.max(0, charIndex - 1);
      word.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        window.setTimeout(typeNext, 350);
        return;
      }
      window.setTimeout(typeNext, 38);
      return;
    }

    const nextPhrase = phrases[phraseIndex];
    charIndex = Math.min(nextPhrase.length, charIndex + 1);
    word.textContent = nextPhrase.slice(0, charIndex);

    if (charIndex === nextPhrase.length) {
      deleting = true;
      window.setTimeout(typeNext, 1900);
      return;
    }
    window.setTimeout(typeNext, 62);
  };

  window.setTimeout(typeNext, 2200);
})();