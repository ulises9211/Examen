import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) {
  }

  getData() {

    let params = new HttpParams({fromString: 'token=' + '8c32d600-d4eb-e353-0208-156a97b56eb9' + '&parameters=' + 
                                "{\"fh_start\":\"2020-12-08 00:00\",\"fh_end\":\"2020-12-21 00:00\",\"shipment\":\"02137768\"}" 
                                });
    
    return this.http.post('https://app.rcontrol.com.mx/japi/get_tracking_info_rest_service?token=8c32d600-d4eb-e353-0208-156a97b56eb9'
                            + '&parameters={"fh_start":"2020-12-08 00:00","fh_end":"2020-12-21 00:00","shipment":"02137768"}', null);
    
  }
}
