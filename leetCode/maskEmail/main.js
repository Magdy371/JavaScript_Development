function domainFind (email)
{
    const index = email.indexOf('@');
    return index;
}

function maskEmail(email){
    let domainStart = domainFind(email);
    const domain = email.slice(domainStart);
    console.log(domain);
    let emailBaseLength =Number( email.length - domain.length);
    console.log(emailBaseLength);
    let char = '*';
    let maskedEmail = email[0]+char.repeat(emailBaseLength-2)+email[emailBaseLength-1]+domain;
    console.log(maskedEmail);
}
maskEmail("freecodecamp@example.com");