
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { MostrarVideo } from './src/routes/TelaVideoInfernoTr'
import { TelaInicial } from './src/routes/TelaInicio';
import { TelaSelecaoDeLado } from './src/routes/TelaSelectLado';
import { Mapa } from './src/routes/TelaSelectMapa';


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
          name="Video"
          component={MostrarVideo}
          options={{ headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              
              
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center', 

          }
        }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
