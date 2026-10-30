var iHari;
var sAnggota;

iHari = prompt("Masukan jumlah hari keterlambatan.", 1);
sAnggota = prompt("Anggota perpusatakaan? (Y)a atau (T)idak.", "Y");

if(iHari > 7){
    if(sAnggota == "Y"){
        alert("Denda Rp. 10000, pemijamana dibekukan.");
    }else{
        alert("Denda Rp. 20000, pemijamana dibekukan.");
    }
}else{
    if(sAnggota == "Y"){
        alert("Denda Rp. 2000");
    }else{
        alert("Denda Rp. 5000");
    }
}