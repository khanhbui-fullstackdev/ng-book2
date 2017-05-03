//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Component
import { AppComponent } from './app.component'; //AppComponent is the root component
import { RedditComponent } from './reddit.component';
import { ArticleComponent } from './article.component';
@NgModule({
    imports: [BrowserModule],
    declarations: 
    [
        AppComponent, 
        RedditComponent, 
        ArticleComponent
    ],
    bootstrap: [AppComponent]//only root Module (AppModule) called root component 
})
export class AppModule { }