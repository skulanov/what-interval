// Конфигурация нот и интервалов
const NOTES_CONFIG = [
    { name: 'Bb3', displayName: 'Си ♭', file: 'audio/Bb3.wav', midiNote: 58, baseNote: 'B', octave: 3, accidental: 'b' },
    { name: 'B3', displayName: 'Си', file: 'audio/B3.wav', midiNote: 59, baseNote: 'B', octave: 3, accidental: '' },
    { name: 'C4', displayName: 'До', file: 'audio/C4.wav', midiNote: 60, baseNote: 'C', octave: 4, accidental: '' },
    { name: 'C#4', displayName: 'До ♯', file: 'audio/Db4.wav', midiNote: 61, baseNote: 'C', octave: 4, accidental: '#' },
    { name: 'Db4', displayName: 'Ре ♭', file: 'audio/Db4.wav', midiNote: 61, baseNote: 'D', octave: 4, accidental: 'b' },
    { name: 'D4', displayName: 'Ре', file: 'audio/D4.wav', midiNote: 62, baseNote: 'D', octave: 4, accidental: '' },
    { name: 'D#4', displayName: 'Ре ♯', file: 'audio/Eb4.wav', midiNote: 63, baseNote: 'D', octave: 4, accidental: '#' },
    { name: 'Eb4', displayName: 'Ми ♭', file: 'audio/Eb4.wav', midiNote: 63, baseNote: 'E', octave: 4, accidental: 'b' },
    { name: 'E4', displayName: 'Ми', file: 'audio/E4.wav', midiNote: 64, baseNote: 'E', octave: 4, accidental: '' },
    { name: 'F4', displayName: 'Фа', file: 'audio/F4.wav', midiNote: 65, baseNote: 'F', octave: 4, accidental: '' },
    { name: 'F#4', displayName: 'Фа ♯', file: 'audio/Gb4.wav', midiNote: 66, baseNote: 'F', octave: 4, accidental: '#' },
    { name: 'Gb4', displayName: 'Соль ♭', file: 'audio/Gb4.wav', midiNote: 66, baseNote: 'G', octave: 4, accidental: 'b' },
    { name: 'G4', displayName: 'Соль', file: 'audio/G4.wav', midiNote: 67, baseNote: 'G', octave: 4, accidental: '' },
    { name: 'G#4', displayName: 'Соль ♯', file: 'audio/Ab4.wav', midiNote: 68, baseNote: 'G', octave: 4, accidental: '#' },
    { name: 'Ab4', displayName: 'Ля ♭', file: 'audio/Ab4.wav', midiNote: 68, baseNote: 'A', octave: 4, accidental: 'b' },
    { name: 'A4', displayName: 'Ля', file: 'audio/A4.wav', midiNote: 69, baseNote: 'A', octave: 4, accidental: '' },
    { name: 'A#4', displayName: 'Ля ♯', file: 'audio/Bb4.wav', midiNote: 70, baseNote: 'A', octave: 4, accidental: '#' },
    { name: 'Bb4', displayName: 'Си ♭', file: 'audio/Bb4.wav', midiNote: 70, baseNote: 'B', octave: 4, accidental: 'b' },
    { name: 'B4', displayName: 'Си', file: 'audio/B4.wav', midiNote: 71, baseNote: 'B', octave: 4, accidental: '' },
    { name: 'C5', displayName: 'До', file: 'audio/C5.wav', midiNote: 72, baseNote: 'C', octave: 5, accidental: '' },
    { name: 'C#5', displayName: 'До ♯', file: 'audio/Db5.wav', midiNote: 73, baseNote: 'C', octave: 5, accidental: '#' },
    { name: 'Db5', displayName: 'Ре ♭', file: 'audio/Db5.wav', midiNote: 73, baseNote: 'D', octave: 5, accidental: 'b' }
];

