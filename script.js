// Belajar menulis js
// var angka = 2;
// Belajar popup box
// alert("selamat datang");

// var lagi = true;
// while( lagi === true ) {
//     var nama =  prompt("masukan nama anda");
//     alert(`Halo nama kamu pasti ${nama}`);

//     lagi = confirm("coba lagi ?")
// }
// alert("Terima Kasih");


// Belajar Pengulangan
// let i = 0;
// while(i < 10) {
//     console.log(`Hello World ke-${i}`);
//     i++;
// }
// alert("Selesai");

// let ulang = true;
// while(ulang) {
//     console.log("Hello Bitch");
//     ulang = confirm("Mau lagi ?");
// }
// alert("selesai");

// Belajar angkot
// let angkot = 0;
// let jmlAngkot = 10;

// while(angkot < jmlAngkot) {
//     console.log(`Angkot No. ${angkot} beroperasi dengan baik.`);
//     angkot++;
// }

// Belajar angkot tapi versi for
// for(var nilaiAwal = 0; nilaiAwal < 10; nilaiAwal++ ) {
//     console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik`);
// }

// for(var angkot = 1; angkot <= 10; angkot++) {
//     if(angkot <= 6) {
//         console.log(`Angkot No. ${angkot} beroperasi dengan baik`);
//     } else {
//         console.log(`Angkot No. ${angkot} sedang tidak beroperasi`);
        
//     }
// }

// let angka = prompt("Masukan angka");
// if(angka % 2 === 0) {
//     alert(`Angka ini ${angka} adalah ilangan genap`)
// } else if(angka % 2 === 1) {
//     alert(`Angka ini ${angka} adalah bilangan ganjil`)
// } else {
//     alert(`Kamu tidak memasukan angka`)
// }

// console.log("kontol");

var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot < jmlAngkot; noAngkot++) {
    if( noAngkot <= angkotBeroperasi ) {
        console.log(`Angkot no. ${noAngkot} beroperasi dengan baik`);
    } else if( noAngkot === 8 ) {
        console.log(`Angkot no. ${noAngkot} sedang lembur`);
    } else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
        
    }
}
