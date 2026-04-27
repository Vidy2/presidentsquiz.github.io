const presidents = [
    { years: "1789-1793", name: "George Washington", guessed: false },
    { years: "1793-1797", name: "George Washington", guessed: false },
    { years: "1797-1801", name: "John Adams", guessed: false },
    { years: "1801-1805", name: "Thomas Jefferson", guessed: false },
    { years: "1805-1809", name: "Thomas Jefferson", guessed: false },
    { years: "1809-1813", name: "James Madison", guessed: false },
    { years: "1813-1817", name: "James Madison", guessed: false },
    { years: "1817-1821", name: "James Monroe", guessed: false },
    { years: "1821-1825", name: "James Monroe", guessed: false },
    { years: "1825-1829", name: "John Quincy Adams", guessed: false },
    { years: "1829-1833", name: "Andrew Jackson", guessed: false },
    { years: "1833-1837", name: "Andrew Jackson", guessed: false },
    { years: "1837-1841", name: "Martin Van Buren", guessed: false },
    { years: "1841", name: "William Henry Harrison", guessed: false },
    { years: "1841-1845", name: "John Tyler", guessed: false },
    { years: "1845-1849", name: "James Polk", guessed: false },
    { years: "1849-1850", name: "Zachary Taylor", guessed: false },
    { years: "1850-1853", name: "Millard Fillmore", guessed: false },
    { years: "1853-1857", name: "Franklin Pierce", guessed: false },
    { years: "1857-1861", name: "James Buchanan", guessed: false },
    { years: "1861-1865", name: "Abraham Lincoln", guessed: false },
    { years: "1865-1869", name: "Andrew Johnson", guessed: false },
    { years: "1869-1873", name: "Ulysses S. Grant", guessed: false },
    { years: "1873-1877", name: "Ulysses S. Grant", guessed: false },
    { years: "1877-1881", name: "Rutherford B. Hayes", guessed: false },
    { years: "1881", name: "James Garfield", guessed: false },
    { years: "1881-1885", name: "Chester A. Arthur", guessed: false },
    { years: "1885-1889", name: "Grover Cleveland", guessed: false },
    { years: "1889-1893", name: "Benjamin Harrison", guessed: false },
    { years: "1893-1897", name: "Grover Cleveland", guessed: false },
    { years: "1897-1901", name: "William McKinley", guessed: false },
    { years: "1901-1905", name: "Theodore Roosevelt", guessed: false },
    { years: "1905-1909", name: "Theodore Roosevelt", guessed: false },
    { years: "1909-1913", name: "William Taft", guessed: false },
    { years: "1913-1917", name: "Woodrow Wilson", guessed: false },
    { years: "1917-1921", name: "Woodrow Wilson", guessed: false },
    { years: "1921-1923", name: "Warren G. Harding", guessed: false },
    { years: "1923-1925", name: "Calvin Coolidge", guessed: false },
    { years: "1925-1929", name: "Calvin Coolidge", guessed: false },
    { years: "1929-1933", name: "Herbert Hoover", guessed: false },
    { years: "1933-1937", name: "Franklin Roosevelt", guessed: false },
    { years: "1937-1941", name: "Franklin Roosevelt", guessed: false },
    { years: "1941-1945", name: "Franklin Roosevelt", guessed: false },
    { years: "1945-1949", name: "Harry Truman", guessed: false },
    { years: "1949-1953", name: "Harry Truman", guessed: false },
    { years: "1953-1957", name: "Dwight Eisenhower", guessed: false },
    { years: "1957-1961", name: "Dwight Eisenhower", guessed: false },
    { years: "1961-1963", name: "John F. Kennedy", guessed: false },
    { years: "1963-1965", name: "Lyndon B. Johnson", guessed: false },
    { years: "1965-1969", name: "Lyndon B. Johnson", guessed: false },
    { years: "1969-1973", name: "Richard Nixon", guessed: false },
    { years: "1973-1974", name: "Richard Nixon", guessed: false },
    { years: "1974-1977", name: "Gerald Ford", guessed: false },
    { years: "1977-1981", name: "Jimmy Carter", guessed: false },
    { years: "1981-1985", name: "Ronald Reagan", guessed: false },
    { years: "1985-1989", name: "Ronald Reagan", guessed: false },
    { years: "1989-1993", name: "George H.W. Bush", guessed: false },
    { years: "1993-1997", name: "Bill Clinton", guessed: false },
    { years: "1997-2001", name: "Bill Clinton", guessed: false },
    { years: "2001-2005", name: "George W. Bush", guessed: false },
    { years: "2005-2009", name: "George W. Bush", guessed: false },
    { years: "2009-2013", name: "Barack Obama", guessed: false },
    { years: "2013-2017", name: "Barack Obama", guessed: false },
    { years: "2017-2021", name: "Donald Trump", guessed: false },
    { years: "2021-2025", name: "Joe Biden", guessed: false },
    { years: "2025-Present", name: "Donald Trump", guessed: false }
];

