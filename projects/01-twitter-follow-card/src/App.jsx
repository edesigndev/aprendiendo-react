import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (params) {
  const users = [
    {
      userName: 'minudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'elazaro',
      name: 'Edgar Lazaro Roldan',
      isFollowing: true
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdezs',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          initialIsFollowing={isFollowing}
          userName={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