// Только натуральные ноты (для простого режима)
const NATURAL_NOTES = NOTES_CONFIG.filter(note => note.accidental === '');

const INTERVALS = [
    { semitones: 0, name: 'Унисон (прима)', steps: 1 },
    { semitones: 1, name: 'Малая секунда', steps: 2 },
    { semitones: 2, name: 'Большая секунда', steps: 2 },
    { semitones: 3, name: 'Малая терция', steps: 3 },
    { semitones: 4, name: 'Большая терция', steps: 3 },
    { semitones: 5, name: 'Кварта (чистая)', steps: 4 },
    { semitones: 6, name: 'Тритон', steps: 5 },
    { semitones: 7, name: 'Квинта (чистая)', steps: 5 },
    { semitones: 8, name: 'Малая секста', steps: 6 },
    { semitones: 9, name: 'Большая секста', steps: 6 },
    { semitones: 10, name: 'Малая септима', steps: 7 },
    { semitones: 11, name: 'Большая септима', steps: 7 },
    { semitones: 12, name: 'Октава', steps: 8 }
];

// Порядок нот в октаве (для вычисления ступеней)
const NOTE_ORDER = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Карта позиций нот на стане (Y координата) - базовые ноты без учета альтераций
// Линии стана: 70 (F5), 90 (D5), 110 (B4), 130 (G4), 150 (E4)
const NOTE_POSITIONS = {
    'C4': 170,   // первая добавочная линия под станом
    'D4': 160,   // сразу под нижней линией стана (без добавочных линий)
    'E4': 150,   // первая линия снизу (нижняя линия стана)
    'F4': 140,   // между первой и второй линией
    'G4': 130,   // вторая линия
    'A4': 120,   // между второй и третьей
    'B4': 110,   // третья линия (средняя)
    'C5': 100,   // между третьей и четвертой
    'D5': 90,    // четвертая линия
    'E5': 80,    // между четвертой и пятой
    'F5': 70,    // пятая линия сверху
    'G5': 60,    // над станом
    'A5': 50,    // над станом
    'B3': 180    // под первой добавочной линией
};

// Получить позицию Y для ноты (по базовой ноте)
function getNoteYPosition(noteObj) {
    const baseNoteWithOctave = noteObj.baseNote + noteObj.octave;
    return NOTE_POSITIONS[baseNoteWithOctave] || 140;
}

// Приложение
class IntervalTrainer {
    constructor() {
        this.currentExercise = null;
        this.stats = { correct: 0, total: 0 };
        this.answered = false;
        this.mode = 'simple'; // 'simple' или 'complex'
        this.displayMode = 'visual'; // 'visual' или 'ear'
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.attachEventListeners();
        this.generateNewExercise();
    }

    cacheElements() {
        this.elements = {
            playFirst: document.getElementById('play-first'),
            playSecond: document.getElementById('play-second'),
            playBoth: document.getElementById('play-both'),
            intervalButtons: document.querySelectorAll('.interval-btn'),
            newExercise: document.getElementById('new-exercise'),
            resultMessage: document.getElementById('result-message'),
            statistics: document.getElementById('statistics'),
            noteNames: document.getElementById('note-names'),
            notesGroup: document.getElementById('notes-group'),
            staffContainer: document.querySelector('.staff-container'),
            modeSimple: document.getElementById('mode-simple'),
            modeComplex: document.getElementById('mode-complex'),
            modeDesc: document.getElementById('mode-desc'),
            modeVisual: document.getElementById('mode-visual'),
            modeEar: document.getElementById('mode-ear'),
            displayDesc: document.getElementById('display-desc')
        };
    }

