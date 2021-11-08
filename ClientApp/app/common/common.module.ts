import { NgModule } from '@angular/core';
import { AzureHttpClient } from './services/azureHttpClient';
import { UserService } from './services/user.service';
import { CoinMarketCapService } from './services/coinmarketcap.service';

@NgModule({
    providers: [AzureHttpClient, UserService, CoinMarketCapService]
})
export class AppCommonModule { }