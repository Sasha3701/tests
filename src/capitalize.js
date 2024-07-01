const capitalize = str => {
    if (!str.length) {
        return '';
    }

    const [firstLetter, ...otherLetters] = str;

    return `${firstLetter.toUpperCase()}${otherLetters.join('')}`;
};

exports.capitalize = capitalize;
