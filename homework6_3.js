const phoneContacts = {
  contacts: [
    {
      name: "Julia",
      phone: 0636031826,
      email: "juliaOdesa@gmail.com",
    },
    { name: "Oleg", phone: 0636031827, email: "olegOdesa@gmail.com" },
    {
      name: "Viktor",
      phone: 0636031828,
      email: "viktorOdesa@gmail.com",
    },
  ],
  getInfo: function (name) {
    return this.contacts.find((contact) => contact.name === name);
  },
  setContact: function (contact) {
    this.contacts.push(contact);
  },
};
console.log(phoneContacts.getInfo("Oleg"));
phoneContacts.setContact({
  name: "Anna",
  phone: 0636031829,
  email: "annaOdesa@gmail.com",
});
console.log(phoneContacts.contacts);
