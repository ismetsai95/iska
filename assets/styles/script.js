

var a = prompt("Apakan anda pernah berkontak langsung dengan orang yang positif Corona? Silahkan Ketik 'ya' atau 'belum' ");
 
if (a === "ya") {
   alert("Anda termasuk dalam ODP (Orang Dalam Pengawasan) ");
} else if (a === "belum") {
   alert("Tetap jaga diri Sering Cuci tangan pakai Sabun dan Gunakan Masker Saat Keluar Rumah ");
} else {
   alert("Kata yang anda masukan Salah, Silahkan reload/refresh kembali Halaman Ini !!!!! (Tekan F5) ");
   window.stop();
 
}


    $(document).ready(function(){
        function clock() {
          var now = new Date();
          var secs = ('0' + now.getSeconds()).slice(-2);
          var mins = ('0' + now.getMinutes()).slice(-2);
          var hr = now.getHours();
          var Time = hr + ":" + mins + ":" + secs;
      var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth();
      var thisDay = date.getDay(),
          thisDay = myDays[thisDay];
      var yy = date.getYear();
      var year = (yy < 1000) ? yy + 1900 : yy;
          document.getElementById("watch").innerHTML = Time;
      document.getElementById("tanggal").innerHTML = (thisDay + ', ' + day + ' ' + months[month] + ' ' + year);
          requestAnimationFrame(clock);

        }

        requestAnimationFrame(clock);
    });
      
      
     
