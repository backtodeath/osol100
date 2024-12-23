import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SharedModule, RouterModule],
})
export default class HomeComponent implements OnInit {
  coinApiUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ai16z,fartcoin,grass,goatseus-maximus,io,act-i-the-ai-prophecy,zerebro,nosana,griffain,tars-protocol,ai-rig-complex,eliza,alchemist-ai,memes-ai,degen-spartan-ai,dasha,dolos-the-bully,kween,orbit-2,fxn,top-hat,shoggoth,agenttank,deep-worm,big-pharmai,bongo-cat,numogram,ava-ai,opus-2,obot,project89,chaos-and-disorder,meow,koala-ai,kitten-haimer,pippin,max-2,aimonica-brands,autonomous-virtual-beings,forest,solaris-ai,synesis-one,moe-4,universal-basic-compute,mizuki,naitzsche,slopfather,the-lokie-cabal,tensor,arok-vc,aiwithdaddyissues,bloomsperg-terminal,omega-2,thales-ai,keke-terminal,horny,quasar-2,ropirito,kolin,kwantxbt,agent-rogue,dither,duck-ai,centience,iq6900,darksun,weird-medieval-memes,yousim,sensus,ocada-ai,singularry,naval-ai,kira-2,kirakuru,brot,effective-accelerationism,cheshire-grin,limbo,size,neroboss,gmika,kira-3,convo,sqrfund,ugly-dog,gemxbt,roastmaster9000,nova-on-mars,sendor,flowerai,dojo-protocol,internosaur,devin,lea-ai,rex-3,aletheia,mona-arcane,apicoin,cyphomancer,lucy-ai&order=market_cap_desc&per_page=250&sparkline=false&locale=en';
  coins: any[] = []; // Holds the fetched coin data
  isLoading = true;
  refreshCooldown = 60;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCoins();
    this.autoRefresh();
    this.startCooldownTimer();
  }

  fetchCoins(): void {
    this.http.get<any[]>(this.coinApiUrl).subscribe({
      next: response => {
        this.coins = response;
        this.isLoading = false;
      },
      error: error => {
        console.error('Error fetching coins:', error);
        this.isLoading = false;
      },
    });
  }

  autoRefresh(): void {
    interval(60000).subscribe(() => {
      this.fetchCoins();
      this.refreshCooldown = 60; // Reset cooldown
    });
  }

  startCooldownTimer(): void {
    setInterval(() => {
      if (this.refreshCooldown > 0) {
        this.refreshCooldown -= 1;
      }
    }, 1000);
  }

  manualRefresh(): void {
    this.fetchCoins();
    this.refreshCooldown = 60; // Reset cooldown
  }

  // Helper function to determine the color of sparkline
  get24hChangeColor(change: number): string {
    return change > 0 ? 'green' : change < 0 ? 'red' : 'grey';
  }
}