let wrongGuesses = [];

function displayPresidents() {
    const container = document.getElementById('presidents-list');
    container.innerHTML = '';
    const half = Math.ceil(presidents.length / 2);
    for (let i = 0; i < half; i++) {
        const row = document.createElement('div');
        row.className = 'president-row';
        
        const left = presidents[i];
        const leftDiv = document.createElement('div');
        leftDiv.className = 'president-entry';
        leftDiv.textContent = `${left.years}: ${left.guessed ? left.name : ''}`;
        row.appendChild(leftDiv);
        
        const rightIndex = i + half;
        if (rightIndex < presidents.length) {
            const right = presidents[rightIndex];
            const rightDiv = document.createElement('div');
            rightDiv.className = 'president-entry';
            rightDiv.textContent = `${right.years}: ${right.guessed ? right.name : ''}`;
            row.appendChild(rightDiv);
        }
        
        container.appendChild(row);
    }
}

function displayWrongGuesses() {
    const container = document.getElementById('wrong-guesses');
    if (wrongGuesses.length === 0) {
        container.textContent = '';
        return;
    }
    container.textContent = 'Wrong guesses: ' + wrongGuesses.join(', ');
}

function processAnswer(answer) {
    const lowerAnswer = answer.toLowerCase();
    let matched = false;
    
    if (lowerAnswer.includes('washington')) {
        presidents.forEach(p => { if (p.name === 'George Washington') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('adams')) {
        presidents.forEach(p => { if (p.name.includes('Adams')) p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('jefferson')) {
        presidents.forEach(p => { if (p.name === 'Thomas Jefferson') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('madison')) {
        presidents.forEach(p => { if (p.name === 'James Madison') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('monroe')) {
        presidents.forEach(p => { if (p.name === 'James Monroe') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('jackson')) {
        presidents.forEach(p => { if (p.name === 'Andrew Jackson') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('buren') || lowerAnswer.includes('van buren')) {
        presidents.forEach(p => { if (p.name === 'Martin Van Buren') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('william henry harrison')) {
        presidents.forEach(p => { if (p.name === 'William Henry Harrison') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('benjamin harrison')) {
        presidents.forEach(p => { if (p.name === 'Benjamin Harrison') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('harrison')) {
        presidents.forEach(p => { if (p.name.includes('Harrison')) p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('tyler') || lowerAnswer.includes('accidency')) {
        presidents.forEach(p => { if (p.name === 'John Tyler') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('polk')) {
        presidents.forEach(p => { if (p.name === 'James Polk') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('taylor')) {
        presidents.forEach(p => { if (p.name === 'Zachary Taylor') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('fillmore')) {
        presidents.forEach(p => { if (p.name === 'Millard Fillmore') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('pierce')) {
        presidents.forEach(p => { if (p.name === 'Franklin Pierce') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('buchanan')) {
        presidents.forEach(p => { if (p.name === 'James Buchanan') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('lincoln')) {
        presidents.forEach(p => { if (p.name === 'Abraham Lincoln') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('andrew johnson')) {
        presidents.forEach(p => { if (p.name === 'Andrew Johnson') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('lyndon johnson') || lowerAnswer.includes('lbj')) {
        presidents.forEach(p => { if (p.name === 'Lyndon B. Johnson') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('johnson')) {
        presidents.forEach(p => { if (p.name.includes('Johnson')) p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('grant')) {
        presidents.forEach(p => { if (p.name === 'Ulysses S. Grant') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('hayes')) {
        presidents.forEach(p => { if (p.name === 'Rutherford B. Hayes') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('garfield')) {
        presidents.forEach(p => { if (p.name === 'James Garfield') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('arthur')) {
        presidents.forEach(p => { if (p.name === 'Chester A. Arthur') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('cleveland')) {
        presidents.forEach(p => { if (p.name === 'Grover Cleveland') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('mckinley')) {
        presidents.forEach(p => { if (p.name === 'William McKinley') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('theodore roosevelt') || lowerAnswer.includes('teddy roosevelt')) {
        presidents.forEach(p => { if (p.name === 'Theodore Roosevelt') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('franklin roosevelt') || lowerAnswer.includes('fdr')) {
        presidents.forEach(p => { if (p.name === 'Franklin Roosevelt') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('roosevelt')) {
        presidents.forEach(p => { if (p.name.includes('Roosevelt')) p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('taft')) {
        presidents.forEach(p => { if (p.name === 'William Taft') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('wilson')) {
        presidents.forEach(p => { if (p.name === 'Woodrow Wilson') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('harding')) {
        presidents.forEach(p => { if (p.name === 'Warren G. Harding') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('coolidge')) {
        presidents.forEach(p => { if (p.name === 'Calvin Coolidge') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('hoover')) {
        presidents.forEach(p => { if (p.name === 'Herbert Hoover') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('truman')) {
        presidents.forEach(p => { if (p.name === 'Harry Truman') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('eisenhower')) {
        presidents.forEach(p => { if (p.name === 'Dwight Eisenhower') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('kennedy') || lowerAnswer.includes('jfk')) {
        presidents.forEach(p => { if (p.name === 'John F. Kennedy') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('nixon')) {
        presidents.forEach(p => { if (p.name === 'Richard Nixon') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('ford')) {
        presidents.forEach(p => { if (p.name === 'Gerald Ford') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('carter')) {
        presidents.forEach(p => { if (p.name === 'Jimmy Carter') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('reagan')) {
        presidents.forEach(p => { if (p.name === 'Ronald Reagan') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('george h w bush') || lowerAnswer.includes('h w bush')) {
        presidents.forEach(p => { if (p.name === 'George H.W. Bush') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('george w bush') || lowerAnswer.includes('w bush')) {
        presidents.forEach(p => { if (p.name === 'George W. Bush') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('bush')) {
        presidents.forEach(p => { if (p.name.includes('Bush')) p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('clinton')) {
        presidents.forEach(p => { if (p.name === 'Bill Clinton') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('obama')) {
        presidents.forEach(p => { if (p.name === 'Barack Obama') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('trump')) {
        presidents.forEach(p => { if (p.name === 'Donald Trump') p.guessed = true; });
        matched = true;
    } else if (lowerAnswer.includes('biden')) {
        presidents.forEach(p => { if (p.name === 'Joe Biden') p.guessed = true; });
        matched = true;
    }
    
    if (!matched && !wrongGuesses.includes(answer)) {
        wrongGuesses.push(answer);
    }
    
    displayPresidents();
    displayWrongGuesses();
}

document.addEventListener('DOMContentLoaded', () => {
    displayPresidents();
    displayWrongGuesses();
    
    const input = document.getElementById('president-input');
    const button = document.getElementById('submit-button');
    
    button.addEventListener('click', () => {
        const answer = input.value.trim();
        if (answer) {
            processAnswer(answer);
            input.value = '';
        }
    });
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});