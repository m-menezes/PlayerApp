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

import { TouchableHighlight } from 'react-native';
import { Strong, Container, TabsContainer, TabItem, TabImage, TabText, Logo, Button, Row} from './styles';
// import { Row } from 'native-base';

export default function Tabs() {

    let platforms = [
        { id : 6,       source : pc,            platformName : 'PC (Microsoft Windows)' },
        { id : 7,       source : ps,            platformName : 'PlayStation'            },
        { id : 8,       source : ps2,           platformName : 'PlayStation 2'          },
        { id : 9,       source : ps3,           platformName : 'PlayStation 3'          },
        { id : 48,      source : ps4,           platformName : 'PlayStation 4'          },
        { id : 46,      source : psvita,        platformName : 'PlayStation Vita'       },
        { id : 37,      source : nin3ds,        platformName : 'Nintendo 3DS'           },
        { id : 130,     source : ninswitch,     platformName : 'Nintendo Switch'        },
        { id : 5,       source : wii,           platformName : 'Wii'                    },
        { id : 41,      source : wiiu,          platformName : 'Wii U'                  },
        { id : 11,      source : xbox,          platformName : 'Xbox'                   },
        { id : 12,      source : xbox360,       platformName : 'Xbox 360'               },
        { id : 49,      source : xboxone,       platformName : 'Xbox One'               },
    ];

    return (
        <Container >
            <Row>
                <Strong>Platforms</Strong>
                <TouchableHighlight onPress={ () => navigation.navigate( 'AllPlatforms' ) } >
                    <Button>All</Button>
                </TouchableHighlight>
            </Row>
            <TabsContainer>
                { platforms.map(r => 
                    <TouchableHighlight key={r.id} onPress={ () => navigation.navigate( 'PlatformPage', { platformId: r.id, platformName: r.platformName} ) } >
                        <TabItem>
                            <TabImage><Logo source={r.source} style={{ resizeMode: 'contain' }}/></TabImage>
                            <TabText>{r.platformName}</TabText>
                        </TabItem>
                    </TouchableHighlight>
                ) }
            </TabsContainer>
        </Container>
    );
}