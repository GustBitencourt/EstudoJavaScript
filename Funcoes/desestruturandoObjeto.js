const user = {
    id: 42,
    displayName: 'GustGama',
    fullName: {
        firstName: 'Gustavo',
        lastName: 'Gama'
    }
};


function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `Nome completo: ${first} ${last}`;    
}

console.log(userId(user));
console.log(getFullName(user));