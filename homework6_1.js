const userCard = {
  name: "Julia",
  age: 20,
  residence: "Odesa",
  getInfo: function () {
    console.log(this.name, this.age, this.residence);
  },
};
userCard.getInfo();
