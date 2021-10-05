function clicked() {
    var elem = document.getElementById("my_animation");
    var scale = 0 ;
    var status = setInterval(frame,90);
    function frame() {
        if (scale>0.5)
        {
            scale = 0;
        }
        else {
            scale+=0.1;
            elem.style.transform = `scale(${scale},${scale})`;
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