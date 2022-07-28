import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HhtpInterseptorService } from './hhtp-interseptor.service';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PracticeComponent } from './practice/practice.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
          provide:HTTP_INTERCEPTORS,
          useClass:HhtpInterseptorService,
          multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