    attachEventListeners() {
        this.elements.playFirst.addEventListener('click', () => this.playNote('first'));
        this.elements.playSecond.addEventListener('click', () => this.playNote('second'));
        this.elements.playBoth.addEventListener('click', () => this.playNote('both'));
        
        this.elements.intervalButtons.forEach(btn => {
            btn.addEventListener('click', () => this.checkAnswer(parseInt(btn.dataset.semitones)));
        });

        this.elements.newExercise.addEventListener('click', () => this.generateNewExercise());
        
        // Переключатели режима сложности
        this.elements.modeSimple.addEventListener('click', () => this.switchMode('simple'));
        this.elements.modeComplex.addEventListener('click', () => this.switchMode('complex'));
        
        // Переключатели режима отображения
        this.elements.modeVisual.addEventListener('click', () => this.switchDisplayMode('visual'));
        this.elements.modeEar.addEventListener('click', () => this.switchDisplayMode('ear'));
    }

    switchMode(mode) {
        this.mode = mode;
        
        // Обновить кнопки
        if (mode === 'simple') {
            this.elements.modeSimple.classList.add('active');
            this.elements.modeComplex.classList.remove('active');
            this.elements.modeDesc.textContent = 'В простом режиме первая нота всегда без диезов и бемолей';
        } else {
            this.elements.modeSimple.classList.remove('active');
            this.elements.modeComplex.classList.add('active');
            this.elements.modeDesc.textContent = 'В сложном режиме первая нота может быть с диезами и бемолями';
        }
        
        // Сгенерировать новое упражнение
        this.generateNewExercise();
    }

    switchDisplayMode(displayMode) {
        this.displayMode = displayMode;
        
        // Обновить кнопки
        if (displayMode === 'visual') {
            this.elements.modeVisual.classList.add('active');
            this.elements.modeEar.classList.remove('active');
            this.elements.displayDesc.textContent = 'Нотный стан показан';
            this.elements.staffContainer.classList.remove('hidden');
        } else {
            this.elements.modeVisual.classList.remove('active');
            this.elements.modeEar.classList.add('active');
            this.elements.displayDesc.textContent = 'В режиме "На слух" нотный стан скрыт';
            this.elements.staffContainer.classList.add('hidden');
        }
    }

    generateNewExercise() {
        let note1Raw, note2Raw;
        let attempts = 0;
        const maxAttempts = 100;
        
        // Шаг 1: Генерируем две случайные ноты
        while (attempts < maxAttempts) {
            attempts++;
            
            if (this.mode === 'simple') {
                // ПРОСТОЙ РЕЖИМ: первая нота всегда натуральная
                note1Raw = NATURAL_NOTES[Math.floor(Math.random() * NATURAL_NOTES.length)];
            } else {
                // СЛОЖНЫЙ РЕЖИМ: первая нота может быть с альтерациями
                note1Raw = NOTES_CONFIG[Math.floor(Math.random() * NOTES_CONFIG.length)];
            }
            
            note2Raw = NOTES_CONFIG[Math.floor(Math.random() * NOTES_CONFIG.length)];
            
            // Проверка: вторая нота выше или равна первой И интервал <= 12 полутонов
            const semitonesRaw = note2Raw.midiNote - note1Raw.midiNote;
            if (semitonesRaw >= 0 && semitonesRaw <= 12) {
                break;
            }
        }
        
        // Шаг 2: Корректируем вторую ноту для получения правильного интервала
        const correctedPair = this.correctSecondNote(note1Raw, note2Raw);
        
        const note1 = correctedPair.note1;
        const note2 = correctedPair.note2;
        const semitones = note2.midiNote - note1.midiNote;

        this.currentExercise = { note1, note2, semitones };
        this.answered = false;
        
        this.displayNotes();
        this.clearResult();
        this.enableIntervalButtons();
        this.playNote('both');
    }
    
