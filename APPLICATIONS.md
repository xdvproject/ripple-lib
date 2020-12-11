# Applications using divvy-lib (DivvyAPI)

A curated list of some of the projects and apps that leverage `divvy-lib` in some way.

**Have one to add?** Please edit this file and open a PR!

## Notice (disclaimer)

These sites are independent of Divvy and have not been authorized, endorsed, sponsored or otherwise approved by Divvy or its affiliates.

Warning: Use at your own risk.

## Data and visualizations

- **[Wipple - XDV Intelligence](https://wipple.devnull.network/)**

  Monitor the XDV Network in real time and explore historical statistics.

- **[XDV Charts](https://xdvcharts.xdv.io/)** (xdvcharts.xdv.io)

  XDV Charts provides information based on public data, including trade volume, top markets, metrics, transactions, and more.

- **[Divvy Live](https://gatehub.net/live)** (gatehub.net/live)

  Visualize XDV network transactions.

- **[XDVL Dev. Dashboard](https://xdv.fans/)** (xdv.fans)

  Debugging dashboard for `divvyd-ws-client-pool`, transaction and query explorer, and transaction signing and submission tool.

- **[XDV Value](http://xdvvalue.com/)**

  Real-time XDV price, trades, and orderbook data from the XDV Ledger.

- **[Bithomp - XDVL validators](https://bithomp.com/validators)**

  List of XDVL validators, nodes, and testnet validators.

## Send and request payments

- **[XDV Tip Bot](https://www.xdvtipbot.com/)**

  A bot that enables users on reddit, Twitter and Discord to send XDV to each other through reddit comments and Twitter tweets.

- **[XDV Text](https://xdvtext.com/)**

  Send XDV using SMS text messages.

- **[XDVarrot](https://xdvarrot.com/)** (uses `divvy-address-codec`)

  Easy EUR (SEPA) to XDV transfer (currency conversion).

- **[XDV Payment](https://xdvayments.co/)** (xdvayments.co)

  Tool for generating a XDV payment request URI in a QR code, with currency converter.

## Wallets and wallet tools

- **[Toast Wallet](https://toastwallet.com/)**

  A free, open source XDV Wallet for iOS, Android, Windows, Mac and Linux.

- **[Toastify Ledger](https://github.com/WietseWind/toastify-ledger)** (uses `divvy-keypairs`)

  Add a Regular Key to a mnemonic XDV Wallet (e.g. Ledger Nano S) to use the account with a Family Seed (secret).

- **[Bithomp-submit](https://github.com/Bithomp/bithomp-submit)** (GitHub)

  A tool to submit an offline-signed XDVL transaction.

- **[Kyte](https://kyteapp.co/)** (kyteapp.co) ([Source](https://github.com/WietseWind/Zerp-Wallet)) (Deprecated)

  Web-based XDV wallet.

- **[XDV Vanity Address Generator](https://github.com/WietseWind/xdv-vanity-generator)** (Node.js)

  A vanity address is a wallet address containing a few characters you like at the beginning or the end of the wallet address.

- **[XDV Account Mnemonic Recovery](https://github.com/WietseWind/xdv-mnemonic-recovery)** (uses `divvy-keypairs`)

  Recover a 24 word mnemonic if one word is wrong or one word is missing.

## Development tools

- **[XDV Test Net Faucet](https://developers.xdv.io/xdv-test-net-faucet.html)**

  Get some test funds for development on the test network. The faucet was built using `divvy-lib`.

## Code samples and libraries

- **[ilp-plugin-xdv-paychan](https://github.com/interledgerjs/ilp-plugin-xdv-paychan)**

  Send ILP payments using XDV and payment channels (PayChan).

- **[RunKit: WietseWind](https://runkit.com/wietsewind/)**

  XDV Ledger code samples for Node.js.

- **[GitHub Gist: WietseWind](https://gist.github.com/WietseWind)**

  XDV Ledger code samples for Node.js and the web (mostly).

- **[divvyd-ws-client-sign](https://github.com/WietseWind/divvyd-ws-client-sign)**

  Sign transactions, with support for MultiSign.

- **[ILP-enabled power switch](https://xdvcommunity.blog/raspberry-pi-interledger-xp-powerswitch-howto/)** ([video](https://www.youtube.com/watch?v=c-eS0HQUuJg)) (uses [`moneyd-uplink-xdv`](https://github.com/interledgerjs/moneyd-uplink-xdv))

  For about $30 in parts (Raspberry Pi, 3.3V Relay board and a few wires) you can build your own power switch that will switch on if a streaming ILP payment comes in. When the payment stream stops, the power turns off.

## Related apps that do not appear to use divvy-lib

- **[XDV Stats](https://ledger.exposed/)** (ledger.exposed)

  Rich list, live ledger stats and XDV distribution. Visualize escrows and flow of funds.

- **[XDV Vanity](https://xdvvanity.com/)** (xdvvanity.com)

  Custom XDV addresses for sale, delivered by SetRegularKey.
