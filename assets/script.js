window.onload = function() {
  let database = localStorage.getItem('note').split('\n');
  for (let i = 0; i < database.length; i++) {
    if(database[i].split('').length == 0 || database[i].split(' ').length == 0) {
      return;
    }
    render(database[i]);
  }
}

const add = () => {
  const note = document.getElementById('input').value; 
  if(note.split('').length == 0 || note.split(' ').length == 0) {
    return;
  }
  if(localStorage.getItem('note') !== null) {
    for(var i = 0; i < localStorage.getItem('note').split('\n').length; i++) {
      if(localStorage.getItem('note').split('\n')[i] == note) {
        document.getElementById('input').value = '';
        return;
      }
    }
    localStorage.setItem('note', localStorage.getItem('note') + note + '\n');
  } else {
    localStorage.setItem('note', note + '\n');
  }
  const html = `
    <div class="note" content="${note}">
      ${note}
      <span class="controls">
        <button class="icon icon-green" onclick='check()'>
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="icon icon-red" onclick='remove()'>
          <i class="fa-solid fa-x"></i>
        </button>
      </span>
    </div>
`;
  document.getElementById('notes').innerHTML += html;
  document.getElementById('input').value = '';
}

const render = (note) => {
  const html = `
    <div class="note">
      ${note}
      <span class="controls">
        <button class="icon icon-green" onclick='remove("${note}")'>
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="icon icon-red" onclick='remove("${note}")'>
          <i class="fa-solid fa-x"></i>
        </button>
      </span>
    </div>
`;
  document.getElementById('notes').innerHTML += html;
}

const remove = (note) => {
  const initial = note + '\n';
  localStorage.setItem('note', localStorage.getItem('note').replace(initial, ''));
}