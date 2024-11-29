import React from 'react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletProvider } from '@solana/wallet-adapter-react';



import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import './App.css'


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import RequestAirdrop from './RequestAirdrop';
import ShowSolBalance from './ShowSolBalance';
import SendTokens from './SendTokens';
import SignMessage from './SignMessage';


function App() {


  return (
    <ConnectionProvider endpoint={"https://api.solana.com"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#000', // Black background
            color: '#fff',           // White text
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '15px',         // Increased padding for better appearance
            fontSize: '30px',        // Increased font size
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}>
            <b>This is Not a Real SOLANA, It only works for DEVNET</b>
          </div>


          <WalletMultiButton />
          <WalletDisconnectButton />

          <RequestAirdrop />
          <ShowSolBalance />
          <SendTokens />
          <SignMessage />


        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
