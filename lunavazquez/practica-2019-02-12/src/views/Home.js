import React from 'react';

const images = [
  'https://occ-0-659-987.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABVtP9xMSfgAUGmId0gHwfZBBPvIh6qnKfgsMB-1uVORqjW8X7iGW0V1y69JhTG__dk557wESOQJPAkJhgmnGALk9YOY.webp?r=80d',
  'https://occ-0-659-987.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABbGb_ZNN5gyKyA4XzL2iRnUZRGuQznqqn3WzFFxqbdF-iHXT1cNDrl7jozmQOc1XbIeNjNG_GMU-JDZ8fZxk6BSQmU0.webp?r=5dd',
  'https://occ-0-659-987.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABc7aIR-SYo7Es0V7xXYc6_zrTfZglD1NTDha4z96lT-KYcNJy-e-1n4JSvHtRN_wZDuq9-EWvUWzcZG9_cND9JQqOxo.webp?r=b5c',
  'https://occ-0-659-987.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABc02cAlTBEp-9lTdATIyloEQMNTgaTVWIoFdAlukmbh76D8q7kNHgIY5i4IyTwXN3qPCdpF2tYGv3qPIUWTDacRSkaI.webp?r=095',
  'https://occ-0-659-987.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWwjpPnUNyBiONdaeLcb7yseI6UVMNRuXRhG4-0qTOe4bhsKuzsdX-5leyNYqdi0UaIVrYMrW4MsS0jS4ysLpESADcn_Xjrip8tm1MpeisZs06u_rtpX7p2vyltd.jpg?r=073',
  'https://occ-0-659-987.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABaH8gxEncAQvyEbuhsTfvPsuK_wLo7BzcpYgLnMyO4TAr343TQFADZMeOHtAnMCREv4naFZ3Bh4eRQylVhOvVpQPx1T9YrAs_WNvur43tjk-9pvtNhE3awFh0NJ1.jpg?r=445',
];

function Home(props) {
  return (
    <div className="home">
      <div className="imageContainer">
        {images.map((image, index) => {
          return (
            <div>
              <img src={image} alt={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
