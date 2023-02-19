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

  const tab1 = (e) => {
    $('#ecosystem .tabs button').css({background: 'transparent'}).css({border: '1px solid #2DA359'});
    $(e.target).css({background: '#2DA359'}).css({border: '1px solid #2E4B94'});
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(1)').hide().text('NFT').fadeIn('slow');
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(2)').hide().text('The main goal is for members to join forces so that the collective community can invest treasury funds in NFT blue chip art and other collectibles. And also because of the large number of scammers on the market, they have the ability to give a trust factor to any project available on the market.').fadeIn('slow');
  }
  const tab2 = (e) => {
    $('#ecosystem .tabs button').css({background: 'transparent'}).css({border: '1px solid #2DA359'});
    $(e.target).css({background: '#2DA359'}).css({border: '1px solid #2E4B94'});
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(1)').hide().text('Games').fadeIn('slow');
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(2)').hide().text('Games DAOs are focused on the self-organizing community aspect of DAOs by bringing together like-minded individuals. The mission is to leverage the collective knowledge of Metaverse NFT and P2E game development. Any decision will be reached by voting in accordance with the decisions of the community.').fadeIn('slow');
  }
  const tab3 = (e) => {
    $('#ecosystem .tabs button').css({background: 'transparent'}).css({border: '1px solid #2DA359'});
    $(e.target).css({background: '#2DA359'}).css({border: '1px solid #2E4B94'});
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(1)').hide().text('Social').fadeIn('slow');
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(2)').hide().text('Social DAOs are focused on the self-organizing community aspect of DAOs by bringing together like-minded individuals such as builders, artists, and creatives.').fadeIn('slow');
  }
  const tab4 = (e) => {
    $('#ecosystem .tabs button').css({background: 'transparent'}).css({border: '1px solid #2DA359'});
    $(e.target).css({background: '#2DA359'}).css({border: '1px solid #2E4B94'});
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(1)').hide().text('Utilities').fadeIn('slow');
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(2)').hide().text('Social DAOs are focused on the self-organizing community aspect of DAOs by bringing together like-minded individuals such as builders, artists, and creatives.').fadeIn('slow');
  }
  const tab5 = (e) => {
    $('#ecosystem .tabs button').css({background: 'transparent'}).css({border: '1px solid #2DA359'});
    $(e.target).css({background: '#2DA359'}).css({border: '1px solid #2E4B94'});
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(1)').hide().text('Grants').fadeIn('slow');
    $('#ecosystem > section > div.container > div.wrap > div > p:nth-child(2)').hide().text('TTM DAO creates next-generation coordination tools to connect them - built the DAO native way.').fadeIn('slow');
  }

  return (
    <div id='app'>
      <header>
        <nav>
          <div className='container'>
            <a href="" className='logo'>TTMDAO.Space</a>
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
            <a target="_blank" href='https://t.me/tonstory'><button>contact us →</button></a>
          </div>
        </nav>
        <div id='header'>
          <div className='container'>
            <h1>Collective wisdom <br /> a collaborative management approach</h1>
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
                <button onClick={tab1}>NFT</button>
                <button onClick={tab2}>Games</button>
                <button onClick={tab3}>Social</button>
                <button onClick={tab4}>Utilities</button>
                <button onClick={tab5}>Grants</button>
              </div>
              <div className='wrap'>
                <div>
                  <p>NFT</p>
                  <p>The main goal is for members to join forces so that the collective community can invest treasury funds in NFT blue chip art and other collectibles. And also because of the large number of scammers on the market, they have the ability to give a trust factor to any project available on the market.</p>
                  <button>Learn more</button>
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
                The first gaming metaverse of entertainment on the TON blockchain, peer-to-peer (P2P) game applications, where each user can play or compete with other platform participants. Most of the games in our universe are based on decentralization, pools and smart contracts.
                </p>
                <div className='btnWrap'>
                  <button>Use TonFancy</button>
                  <button>Learn more</button>
                </div>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={diamond} alt='diamond' />
                </div>
                <p>
                A marketplace and digital community designed to create a level playing field for creators and collectors alike. One of the things that will be laid is the regular creation of nft collections from famous artists, which will be distributed through freemint.
                </p>
                <div className='btnWrap'>
                  <button>Coming Soon</button>
                  <button>Learn more</button>
                </div>
              </div>
              <div className='card'>
                <div className='img'>
                  <img src={diamond} alt='diamond' />
                </div>
                <p>
                Reputation ID. Project or wallet. Develop collective trust in certain individuals.
                </p>
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