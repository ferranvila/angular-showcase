import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
})
export class PostsModule {}
