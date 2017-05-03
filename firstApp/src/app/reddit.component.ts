import { Component } from '@angular/core';
import { Article } from './article';
@Component({
    selector: 'reddit',
    templateUrl: './reddit.component.html'
})

export class RedditComponent {
    //properties
    articles: Article[] = [
        new Article('Angular2', 'http://angular.io', 8),
        new Article('FullStack', 'http://fullstack.io', 10),
        new Article('Angular Homepage', 'http://angular.io', 1),
    ];;

    //methods
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        var titleValue = title.value;
        var linkValue = "http://" + link.value;

        if (!titleValue || !linkValue) {
            alert("Title and Link can't be empty");
        }
        else {
            this.articles.push(new Article(titleValue, linkValue, 0));
            title.value = "";
            link.value = "";
        }
    }

    //sorting
    sortedArticle(): Article[] {
        return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
}