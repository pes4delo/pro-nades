import {SafeAreaView, Text} from 'react-native'
import MapaInfernoTr from '../components/MapaInfernoTr'

export function Mapa({route}){
  

    const { side, map } = route.params
    if (side == 'Tr' && map == 'Inferno')
      return(
        <SafeAreaView>
            
            <MapaInfernoTr></MapaInfernoTr>
            
        </SafeAreaView>
  
      )
    else if (side == 'Ct' && map == 'Inferno')
        return(
          <SafeAreaView>
  
          <Text>deu certo | {side +' '+ map}</Text>
  
          </SafeAreaView>  
      
          )
    else if (side == 'Tr' && map == 'Mirage'){
        return(
          <SafeAreaView>
  
          <Text>deu certo | {side +' '+ map}</Text>
  
          </SafeAreaView>  
       
  
        )
  
    }
    else if (side == 'Ct' && map == 'Mirage'){
        return(
          <SafeAreaView>
  
          <Text>deu certo | {side +' '+ map}</Text>
  
          </SafeAreaView> 
          )
        
    }
    else if (side == 'Tr' && map == 'Nuke'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
  
      )
  
  
    }
    else if (side=='Ct' && map == 'Nuke'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
    
        )
    }
    else if (side == 'Tr' && map == 'Overpass'){
        return(
          <SafeAreaView>
  
          <Text>deu certo | {side +' '+ map}</Text>
    
          </SafeAreaView> 
        )
    }
    else if (side == 'Ct' && map == 'Overpass'){
        return(
          <SafeAreaView>
  
          <Text>deu certo | {side +' '+ map}</Text>
    
          </SafeAreaView> 
        )
    }
    else if (side == 'Tr' && map == 'Vertigo'){
        return(
          <SafeAreaView>
  
          <Text>deu certo | {side +' '+ map}</Text>
    
          </SafeAreaView> 
        )
    }
    else if (side == 'Ct' && map == 'Vertigo'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
    }
    else if (side == 'Tr' && map == 'Ancient'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }
    else if (side == 'Ct' && map == 'Ancient'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }
    else if (side == 'Tr' && map == 'Anubis'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }
    else if (side == 'Ct' && map == 'Anubis'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }
    else if (side == 'Tr' && map == 'Dust2'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }
    else if (side == 'Ct' && map == 'Dust2'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }
    else if (side == 'Tr' && map == 'Train'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    } 
    else if (side == 'Ct' && map == 'Train'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    } 
    else if (side == 'Tr' && map == 'Cache'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    } 
    else if (side == 'Ct' && map == 'Cache'){
      return(
        <SafeAreaView>
  
        <Text>deu certo | {side +' '+ map}</Text>
  
        </SafeAreaView> 
      )
  
  
    }           
  }