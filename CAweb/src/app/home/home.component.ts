import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
   
export class HomeComponent implements OnInit {

  

  
  constructor(
   
  ) { }
 
  ngOnInit() {
  
    Swal.fire({
      title: 'Diclamier',
      width:600,
      text: 'To comply with regulations stipulated by the Code of Ethics prescribed by Institute of Chartered Accountants (ICAI) of India that does not permit solicitation in any form or manner, by accessing this site you acknowledge that you are seeking information of your own accord and volition and that no form of solicitation has taken place by Jaisinghani Jain & Associates or its members. This site (www.cajandj.com) should not be construed as an attempt to create a CA-client relationship of any manner. This site is meant to provide information to those who specifically request this information and does not purport to be exhaustive in relation to the information contained herein. Jaisinghani Jain & Associates does not assume any responsibility for any acts or omissions arising from the use of information provided on this site and visitors to this site are advised to seek independent professional guidance before proceeding to act on any information provided herein.',
      confirmButtonText: 'Proceed',

    });
   
    
  
  }
  
 initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
 
  disclamier(){
    Swal.fire({
      title: 'Diclamier',
      width:600,
      text: 'To comply with regulations stipulated by the Code of Ethics prescribed by Institute of Chartered Accountants (ICAI) of India that does not permit solicitation in any form or manner, by accessing this site you acknowledge that you are seeking information of your own accord and volition and that no form of solicitation has taken place by Jaisinghani Jain & Associates or its members. This site (www.cajandj.com) should not be construed as an attempt to create a CA-client relationship of any manner. This site is meant to provide information to those who specifically request this information and does not purport to be exhaustive in relation to the information contained herein. Jaisinghani Jain & Associates does not assume any responsibility for any acts or omissions arising from the use of information provided on this site and visitors to this site are advised to seek independent professional guidance before proceeding to act on any information provided herein.',
      confirmButtonText: 'Proceed',

    });
  }


}
