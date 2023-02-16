import React, { useState } from 'react';
import './App.css';
import $ from 'jquery';

import diamond from './assets/img/diamond.png';
import headerRings from './assets/img/headerRings.png';
import rings from './assets/img/rings.png';
import mascot from './assets/img/mascot.png';
import img1 from './assets/img/img.png';
import img2 from './assets/img/img2.png';
import tgPhone from './assets/img/tgPhone.png';
import stake from './assets/ico/staking.png';
import governance from './assets/ico/governance.png';

const App = () => {
  const [barState, setBarstate] = useState(true);

  const menuToggle = () => {
    if($(window).width() <= 1024) { // for mobile
        setBarstate(!barState);
        if(barState) {
            $('.bar1').css({'transform': 'rotate(-45deg) translate(-8px, 7px)'});
            $('.bar2').css({'opacity': '0'});
            $('.bar3').css({'transform': 'rotate(45deg) translate(-8px, -8px)'});
            $('.bar1').css({'backgroundColor': 'rgb(204, 135, 45)'});
            $('.bar2').css({'backgroundColor': 'rgb(204, 135, 45)'});
            $('.bar3').css({'backgroundColor': 'rgb(204, 135, 45)'});
            $("nav ul").slideDown({
              start: function () {
                  $(this).css({
                      display: "flex"
                  });
              }
          });
        }
        else {
            $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
            $('.bar2').css({'opacity': '1'});
            $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
            $('.bar1').css({'backgroundColor': '#fff'});
            $('.bar2').css({'backgroundColor': '#fff'});
            $('.bar3').css({'backgroundColor': '#fff'});
            $("nav ul").slideUp({
              start: function () {
                  $(this).css({
                      display: "flex"
                  });
              }
            });
        }
    }
  }

  if($(window).width() <= 768) {
    $('nav ul li').click(() => {
      setBarstate(true);

      $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
        $('.bar2').css({'opacity': '1'});
        $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
        $('.bar1').css({'backgroundColor': '#fff'});
        $('.bar2').css({'backgroundColor': '#fff'});
        $('.bar3').css({'backgroundColor': '#fff'});
        $("nav ul").slideUp({
          start: function () {
              $(this).css({
                  display: "none"
              });
          }
        });
    });
  }

  return (
    <div id='app'>
      <header>
        <nav>
          <div className='container'>
            <a href="" className='logo'>ton story</a>
            <div id="menuToggleMobDiv" onClick={menuToggle}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul>
              <li><a href='#header'>About</a></li>
              <li><a href='#ecosystem'>Ecosystem</a></li>
              <li><a href='#products'>Products</a></li>
              <li><a href='#join'>Join</a></li>
              <li><a href='#tokens'>Token</a></li>
              <li><a href=''>Job</a></li>
            </ul>
            <button>contact us →</button>
          </div>
        </nav>
        <div id='header'>
          <div className='container'>
            <h1>Bringing Millions To <br /> The Metaverse</h1>
            <p>TTM DAO is a community-first, decentralized autonomous organization (DAO) that creates value for <br /> investors and players in the growing blockchain metaverse (game + social + NFTs)</p>
            <div className='diamondRings'>
              <img src={diamond} alt='diamond' />
              <img src={headerRings} alt='headerRings' />
            </div>
          </div>
        </div>
      </header>
      <div id='ecosystem'>
        <section>
          <div className='title'>
            <hr />
            <h2>ecosystem</h2>
            <hr />
          </div>
          <div className='container'>
              <p>Five key pillars of TTM DAO ecosystem to fulfill our vision</p>
              <div className='tabs'>
                <button>Path Ventures</button>
                <button>Path Guild</button>
                <button>Path Gaming Platform</button>
                <button>Path Fintech</button>
                <button>Path Insights</button>
              </div>
              <div className='wrap'>
                <div>
                  <p>Path Ventures</p>
                  <p>Invest in web3 games and metaverses by providing access to our network of capital, advice and ecosystem integration support</p>
                  <button>Explore</button>
                </div>
                <img src={rings} alt='rings' />
              </div>
          </div>
        </section>
      </div>
      <div id="products">
        <section>
          <div className='title'>
            <hr />
            <h2>TTM dao products</h2>
            <hr />
          </div>
          <div className='container'>
            <div className='cardWrap'>
              <div className='card'>
                <div className='img'>
                  <img src={mascot} alt='mascot' />
                </div>
                <p><span>TonFancy.tech</span> <br />
The first gaming metaverse of entertainment on the TON blockchain, peer-to-peer (P2P) game applications, where each user can play or compete with other platform participants. Most of the games in our universe are based on decentralization, pools and smart contracts.</p>
                <div className='btnWrap'>
                  <button>Use TonFancy</button>
                  <button>Learn more</button>
                </div>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={diamond} alt='diamond' />
                </div>
                <p>Lörem ipsum bere terraplastisk asoras. Nysk tävla ut. Prerade krogisk tredis didåskapet gäsade. Berade vitöngen i askstoppad.
Lörem ipsum bere terraplastisk asoras. Nysk tävla ut. Prerade krogisk tredis didåskapet gäsade. Berade vitöngen i askstoppad.  </p>
                <div className='btnWrap'>
                  <button>Coming Soon</button>
                  <button>Learn more</button>
                </div>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={diamond} alt='diamond' />
                </div>
                <p>Lörem ipsum bere terraplastisk asoras. Nysk tävla ut. Prerade krogisk tredis didåskapet gäsade. Berade vitöngen i askstoppad.
Lörem ipsum bere terraplastisk asoras. Nysk tävla ut. Prerade krogisk tredis didåskapet gäsade. Berade vitöngen i askstoppad.  </p>
                <div className='btnWrap'>
                  <button>Coming Soon</button>
                  <button>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id='decentrilize'>
        <section>
          <div className='container'>
            <h2>Decentralized Autonomous</h2>
            <p>Ownership of $TTM tokens give the holders a voice in directing the future of TTM DAO</p>
            <div className='wrap'>
              <div>
                <p>Proporsal Forum</p>
                <p>Vote with STTM →</p>
                <img src={img1} alt='img1' />
              </div>
              <div>
                <p>Voting Platform</p>
                <p>Propose and discuss →</p>
                <img src={img2} alt='img2' />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="join">
        <div className='container'>
          <h2>Join The DAO</h2>
          <div className='wrap'>
            <div>
              <p>Join our vibrant community on Telegram</p>
              <button>Join our telegram channel</button>
            </div>
            <img src={tgPhone} alt='phone' />
          </div>
        </div>
      </div>
      <div id="tokens">
        <div className='title'>
            <hr />
            <h2>$TTM Tokens</h2>
            <hr />
        </div>
        <div className='container'>
          <div className='wrap'>
            <div>
              <p>What you can do with $TTM</p>
              <p>$TTM is the governance token of TTM DAO, with future utilities to be announced 
The token. Not one, but three</p>
              <div className='btnWrap'>
                <button>Tokenomics</button>
                <button>Stake</button>
              </div>
            </div>
            <div>
              <div className='cart'>
                <div className='img'>
                  <img src={stake} alt='stake' />
                </div>
                <p>Staking</p>
                <p>Stake $TTM to enjoy rewards as long-term supporter of TTMDAO</p>
              </div>
              <div className='cart'>
                <div className='img'>
                  <img src={governance} alt='governance' />
                </div>
                <p>Governance</p>
                <p>Ownership of $TTM tokens give the holders a voice in directing the future of TTMDAO</p>
              </div>
              <div className='cart'>
                <button>More to come</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='container'>
          <span>This is a community project that uses a collaborative management approach. <br /><br /> Collective wisdom is the key to increasing the value of TTM DAO tokens and projects!</span>
          <div>
            <p>Users</p>
            <span><a href=''>NFT and Economics</a></span>
            <span><a href=''>Service</a></span>
            <span><a href=''>Where to buy Toncoin</a></span>
          </div>
          <div>
            <p>Governance</p>
            <span><a href=''>Voting</a></span>
            <span><a href=''>Forum</a></span>
            <span><a href=''>Treasury</a></span>
          </div>
          <div>
            <p>Docs</p>
            <span><a href=''>White Paper</a></span>
            <span><a href=''>GitHub</a></span>
            <span><a href=''>GitBook</a></span>
          </div>
        </div>
        <div>
          <div className='container'>
            <div><span>© TTMDAO 2022</span><span>Based on TON</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;