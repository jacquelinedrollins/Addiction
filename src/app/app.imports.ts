// Ionic native providers
import { enableProdMode } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

enableProdMode();

// Modules
import { IonicSelectableModule } from 'ionic-selectable';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PhotoLibraryService, DbService, AuthService, LoadingService, ToastService } from '../services/services';

export const MODULES = [
    IonicSelectableModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
];

export const SERVICES = [];
// export const PIPES = [];

export const PROVIDERS = [
    LoadingService,
    ToastService,
    AuthService,
    DbService,
    PhotoLibraryService,

    // Ionic native specific providers
    StatusBar,
    WebView,
    SplashScreen,
    Keyboard,
    Facebook,
    File,
    GooglePlus,
    Crop,
    Camera,
    AppVersion,
    Firebase
];
export const COMPONENTS = [];
