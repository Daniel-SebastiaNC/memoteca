import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThinkComponent } from './components/thinking/create-think/create-think.component';
import { FormsModule } from '@angular/forms';
import { ListThinkingComponent } from './components/thinking/list-thinking/list-thinking.component';
import { ThinkComponent } from './components/thinking/think/think.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteThinkingComponent } from './components/thinking/delete-thinking/delete-thinking.component';
import { EditThinkComponent } from './components/thinking/edit-think/edit-think.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThinkComponent,
    ListThinkingComponent,
    ThinkComponent,
    DeleteThinkingComponent,
    EditThinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
