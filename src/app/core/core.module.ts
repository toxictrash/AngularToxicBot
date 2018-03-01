import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '@core/components/loading/loading.component';
import { ErrorComponent } from '@core/components/error/error.component';
import { SplashScreenComponent } from '@core/components/splash-screen/splash-screen.component';
import { ModalComponent } from '@core/components/modal/modal.component';
import { AuthGuardService } from '@core/services/auth-guard.service';
import { LayoutComponent } from '@core/containers/layout/layout.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    ErrorComponent,
    SplashScreenComponent,
    ModalComponent,
    LayoutComponent
  ],
  providers: [
    AuthGuardService
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    SplashScreenComponent,
    ModalComponent,
    LayoutComponent
  ]
})
export class CoreModule { }
