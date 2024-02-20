// Variables

const pQuoote = window.document.getElementById("quote");
const pAuthor = window.document.getElementById("author");


// Functions

let generate = () => {
    let quotes = {
        "- Jackie Ronbinson": "'There's not an American in this country free until every one of us is free.'",
        "- Bessie Coleman": "'The air is the only place free from prejudice.'",
        "- Voltaire": "'It is difficult to free fools from the chains they revere.'",
        "- Jesse Pinkman": "'Yeah, science!'",
        "- Epictetus": "'No man is free who is not master of himself.'",
        "- Kurt Cobain": "'Rather be dead than cool.'",
        "- William H. Macy ": "'We thought sex was free. Sex is not free. There's a price to be paid emotionally, physically, even legally. Sex isn't a casual thing. It's a huge thing.'",
        "- John F. Kennedy": "'If art is to nourish the roots of our culture, society must set the artist free to follow his vision wherever it takes him.'",
        "- Robert A. Heinlein": "'I am free because I know that I alone am morally responsible for everything I do. I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do.'",
        "- George Washington": "'The time is near at hand which must determine whether Americans are to be free men or slaves.'",
        "- Franklin D. Roosevelt": "'Human kindness has never weakened the stamina or softened the fiber of a free people. A nation does not have to be cruel to be tough.'",
    };

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    pQuoote.innerHTML = quote;
    pAuthor.innerHTML = author;

};