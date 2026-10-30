 function fn_ValForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var umur = document.getElementById("umur").value;
    var kategori = document.getElementById("kategori").value;

    var sMsg = "";

    if (nama.trim() === "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    var emailRegex = /^[a-z0-9][a-z0-9_\.\-]*[a-z0-9]@[a-z0-9][a-z0-9_\.\-]*[a-z0-9][\.|a-z0-9]{2,4}$/;
    if (email.trim() === "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!emailRegex.test(email)) {
        sMsg += "\n* Format email tidak valid (hanya menerima huruf kecil)";
    }

    var info = "";
    if (umur.trim() === "") {
        sMsg += "\n* Anda belum mengisikan umur";
    } else if (isNaN(umur)) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        var umurNum = parseInt(umur, 10);
        if (umurNum < 7 || umurNum > 70) {
            sMsg += "\n* Umur harus berada di antara 7 sampai 70 tahun";
        } else {
            if (umurNum <= 17) {
                info = "Anggota Pelajar";
            } else {
                info = "Anggota Umum";
            }
        }
    }

    if (kategori === "") {
        sMsg += "\n* Anda belum memilih koleksi favorit";
    }

    if (sMsg !== "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        var pilihan = "";
        switch (kategori) {
            case "F":
                pilihan = "Fiksi";
                break;
            case "N":
                pilihan = "Non-Fiksi";
                break;
            case "J":
                pilihan = "Jurnal Ilmiah";
                break;
        }

        alert("Terima kasih " + nama + " ! Anda terdaftar di koleksi " + pilihan + " (" + info + ").");
        return true;
    }
}
