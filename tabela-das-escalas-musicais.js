// Tabela das Escalas Musicais | 13/05/2024

function calculate() {
    let notes = [
        ` C`, ` C#`, ` D`, ` D#`, ` E`, ` F`, ` F#`, ` G`, ` G#`, ` A`, ` A#`, ` B`, 
        ` C`, ` C#`, ` D`, ` D#`, ` E`, ` F`, ` F#`, ` G`, ` G#`, ` A`, ` A#`, ` B`
    ];

    let scaleMinor = [0, 2, 3, 5, 7, 8, 10, 12];
    let scaleMajor = [0, 2, 4, 5, 7, 9, 11, 12];

    let count = 0;

    function minor(semitone) {
        let list = [];
        let first = notes[semitone];
        let last;
        
        scaleMinor.forEach((interval) => {
            last = notes[interval + semitone];
            list.push(`${notes[interval]}`);
        });

        list.pop();
        list.push(` e${last}`)
        
        return `<p>A oitava de${first} menor é formada pelas notas${list}.</p>`;
    }

    function major(semitone) {
        let list = [];
        let first = notes[semitone];
        let last;
        
        scaleMajor.forEach((interval) => {
            last = notes[interval + semitone];
            list.push(`${notes[interval]}`);
        });

        list.pop();
        list.push(` e${last}`)
        
        return `<p>A oitava de${first} maior é formada pelas notas${list}.</p>`;
    }

    function writeMinor(count) {
        let text = `count`;
        // while(count < 12) {
        //     text = text + minor(count);
        //     count++;
        // }
        return 3;
    }

    function writeMajor(count) {
        let text = `count`,
        // while(count < 12) {
        //     text = text + major(count);
        //     count++;
        // }
        return 2;
    }
    
    async function write() {
        let text = `teste`;
        return text;
    };

    return write();
}

function print() {
    return calculate()
}

document.body.innerHTML = ``;
document.write(print());