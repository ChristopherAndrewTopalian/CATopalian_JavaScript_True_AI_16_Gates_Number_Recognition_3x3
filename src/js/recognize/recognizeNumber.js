// recognizeNumber.js

function recognizeNumber(input)
{
    let highestScore = -1;
    let recognizedDigit = -1;

    for (let i = 0; i < digitPatterns.length; i++)
    {
        let score = comparePatterns(input, digitPatterns[i]);

        if (score > highestScore)
        {
            highestScore = score;
            recognizedDigit = i;
        }
    }

    return "This looks like a " + recognizedDigit;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

