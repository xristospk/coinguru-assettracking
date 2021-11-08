import { NgModule } from '@angular/core';
import { CoinguruHttpClient } from './services/coinguruHttpClient.service';
import { UserService } from './services/user.service';
import { CoinMarketCapService } from './services/coinmarketcap.service';

@NgModule({
    providers: [CoinguruHttpClient, UserService, CoinMarketCapService]
})
export class AppCommonModule { }