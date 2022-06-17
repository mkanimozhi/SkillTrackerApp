import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "./profile.model";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    //private baseUrl = "http://localhost:8081/skill-tracker/api/v1/engineer/get-profile";

    constructor(private http: HttpClient) {
    }

    getProfiles() : Observable<any> {
        return this.http.get('http://localhost:8081/skill-tracker/api/v1/engineer/get-profile');
    }

    addProfile(profile: Profile) : Observable<any> {

        console.log(profile);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            })
        };
return this.http.post('http://localhost:8081/skill-tracker/api/v1/engineer/add-profile', profile, httpOptions);
    }
    
    //  getProfiles(): Observable<Profile[]>{
    //     return this.http.get<Profile[]>(`${this.baseUrl}`);
    //  return this.http.get(this.baseUrl).
    // }

    // public get(baseUrl: string, options?: any) {
    //     return this.http.get(baseUrl, options);
    // }

}