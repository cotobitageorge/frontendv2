import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { UserPostComponent } from './user-post/user-post.component';


@NgModule({
  declarations: [
    FeedComponent,
    UserPostComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeedModule { }
