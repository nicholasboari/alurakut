import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

export default function Home() {

  const githubUser = 'nicholasboari';
  return (
    <MainGrid>
      <div className= "profileArea" sytle={{ gridArea: 'profileArea' }}>
        <Box>
          <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}}/>
        </Box>
      </div>
        
      <div className= "welcomeArea" sytle={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem vindo
        </Box>
      </div>
    
      <div className= "profileRelationsArea" sytle={{ gridArea: 'profileRelationsArea' }}>
      <Box>
          Pessoas da comunidade
        </Box>
        <Box>
          Comunidade
        </Box>
      </div>

    </MainGrid>
  )
}
