// Tabela das oitavas musicais, maiores e menores | Mateus dos Santos Pereira | 18/06/2023

function print(note, choice) {
    
    let notes = [
    ` C`, ` C#`, ` D`, ` D#`, ` E`, ` F`, ` F#`, ` G`, ` G#`, ` A`, ` A#`, ` B`, 
    ` C`, ` C#`, ` D`, ` D#`, ` E`, ` F`, ` F#`, ` G`, ` G#`, ` A`, ` A#`, ` B`
    ];

    let scaleMinor = [0, 2, 3, 5, 7, 8, 10, 12];
    let scaleMajor = [0, 2, 4, 5, 7, 9, 11, 12];
    
    let list = [];

    let accountant = 0;
    let accountantNote = 0;
    
    function errorNote() {
        console.error(`Erro. Digitação não permitida, digite apenas C, D, E, F, G, A ou B.`);
    }
    
    function errorChoice() {
        console.error(`Erro. Digitação não permitida, digite apenas "maior" ou "menor".`);
    }
    
    function minor() {
        let last;
        
        for(let value of scaleMinor) {
            last = notes[value];
            
            list.push(last);
        }

        last = ` e${last}`; // Último item da lista
        list.pop();
        list.push(last);
        
        console.log(`A oitava de${note} menor é formada pelas notas${list}.`);
    }

    function major() {
        let last;
        
        for(let value of scaleMajor) {
            last = notes[value];
            
            list.push(last);
        }

        last = ` e${last}`; // Último item da lista
        list.pop();
        list.push(last);
        
        console.log(`A oitava de${note} maior é formada pelas notas${list}.`);
    }

    function choiceScale() {
        if(choice == `maior`) { major(); } else if(choice == `menor`) { minor(); } else { errorChoice(); }
    }

    function choiceNote() {
        note = ` ${note}`; // Padroniza a nota digitada com a escrita do array notes

        function deleteNotes(numNote) {
            while(accountant < numNote) {
                notes.shift();
            
                accountant++;
            }
            
            choiceScale(); // Depois de deletar
        }

        function positionNote() {
            for(let value of notes) {
                if(value == note) {
                    break;
                }
                accountantNote++;
            }

            deleteNotes(accountantNote);
        }

        function checkNote() {
            if(
                note == ` C` || note == ` C#` || note == ` D` || note == ` D#` || note == ` E` || note == ` F` || 
                note == ` F#` ||  note == ` G` || note == ` G#` || note == ` A` || note == ` A#` || note == ` B`
              ) {
                positionNote();
            } else {
                errorNote();
            }
        }

        checkNote();
    }

    choiceNote();
}

function tableOfNotes() {
    let notesTable = [`C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B`];
    
    let accountant = 0;

    console.log(`Escalas musicais`);

    console.log(``);

    console.log(`Escala das notas maiores:`);

    for(let value of notesTable) {
        print(value, `maior`);
    }

    console.log(``);

    console.log(`Escala das notas menores:`);

    for(let value of notesTable) {
        print(value, `menor`);
    }

    console.log(``);

    console.log(`Escalas musicais | Autor Mateus dos Santos Pereira | 02/10/2023`)
}

tableOfNotes();