document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const addNoteButton = document.getElementById('add-note');
    const notesList = document.getElementById('notes-list');
    const offlineStatus = document.getElementById('offline-status');
  
    // Загрузка заметок из localStorage
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    let editingIndex = null; // Индекс редактируемой заметки
  
    // Функция отображения заметок
    function renderNotes() {
      notesList.innerHTML = '';
      notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
  
        // Кнопка "Редактировать"
        const editButton = document.createElement('button');
        editButton.textContent = 'Редактировать';
        editButton.onclick = () => editNote(index);
  
        // Кнопка "Удалить"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => deleteNote(index);
  
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        notesList.appendChild(li);
      });
    }
  
    // Функция добавления заметки
    function addNote() {
      const noteText = noteInput.value.trim();
      if (noteText) {
        if (editingIndex !== null) {
          // Если идёт редактирование, обновляем существующую заметку
          notes[editingIndex] = noteText;
          editingIndex = null; // Сбрасываем режим редактирования
          addNoteButton.textContent = 'Добавить'; // Возвращаем текст кнопки
        } else {
          // Иначе добавляем новую заметку
          notes.push(noteText);
        }
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        renderNotes();
      }
    }
  
    // Функция редактирования заметки
    function editNote(index) {
      const noteText = notes[index];
      noteInput.value = noteText; // Заполняем поле ввода текстом заметки
      editingIndex = index; // Устанавливаем индекс редактируемой заметки
      addNoteButton.textContent = 'Сохранить'; // Меняем текст кнопки
    }
  
    // Функция удаления заметки
    function deleteNote(index) {
      notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
      renderNotes();
    }
  
    // Обработка кнопки "Добавить/Сохранить"
    addNoteButton.addEventListener('click', addNote);
  
    // Проверка состояния интернета
    window.addEventListener('online', () => offlineStatus.style.display = 'none');
    window.addEventListener('offline', () => offlineStatus.style.display = 'block');
  
    // Отображение заметок при загрузке
    renderNotes();
  
    // Проверка начального состояния сети
    if (!navigator.onLine) {
      offlineStatus.style.display = 'block';
    }
  });