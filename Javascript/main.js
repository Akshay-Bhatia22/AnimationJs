function main() {
    clicked();
    translation();
}

function clicked() {
    var elem = document.getElementById("my_animation");
    var scale = 0 ;
    var status = setInterval(frame,70);
    function frame() {
        if (scale>0.7)
        {
            scale = 0;
        }
        else {
            scale+=0.1;
            elem.style.transform = `scale(${scale},${scale})`;
        }
    }
}

function translation()
{
    var nk_text = document.getElementById("nike");
    var pos = 0;
    var count = 0;
    var status = setInterval(frame_motion, 60);
    function frame_motion() {
        if (count<10)
        {
            if (pos>100)
            {
                pos=0;
                count++;
            }
            else {
                pos++;
                nk_text.style.paddingLeft = pos +'%';
                nk_text.style.opacity = 1-(pos/100);
            }
        }
        else {
            clearInterval(status);
        }
    }
    // console.log("ran");
    // document.querySelector("#nike").style.padding = '10%';
}
