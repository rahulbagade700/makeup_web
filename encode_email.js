function encodeEmail(email) {
    const key = Math.floor(Math.random() * 256);
    let encoded = key.toString(16).padStart(2, '0');
    
    for (let i = 0; i < email.length; i++) {
        const charCode = email.charCodeAt(i) ^ key;
        encoded += charCode.toString(16).padStart(2, '0');
    }
    
    return encoded;
}

// Encode the new email address
const newEmail = "skmakeup@gmail.com";
const encodedEmail = encodeEmail(newEmail);
console.log("Encoded email for 'skmakeup@gmail.com':", encodedEmail); 