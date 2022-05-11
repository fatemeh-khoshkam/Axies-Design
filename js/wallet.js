function chkWallet(){
    const walletText = document.getElementById('wallet');
    if (window.innerWidth > 1340) {
      walletText.innerHTML = 'Wallet connect';
      walletText.style.marginLeft = '1rem';
    } 
    else{
      walletText.innerHTML = '';
      walletText.style.marginLeft = '0';
    } 
  }
  window.addEventListener('load',() => {    
    chkWallet();    
  });
  window.addEventListener('resize',() => {    
    chkWallet();    
  });