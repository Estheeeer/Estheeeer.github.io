// function([string1, string2],target id,[color1,color2])
consoleText(['ITP ITP ITP', 'Keep blogging', 'Emmmmm...', 'my daily life bits'], 'text',['#306c79', '#426c50', '#425e87', '#826044']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  if (!target || !con) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    target.textContent = words[0];
    target.style.color = '#306c79';
    con.hidden = true;
    return;
  }
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (document.hidden) return;

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 80)

  window.setInterval(function() {
    if (document.hidden) return;
    if (visible === true) {
      con.className = 'text-underscore hidden'
      visible = false;

    } else {
      con.className = 'text-underscore'

      visible = true;
    }
  }, 400)
}