    /**
     * НОВЫЙ АЛГОРИТМ: Корректирует вторую ноту для получения правильного интервала
     * 
     * Алгоритм:
     * 1. Считаем количество полутонов между нотами
     * 2. Определяем интервал по количеству полутонов
     * 3. Из интервала получаем количество ступеней
     * 4. Определяем правильную вторую ноту по ступеням от первой
     * 5. Добавляем нужную альтерацию (♯ или ♭), чтобы получить эквивалент
     */
    correctSecondNote(note1, note2Raw) {
        // Шаг 1: Считаем количество полутонов между исходными нотами
        const semitones = note2Raw.midiNote - note1.midiNote;
        
        // Шаг 2: Определяем интервал по количеству полутонов
        const interval = INTERVALS.find(i => i.semitones === semitones);
        if (!interval) {
            // Если интервал не найден, возвращаем как есть
            return { note1, note2: note2Raw };
        }
        
        // Шаг 3: Получаем количество ступеней из интервала
        const requiredSteps = interval.steps;
        
        // Шаг 4: Определяем правильную базовую ноту для второй ноты
        const correctBaseNote = this.getNoteBySteps(note1.baseNote, requiredSteps);
        
        // Шаг 5: Определяем октаву для второй ноты
        const correctOctave = this.calculateCorrectOctave(note1, correctBaseNote, requiredSteps);
        
        // Шаг 6: Вычисляем нужное значение MIDI для правильной ноты
        const correctBaseMidi = this.getMidiForNote(correctBaseNote, correctOctave);
        
        // Шаг 7: Вычисляем разницу с исходной второй нотой
        const midiDifference = note2Raw.midiNote - correctBaseMidi;
        
        // Шаг 8: Определяем нужную альтерацию
        let accidental = '';
        let displayName = '';
        
        if (midiDifference === 0) {
            // Нет альтерации
            accidental = '';
            displayName = this.getRussianNoteName(correctBaseNote);
        } else if (midiDifference === 1) {
            // Нужен диез
            accidental = '#';
            displayName = `${this.getRussianNoteName(correctBaseNote)} ♯`;
        } else if (midiDifference === -1) {
            // Нужен бемоль
            accidental = 'b';
            displayName = `${this.getRussianNoteName(correctBaseNote)} ♭`;
        } else {
            // Если разница больше 1 полутона, что-то пошло не так
            // Возвращаем исходную вторую ноту
            return { note1, note2: note2Raw };
        }
        
        // Шаг 9: Создаём скорректированную вторую ноту
        const correctedNote2 = {
            name: `${correctBaseNote}${accidental}${correctOctave}`,
            displayName: displayName,
            file: note2Raw.file, // Используем тот же аудио файл (энгармонический эквивалент)
            midiNote: note2Raw.midiNote,
            baseNote: correctBaseNote,
            octave: correctOctave,
            accidental: accidental
        };
        
        return { note1, note2: correctedNote2 };
    }
    
    /**
     * Получить ноту на заданном количестве ступеней от базовой ноты
     */
    getNoteBySteps(baseNote, steps) {
        const index = NOTE_ORDER.indexOf(baseNote);
        if (index === -1) return baseNote;
        
        // steps = 1 означает ту же ноту (унисон)
        // steps = 2 означает следующую ноту (секунда)
        const newIndex = (index + steps - 1) % 7;
        return NOTE_ORDER[newIndex];
    }
    
    /**
     * Вычислить правильную октаву для второй ноты
     */
    calculateCorrectOctave(note1, correctBaseNote, steps) {
        const index1 = NOTE_ORDER.indexOf(note1.baseNote);
        const index2 = NOTE_ORDER.indexOf(correctBaseNote);
        
        let octave = note1.octave;
        
        // Если вторая нота "ниже" первой по алфавиту, значит перешли в следующую октаву
        if (index2 < index1 || (index2 === index1 && steps > 1)) {
            octave++;
        }
        
        return octave;
    }
    
    /**
     * Получить MIDI номер для натуральной ноты (без альтераций)
     */
    getMidiForNote(baseNote, octave) {
        // C4 = 60 (стандартная средняя нота)
        const baseMidiC4 = 60;
        const noteOffsets = {
            'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11
        };
        
        const offset = noteOffsets[baseNote] || 0;
        const octaveOffset = (octave - 4) * 12;
        
        return baseMidiC4 + offset + octaveOffset;
    }
    
