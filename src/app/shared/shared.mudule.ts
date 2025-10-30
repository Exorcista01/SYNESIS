// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BannerComponent
    ],
    imports: [
    CommonModule,
    RouterModule
],
    exports: [
        BannerComponent ,
        RouterModule
    ]
})
export class SharedModule { }