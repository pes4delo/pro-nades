
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { MostrarVideoSmkCt } from './src/routes/TelaVideoSmkCtInferno'
import {MostrarVideoSmkCoffin} from './src/routes/TelaVideoSmkCoffinInferno'
import { MostrarVideoSmkBanana } from './src/routes/TelaVideoSmkBananaInferno';
import { TelaInicial } from './src/routes/TelaInicio';
import { TelaSelecaoDeLado } from './src/routes/TelaSelectLado';
import { Mapa } from './src/routes/TelaSelectMapa';
import { MostrarVideoSmkMid } from './src/routes/TelaVideoSmkMidInferno';
import { MostrarVideoSmkNip } from './src/routes/TelaVideoSmkNipInferno';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pick a Side"
          component={TelaSelecaoDeLado}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />
        <Stack.Screen
          name="Map"
          component={Mapa}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />
        <Stack.Screen
          name="VideoSmkCt"
          component={MostrarVideoSmkCt}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTitle: 'Smoke CT',
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />
        <Stack.Screen
          name="VideoSmkCoffin"
          component={MostrarVideoSmkCoffin}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTitle: 'Smoke Caixão',
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />
        <Stack.Screen
          name="VideoSmkBanana"
          component={MostrarVideoSmkBanana}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTitle: 'Smoke Banana',
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />
        <Stack.Screen
          name="VideoSmkMid"
          component={MostrarVideoSmkMid}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTitle: 'Smoke Mid',
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />
        <Stack.Screen
          name="VideoSmkNip"
          component={MostrarVideoSmkNip}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTitle: 'Smoke NIP',
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
