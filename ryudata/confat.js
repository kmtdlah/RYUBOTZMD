// Edit Kalau Tidak Sesuai

// Message Salah Command
exports.wrongFormat = (prefix) => {
    return `Format Salah ❎ Silakan Cek Cara Penggunaan Di *${prefix}allmenu*`
}

// Message Salah Url
exports.notNum = (q) => {
    return `"${q}", Bukan Angka!`
}

// Message Fitur Off
exports.fiturOff = () => {
	return `⚠️ Fitur Tidak Di Aktifkan`
}

// Message Saat Fitur Error
exports.fiturError = () => {
    return `⚠️ Fitur Sedang Error`
}

// Message Saat Bukan Link Yang Dituju
exports.notLink = () => {
    return `⚠️ Itu Bukan Linknya Bambank`
}

// Message Sukses Menambahkan User Ke Grup
exports.addUser =() => {
	return `Sukses Menambahkan Si Kmtd ☑️`
}

// Message Sukses Kick User Dari Grup
exports.kickUser =() => {
	return `Si Babi Telah Di Kick  ☑️`
}

// Message Promote User
exports.proMote =() => {
	return `Si Babi Telah Menjadi Admin ☑️`
}

// Message Demote User
exports.deMote =() => {
	return `Lu Ga Guna , Jadi Gua UnAdmin ☑️`
}

// Message Ubah Nama Grup
exports.namaGrup =(text) => {
	return `Sukses Mengubah Nama Group Menjadi ${text} ☑️`
}

// Message Ephermal On
exports.epOn =() => {
	return `Sukses Menghidupkan Ephermal/Pesan Sementara Di Group Ini ☑️`
}

// Message Ephermal Off
exports.epOff =() => {
	return `Sukses Menonaktifkan Ephermal/Pesan Sementara Di Group Ini ☑️`
}
