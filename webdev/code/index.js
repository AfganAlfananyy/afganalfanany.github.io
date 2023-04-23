var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
    {
        setTimeout("writetitle()", 1000)
    }
    else{
        c++;
        setTimeout("writetitle()", 200)
    }
}

writetitle()

function MyFunction() { 
    alert("Website ini masih dalam tahap pengembangan, satu halaman akan menampilkan gambar dan text yang sama.");
} 