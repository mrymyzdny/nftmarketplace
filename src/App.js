import './App.css';
import Nav from './components/nav/Nav.js'
import Header from './components/header/Header';
import NFTcart from './components/nftcarts/NFTcart'
import BtnGroup  from './components/btngroup/BtnGroup';
import UserTitle from './components/users-title/UserTitle';
import Users from './components/users/Users';
import ProcessTitle from './components/process-title/ProcessTitle';
import Process from './components/process/Process';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <BtnGroup />
      <div className='nft-carts'>
        <NFTcart src="./images/nf1.png" name="Pakora Vision #190" />
        <NFTcart src="./images/nf5.png" name="Korola Vhaji #191" />
        <NFTcart src="./images/nf6.png" name="Kacchi Biriyani #205" />
        <NFTcart src="./images/nf7.png" name="iOs Punk Series #190" />
        <NFTcart src="./images/nf8.png" name="Humble Assasin #199" />
        <NFTcart src="./images/nf2.png" name="Cyber Punk #189" />
        <NFTcart src="./images/nf3.png" name="Cyber Hunter #22" />
        <NFTcart src="./images/nf4.png" name="Creed Mirage #85" />
      </div>  
      <UserTitle />
      <div className='users'>
        <Users img="./images/1u.jpeg" username="SnoopDogg" rise="12,000,00"/>
        <Users img="./images/2u.jpeg" username="Pablo Scober" rise="12,000,00"/>
        <Users img="./images/3u.jpeg" username="Helsinkli Del" rise="12,000,00"/>
        <Users img="./images/4u.jpeg" username="Rosalina Will" rise="12,000,00"/>
        <Users img="./images/5u.jpeg" username="Rosalina Will" rise="12,000,00"/>
        <Users img="./images/1u.jpeg" username="Maranda Halim" rise="12,000,00"/>
        <Users img="./images/2u.jpeg" username="Helsinkli DEl" rise="12,000,00"/>
      </div>
      <ProcessTitle />
      <div className='processes'>
        <Process img='./images/1.png' title='Connect Wallet' desc='An cryptocurrency is a digital currency, which' num='01' />
        <Process img='./images/2.png' title='Create Collections' desc='Is an alternative form of payment created use encryption' num='02' />
        <Process img='./images/3.png' title='Add Your NFTs' desc='Algorithms. The use of encryto technologies' num='03' />
        <Process img='./images/4.png' title='Sell Your NFTs' desc=' Means that cryptocurrencies function both ' num='04' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
