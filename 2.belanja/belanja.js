function beliSayur(money, hargaSayur, hargaIkan, beliIkan) {
  console.log("Duit dari emak:",money);
  console.log("Harga sayur:",hargaSayur);

  money -= hargaSayur;

  beliIkan(money, hargaIkan);
}

beliSayur(10000, 2000, 4000, (money, price) => {
  a -= b;

  console.log(a);
});
