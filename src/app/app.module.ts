import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ScreenshotComponent } from './components/screenshot/screenshot.component';
import { WorksComponent } from './components/works/works.component';
import { DownloadComponent } from './components/download/download.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureComponent } from './components/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    PricingComponent,
    ScreenshotComponent,
    WorksComponent,
    DownloadComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    FeatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
