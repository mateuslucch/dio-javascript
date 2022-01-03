function getAdmins(map) {

    const userAdmin = [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            userAdmin.push(key);
        }
    }
    return userAdmin;
}

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));
