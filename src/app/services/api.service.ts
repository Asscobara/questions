import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IQuestions } from "../model/log.model";

@Injectable()
export class APIService {

    constructor(private httpClient: HttpClient) {

    }

    public getQuestions() {
        return this.httpClient.get<IQuestions>('./assets/data/questions.json');
    }
}