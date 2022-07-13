//Interface
var data1 = {
    title: "Todos",
    status: false,
    id: 1
};
var getName = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    if (firstName && lastName) {
        return ("".concat(firstName, "_").concat(lastName));
    }
    else {
        return ("".concat(firstName));
    }
};
var output = {
    firstName: "Gagan",
    lastName: 'Chandan'
};
console.log(getName(output));
var address = {
    houseNumber: 1234,
    street: "Vivek Nagar",
    city: "KGF",
    postalCode: 563122,
    country: "India"
};
console.log(address);
var details = {
    phones: [123456789],
    addresses: ["123/", "Efg", "hij", "563122"],
    firstname: "Gagan",
    lastname: "Chandan"
};
console.log(details);
