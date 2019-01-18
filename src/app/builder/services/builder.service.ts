import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data/data.service' ;


@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  // Vars
  private data ;
  private dataSubscription ;

  constructor(
              private http: HttpClient,
              private dataService: DataService
              ) { 
      this.dataSubscription = this.dataService.get_data().subscribe( res => this.data = res );        
  }

 
  /**
   * Get Content
   * 
   * @returns void
   */
  fetch( page_name: string ): Observable <any> {

    const url         = this.data.endpoint_url + '/pages/'+page_name+'.json' ;
    const httpOptions = {
                          headers: new HttpHeaders({
                            'Accept'        : 'application/json',
                            'Content-Type'  : 'application/json',
                            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('access_token'))
                          })
                        };
    // return this.http.post<any>(url, body, httpOptions) ;
    return this.http.get<any>(url) ;
  }

  /**
   * Update Content
   * 
   * @returns void
   */
  update( page_name: string, data: any ): Observable <any> {

    const url             = this.data.endpoint_url + '/pages/'+page_name+'.json' ;
    const body            = JSON.stringify(data);
    const httpOptions     = {
                              headers: new HttpHeaders({
                                'Accept'        : 'application/json',
                                'Content-Type'  : 'application/json'
                              })
                            };
    return this.http.patch<any>(url, body, httpOptions) ;
  }

}