    /**
     * Получить русское название ноты
     */
    getRussianNoteName(baseNote) {
        const names = {
            'C': 'До', 'D': 'Ре', 'E': 'Ми', 'F': 'Фа',
            'G': 'Соль', 'A': 'Ля', 'B': 'Си'
        };
        return names[baseNote] || baseNote;
    }

    displayNotes() {
        const { note1, note2 } = this.currentExercise;
        
        // Обновляем текстовые названия нот
        this.elements.noteNames.textContent = `${note1.displayName} – ${note2.displayName}`;
        
        // Очищаем предыдущие ноты
        this.elements.notesGroup.innerHTML = '';
        
        // Рисуем первую ноту
        this.drawNote(note1, 250);
        
        // Рисуем вторую ноту
        this.drawNote(note2, 450);
    }

    drawNote(noteObj, xPosition) {
        const svgNS = "http://www.w3.org/2000/svg";
        const yPosition = getNoteYPosition(noteObj);
        
        // Определяем, нужна ли добавочная линия
        const baseNoteWithOctave = noteObj.baseNote + noteObj.octave;
        
        if (baseNoteWithOctave === 'C4' || baseNoteWithOctave === 'B3') {
            // Одна добавочная линия под станом (для C4 и B3)
            const ledger = document.createElementNS(svgNS, 'line');
            ledger.setAttribute('class', 'ledger-line');
            ledger.setAttribute('x1', xPosition - 20);
            ledger.setAttribute('y1', 170);
            ledger.setAttribute('x2', xPosition + 20);
            ledger.setAttribute('y2', 170);
            this.elements.notesGroup.appendChild(ledger);
        }
        // D4 не нуждается в добавочных линиях (сразу под нижней линией стана)
        
        // Рисуем знак альтерации (диез или бемоль), если есть
        if (noteObj.accidental === 'b') {
            // Бемоль
            const flat = document.createElementNS(svgNS, 'text');
            flat.setAttribute('x', xPosition - 25);
            flat.setAttribute('y', yPosition + 5);
            flat.setAttribute('font-size', '24');
            flat.setAttribute('font-family', 'serif');
            flat.setAttribute('fill', '#333');
            flat.textContent = '♭';
            this.elements.notesGroup.appendChild(flat);
        } else if (noteObj.accidental === '#') {
            // Диез
            const sharp = document.createElementNS(svgNS, 'text');
            sharp.setAttribute('x', xPosition - 25);
            sharp.setAttribute('y', yPosition + 5);
            sharp.setAttribute('font-size', '24');
            sharp.setAttribute('font-family', 'serif');
            sharp.setAttribute('fill', '#333');
            sharp.textContent = '♯';
            this.elements.notesGroup.appendChild(sharp);
        }
        
        // Рисуем головку ноты (эллипс)
        const noteHead = document.createElementNS(svgNS, 'ellipse');
        noteHead.setAttribute('class', 'note-circle');
        noteHead.setAttribute('cx', xPosition);
        noteHead.setAttribute('cy', yPosition);
        noteHead.setAttribute('rx', 12);
        noteHead.setAttribute('ry', 9);
        this.elements.notesGroup.appendChild(noteHead);
        
        // Рисуем штиль (вертикальная линия)
        const stem = document.createElementNS(svgNS, 'line');
        stem.setAttribute('class', 'note-circle');
        stem.setAttribute('x1', xPosition + 11);
        stem.setAttribute('y1', yPosition);
        stem.setAttribute('x2', xPosition + 11);
        stem.setAttribute('y2', yPosition - 50);
        this.elements.notesGroup.appendChild(stem);
        
        // Подпись ноты
        const text = document.createElementNS(svgNS, 'text');
        text.setAttribute('class', 'note-text');
        text.setAttribute('x', xPosition);
        text.setAttribute('y', yPosition + 45);
        text.textContent = noteObj.displayName;
        this.elements.notesGroup.appendChild(text);
    }

