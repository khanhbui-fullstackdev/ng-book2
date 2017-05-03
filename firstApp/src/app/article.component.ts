import { Component, Input, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from './article';

@Component({
    selector: 'article',
    host: {
        class: 'row'
    },
    templateUrl: './article.component.html',
    inputs: ['articleInput'],

})
export class ArticleComponent implements OnInit {
    //properties
    articleInput: Article;

    @Input()
    ngModel: Article;
    articles: Article[] = [];


    //default constructor
    constructor() {
        //this.articleInput = new Article('Anglar 4', 'http://angular.io', 10);


    }

    ngOnInit(): void {
        //console.log("Still undifine?"+this.ngModel);
    }

    //methods
    voteUp(): boolean {
        this.articleInput.voteUp();
        return false;//this is because Javasript by default, propagate the click event to all the parent component
    }

    voteDown(): boolean {
        this.articleInput.voteDown();
        return false;
    }

    removeArticle(article: Article) {
        alert(article);
    }
}