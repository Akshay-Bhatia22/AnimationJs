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
// function rotation()
// {
//     var shoe_elem = document.getElementById("shoe");
//     var rotate_deg = 0;
//     var status = setInterval(frame_motion, 10);
//     function frame_motion() {
//         if (rotate_deg>100)
//         {
//             rotate_deg=0;
//         }
//         else {
//             rotate_deg++;
//             elem.style.transform = `rotate(${rotate}deg)`;
//         }

//     }
// }
function translation()
{
    var nk_text = document.getElementById("nike");
    var pos = 0;
    var count = 0;
    var status = setInterval(frame_motion, 90);
    function frame_motion() {
        if (count<5)
        {
            if (pos>100)
            {
                pos=0;
                count++;
            }
            else {
                pos++;
                nk_text.style.paddingLeft = pos +'%';
            }
        }
        else {
            clearInterval(status);
        }
    }
    // console.log("ran");
    // document.querySelector("#nike").style.padding = '10%';
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
