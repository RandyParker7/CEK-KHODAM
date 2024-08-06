document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const result = document.getElementById('result');

    if (name) {
        const khodam = checkKhodam(name);
        result.innerHTML = `Khodam anda adalah: <strong>${khodam}</strong>`;
    } else {
        result.innerHTML = '<span style="color: red;"> Silakan masukan nama Anda!</span>';
    }
});

function checkKhodam(name) {
    const khodams = ['Monyet Kayang', 'Badut Mixue', 'Naga Bonar', 'Kucing Gacoan', 'Luwak Kopi Putih',
        'Sapi Ngakak', 'Ular Pelukis', 'Kelinci Imut',
        'Gajah Mini', 'Kura-Kura Lari', 'Anjing Bisu', '',
        'Kelelawar Santuy', 'Jerapah Pendek', 'Zebra Polkadot', 
        'Kambing Tertawa', 'Buaya Darat', 'Kuda Terbang', 'Ikan Baper',
        'Tupai Pelawak', 'Pocong Tobrut', 'Babi Ngorok', 'Gurita Peluk', 'Lumba-lumba Tawa',
        'Buaya Darat', 'Semut Ninja', 'Lebah Nyasar', 'Tawon Nge-Rap', 'Sapi Kurban', 'Ayam KFC',
        'Kuntilanak Cepirit', 'Laba-Laba Gendut', 'Ular Santai', 'Ikan Badut', 'Gajah Ngambek',
        'Bebek Mabuk', 'Burung Kicau', 'Ayam Ngambek', 'Kuing Tetangga', 'Sepeda Exotic',  
        'Tikus Got', 'Kucing Berkumis', 'Domba Berponi', 'Anjing Berkacamata',
        'Ikan Paus', 'Kuda Nil Stroberi', 'Tikus Terbang',
        'Kupu-Kupu Baper', 'Salmon Sashimi', 
        'Bebek Dance', 'Tupai Ninja', 'Landak Manis', 'Kura-Kura Cepat',
        'Semut Buntung',  'Gajah Kecil',
        'Badak Imut', 'Orangutan Ngocok', 'Siput Lari', 'Buaya Cepat', 
        'Biawak Tawa', 'Komodo Indomaret', 'Badut Sange', 'Harimau Santai', 
        'Monyet Joget', 'Badak Cepat', 'Kucing Santai', 'Anjing Manis', 
        'Ikan Ninja', 'Kura-Kura Manis', 'Semut Lari',
        'Lebah Santuy', 'Anjing Ngeselin', 'Nyamuk Dance', 'Laba-Laba Santai',
        'Ular Manis', 'Gajah Joget', 'Macan Peluk', 'Kuda Terbang',
        'Ayam Tertawa', 'Genderuwo Putih', 'Babi Joget', 'Gurita Dance', 'Lumba-lumba Joging',
        'Babi Beranak Tujuh', 'Nyamuk Baper',
        'Kupu-Kupu Manis', 'Naga Kepala Lima', 'Ular Joget', 'Ikan Manis', 'Gajah Lari',
        'Macan Dance',  'Babi Minecraft', 'Dewa Judi', 'Babi Dance',
        'Gurita Manis', 'Lumba-lumba Lari', 'Buaya Joget', 'Lebah Lari',
        'Tawon Joget', 'Nyamuk Manis', 'Kupu-Kupu Jalan', 'Laba-Laba Lari', 'Ular Dance',]
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
}