    async playNote(mode) {
        const { note1, note2 } = this.currentExercise;

        try {
            if (mode === 'first') {
                await this.playAudioFile(note1.file);
            } else if (mode === 'second') {
                await this.playAudioFile(note2.file);
            } else if (mode === 'both') {
                // Воспроизводим обе ноты одновременно (гармонический интервал)
                await this.playAudioFiles([note1.file, note2.file]);
            }
        } catch (error) {
            console.error('Ошибка воспроизведения:', error);
        }
    }

    playAudioFile(file) {
        return new Promise((resolve, reject) => {
            const audio = new Audio(file);
            audio.addEventListener('ended', resolve);
            audio.addEventListener('error', reject);
            audio.play().catch(reject);
        });
    }

    playAudioFiles(files) {
        // Воспроизводим несколько файлов одновременно
        const promises = files.map(file => {
            const audio = new Audio(file);
            return audio.play();
        });
        return Promise.all(promises);
    }

    checkAnswer(selectedSemitones) {
        if (this.answered) return;
        
        this.answered = true;
        this.stats.total++;
        
        const correctSemitones = this.currentExercise.semitones;
        const correctInterval = INTERVALS.find(i => i.semitones === correctSemitones);
        const selectedInterval = INTERVALS.find(i => i.semitones === selectedSemitones);
        
        if (selectedSemitones === correctSemitones) {
            // Правильный ответ
            this.stats.correct++;
            this.showResult(true, correctInterval);
        } else {
            // Неправильный ответ
            this.showResult(false, correctInterval, selectedInterval);
        }
        
        this.updateStatistics();
        this.disableIntervalButtons();
    }

    showResult(isCorrect, correctInterval, selectedInterval = null) {
        const message = this.elements.resultMessage;
        message.className = 'result-message';
        
        if (isCorrect) {
            message.classList.add('success');
            message.innerHTML = `✓ Правильно! <br>${correctInterval.name} (${correctInterval.semitones} ${this.getSemitonesWord(correctInterval.semitones)})`;
        } else {
            message.classList.add('error');
            message.innerHTML = `✗ Неправильно!<br>Правильный ответ: ${correctInterval.name} (${correctInterval.semitones} ${this.getSemitonesWord(correctInterval.semitones)})`;
        }

        // Подсветить правильную/неправильную кнопку
        this.elements.intervalButtons.forEach(btn => {
            const semitones = parseInt(btn.dataset.semitones);
            if (semitones === correctInterval.semitones) {
                btn.classList.add('correct');
            } else if (selectedInterval && semitones === selectedInterval.semitones) {
                btn.classList.add('incorrect');
            }
        });
    }

    getSemitonesWord(count) {
        if (count === 1) return 'полутон';
        if (count >= 2 && count <= 4) return 'полутона';
        return 'полутонов';
    }

    clearResult() {
        this.elements.resultMessage.textContent = '';
        this.elements.resultMessage.className = 'result-message';
        
        // Убрать подсветку кнопок
        this.elements.intervalButtons.forEach(btn => {
            btn.classList.remove('correct', 'incorrect', 'selected');
        });
    }

    updateStatistics() {
        const { correct, total } = this.stats;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        this.elements.statistics.textContent = `Правильно: ${correct} из ${total} (${percentage}%)`;
    }

    enableIntervalButtons() {
        this.elements.intervalButtons.forEach(btn => {
            btn.disabled = false;
        });
    }

    disableIntervalButtons() {
        this.elements.intervalButtons.forEach(btn => {
            btn.disabled = true;
        });
    }
}

// Инициализация приложения при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new IntervalTrainer();
});
