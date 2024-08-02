// main.ts

interface MajorCredits {
    credits: number;
    _brand_majorCredits: never; // Brand property for MajorCredits
}

interface MinorCredits {
    credits: number;
    _brand_minorCredits: never; // Brand property for MinorCredits
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand_majorCredits: undefined as never
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand_minorCredits: undefined as never
    };
}

// Example usage
const subject1: MajorCredits = { credits: 3 };
const subject2: MajorCredits = { credits: 4 };
const resultMajor = sumMajorCredits(subject1, subject2);
console.log("Sum of major credits:", resultMajor.credits);

const subject3: MinorCredits = { credits: 2 };
const subject4: MinorCredits = { credits: 1 };
const resultMinor = sumMinorCredits(subject3, subject4);
console.log("Sum of minor credits:", resultMinor.credits);

