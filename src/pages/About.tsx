import { useState } from 'react'

type Hobby = {
  title: string
  photo: string
  alt: string
  blurb: string[]
}

const HOBBIES: Hobby[] = [
  {
    title: 'HOCKEY',
    photo: './photos/hockey.jpg',
    alt: 'League championship team photo on the ice',
    blurb: [
      'I have been a big hockey fan my entire life — growing up in the Detroit area, my family are big Red Wings fans.',
      'I only began playing ice hockey about five years ago, as an adult. It was intimidating at first and a large commitment, but after taking the leap I couldn’t be happier with my decision to start playing.',
    ],
  },
  {
    title: 'ROCKET LEAGUE',
    photo: './photos/rocket-league.jpg',
    alt: 'Rocket League artwork — rocket-powered cars launching off clouds toward a giant ball and moon',
    blurb: [
      'When the rink is closed, I’m playing car-soccer. Whether it’s playing with friends all Saturday night or competing against the professionals for money, it’s always a great time.',
    ],
  },
  {
    title: 'ART',
    photo: './photos/art.jpg',
    alt: 'Stained glass windows of Sainte-Chapelle',
    blurb: [
      'Anywhere I travel, you will find me at the museums.',
      'When I see a marble sculpture I always think of my previous boss and friend Peter, who would often tell us: “Building software is like building a sculpture. You chisel away a rough outline, then refine and repeat.”',
    ],
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
            {h.blurb.map((para) => (
              <p className="dim" key={para}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
