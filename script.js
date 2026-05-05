const small = "abcdefghijklmnopqrstuvwxyz";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "-_#@%&!/()";

function PasswordGenerator() {
    const PasswordLength = parseInt(document.getElementById("PasswordLength").value, 10) || 0;
    const CapitalAlphabet = document.getElementById("CapitalAlphabet").checked;
    const SmallAlphabet = document.getElementById("SmallAlphabet").checked;
    const Numbers = document.getElementById("Numbers").checked;
    const SpeacialCharacters = document.getElementById("SpeacialCharacters").checked;

    let CheckedIncludes = "";
    CheckedIncludes += CapitalAlphabet ? capital : "";
    CheckedIncludes += SmallAlphabet ? small : "";
    CheckedIncludes += Numbers ? numbers : "";
    CheckedIncludes += SpeacialCharacters ? special : "";

    if (CheckedIncludes.length === 0 || PasswordLength == "") {
        document.querySelector(".PasswordResult").textContent = "Select at least one option.";
        return;
    }

    let Password = "";
    for (let i = 0; i < PasswordLength; i++) {
        const RandomIndex = Math.floor(Math.random() * CheckedIncludes.length);
        Password += CheckedIncludes[RandomIndex];
    }

        document.querySelector(".PasswordResult").textContent = Password;
}