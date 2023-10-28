var eye_one_loc =   document.querySelector('.eye1').getBoundingClientRect();
var eye_two_loc =  document.querySelector('.eye2').getBoundingClientRect();

window.addEventListener('mousemove' , function(mouse_loc){
    var rel_mouse_loc_one_x  = mouse_loc.x - eye_one_loc.x ;
    var rel_mouse_loc_one_y  = mouse_loc.y - eye_one_loc.y ;
    var angle_rad_one = Math.atan2(rel_mouse_loc_one_y , rel_mouse_loc_one_x);
    var angle_deg_one =  (angle_rad_one*180) / Math.PI;
    document.documentElement.style.setProperty('--angle-one', (angle_deg_one-40)+"deg");
   
    var rel_mouse_loc_two_x  = mouse_loc.x - eye_two_loc.x ;
    var rel_mouse_loc_two_y  = mouse_loc.y - eye_two_loc.y ;
    var angle_rad_two = Math.atan2(rel_mouse_loc_two_y , rel_mouse_loc_two_x);
    var angle_deg_two =  (angle_rad_two*180) / Math.PI;
    document.documentElement.style.setProperty('--angle-two', (angle_deg_two-40)+"deg");

} )






