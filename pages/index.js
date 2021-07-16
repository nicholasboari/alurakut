import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommuns';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfilesRelations';

function ProfileSidebar(propriedades){
  console.log(propriedades);
  return ( 
  <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
  </Box>
  )
}



export default function Home() {
  
  const githubUser = 'nicholasboari';
  const pessoasFavoritas = ['matheusboari' , 'nicholasboari' , 'matgsan' , 'felipecherubin']

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className= "profileArea" sytle={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
        
      <div className= "welcomeArea" sytle={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
          Bem vindo (a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>
    
      <div className= "profileRelationsArea" sytle={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
        Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>


          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                <a href={`/users/${githubUser}`} key={githubUser}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
                </a>
                </li>
              )
            })}
          </ul> 
       </ProfileRelationsBoxWrapper>
      </div>

    </MainGrid>
    </>
  )
}
