function main() {
    clicked();
    rotation();
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

function rotation()
{
    var shoe_elem = document.getElementById("shoe");
    var rotate_deg = 0;
    var status = setInterval(frame_motion, 10);
    function frame_motion() {
        if (rotate_deg>100)
        {
            rotate_deg=0;
        }
        else {
            rotate_deg++;
            elem.style.transform = `rotate(${rotate}deg)`;
        }

    }
}
    // // calls the function every 10 milisecond
    // var id = setInterval(frame, 10);
    // function frame () {
    //     console.log(pos);
    //     if (pos==350)
    //     {
    //         clearInterval(id);
    //     }
    //     else {
    //         pos++;
    //         if (pos>300)
    //         {
    //             elem.style.transform = `scale(${pos-300},${pos-300})`;
    //         }
    //         elem.style.top = pos+'px';
    //         elem.style.left = pos+'px';
    //     }
    // }


}