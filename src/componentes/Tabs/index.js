import React from 'react';
import pc from '~/assets/pc.png';
import ps from '~/assets/ps.png';
import ps2 from '~/assets/ps2.png';
import ps3 from '~/assets/ps3.png';
import ps4 from '~/assets/ps4.png';
import psvita from '~/assets/psvita.png';
import nin3ds from '~/assets/nin3ds.png';
import ninswitch from '~/assets/ninswitch.png';
import wii from '~/assets/wii.png';
import wiiu from '~/assets/wiiu.png';
import xbox from '~/assets/xbox.png';
import xbox360 from '~/assets/xbox360.png';
import xboxone from '~/assets/xboxone.png';

import { Strong, Container, TabsContainer, TabItem, TabImage, TabText, Logo} from './styles';

export default function Tabs() {
  return (
    <Container >
      <Strong>Categorias</Strong>
      <TabsContainer>
        <TabItem>
          <TabImage>
            <Logo source={pc} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>PC (Microsoft Windows)</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={ps} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>PlayStation</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={ps2} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>PlayStation 2</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={ps3} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>PlayStation 3</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={ps4} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>PlayStation 4</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={psvita} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>PlayStation Vita</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={nin3ds} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>Nintendo 3DS</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={ninswitch} style={{ resizeMode: 'contain' }}/>
          </TabImage>
          <TabText>Nintendo Switch</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={wii} style={{ resizeMode: 'contain' }}/>
          </TabImage>
            <TabText>Wii</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={wiiu} style={{ resizeMode: 'contain' }}/>
          </TabImage>
            <TabText>Wii U</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={xbox} style={{ resizeMode: 'contain' }}/>
          </TabImage>
            <TabText>Xbox</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={xbox360} style={{ resizeMode: 'contain' }}/>
          </TabImage>
            <TabText>Xbox 360</TabText>
        </TabItem>
        <TabItem>
          <TabImage>
            <Logo source={xboxone} style={{ resizeMode: 'contain' }}/>
          </TabImage>
            <TabText>Xbox One</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}