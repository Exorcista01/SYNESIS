// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { AuthRoutingModule } from "../features/auth/auth-routing.module"; 

@NgModule({
    declarations: [
        BannerComponent
    ],
    imports: [
    CommonModule,
    AuthRoutingModule
],
    exports: [
        BannerComponent 
    ]
})
export class SharedModule { }