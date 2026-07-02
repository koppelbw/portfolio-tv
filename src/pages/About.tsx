import { useState } from 'react'

type Hobby = {
  title: string
  photo: string
  alt: string
  blurb: string
}

const HOBBIES: Hobby[] = [
  {
    title: 'HOCKEY',
    photo: './photos/hockey.jpg',
    alt: 'League championship team photo on the ice',
    blurb:
      'On the ice year-round — league champion with the trophy to prove it (yes, it involves a beer-can column). Championship rounds are a group stage; the beer league is a lifestyle.',
  },
  {
    title: 'ROCKET LEAGUE',
    photo: './photos/rocket-league.jpg',
    alt: 'Rocket League artwork — rocket-powered cars launching off clouds toward a giant ball and moon',
    blurb:
      'When the rink is closed, hockey continues — with rocket-powered cars. Aerials, demos, and the eternal chase of one more rank.',
  },
  {
    title: 'ART',
    photo: './photos/art.jpg',
    alt: 'Stained glass windows of Sainte-Chapelle',
    blurb:
      'Museums, cathedrals, stained glass, textiles — I chase good craftsmanship wherever it lives. Sainte-Chapelle in person is the best render I have ever seen.',
  },
]

function PhotoSlot({ hobby }: { hobby: Hobby }) {
  const [missing, setMissing] = useState(false)
  return (
    <div className="photo-slot">
      {missing ? (
        <span>NO SIGNAL · {hobby.title}</span>
      ) : (
        <img src={hobby.photo} alt={hobby.alt} onError={() => setMissing(true)} />
      )}
    </div>
  )
}

export default function About() {
  return (
    <>
      <p className="kicker">CH 04 · After hours</p>
      <h2 className="section">ABOUT ME</h2>
      <p className="subtitle">What runs when the build is green</p>

      <div className="grid cols-3" style={{ marginTop: 30 }}>
        {HOBBIES.map((h) => (
          <div className="panel" key={h.title}>
            <PhotoSlot hobby={h} />
            <h3>{h.title}</h3>
            <p className="dim">{h.blurb}</p>
          </div>
        ))}
      </div>
    </>
  )
}
