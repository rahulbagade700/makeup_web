function decodeEmail(encoded) {
    let email = "";
    let key = parseInt(encoded.substr(0, 2), 16);
    for (let i = 2; i < encoded.length; i += 2) {
        let charCode = parseInt(encoded.substr(i, 2), 16) ^ key;
        email += String.fromCharCode(charCode);
    }
    return email;
}

// Decode the email addresses found in the project
console.log("Decoded email 1:", decodeEmail("d6bfb8b0b996bbb9bebfb8bfbbb7bdb3b9a0b3a4f8bfb8"));
console.log("Decoded email 2:", decodeEmail("caa3a4aca58aa7a5a2a3a4a3a7aba1afa5bcafb8e4a3a4")); 