import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { ExecutionComponent } from './execution/execution.component';
import { ReviewComponent } from './review/review.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ChipModule } from 'primeng/chip';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { AddReviewRecordComponent } from './pop-ups/add-review-record/add-review-record.component';
import { CreateNewCycleComponent } from './pop-ups/create-new-cycle/create-new-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ExecutionComponent,
    ReviewComponent,
    AddReviewRecordComponent,
    CreateNewCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ChipsModule,
    ToggleButtonModule,
    FormsModule,
    ChipModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
