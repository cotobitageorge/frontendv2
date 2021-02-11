import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloFrenComponent } from './hello-fren/hello-fren.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { FollowerCardComponent } from './follower-card/follower-card.component';
import { TokenIntercepterService } from './interceptors/token-intercepter.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HelloFrenComponent,
    FollowerListComponent,
    FollowerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
