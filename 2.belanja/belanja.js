function beliSayur(money, hargaSayur, hargaIkan, beliIkan) {
  console.log("Duit dari emak:",money);
  console.log("Harga sayur:",hargaSayur);

  money -= hargaSayur;
  
  console.log("Sisa duit:",money)

  beliIkan(money, hargaIkan);
}


beliSayur();

